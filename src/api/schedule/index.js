const fs = require('fs')
const path = require('path')
// io
const io = require('@io')
// logger
const { logInfo, logEvent, logError } = require('@logger')
// db
const { dbSchFind, dbSchFindToday } = require('@db/schedule')
const { dbQsysFind, dbQsysFindOne, dbQsysUpdate } = require('@db/qsys')
// api
const uniqueId = require('@api/utils/uniqueId')
const { fnQsysCheckScheduleFolder } = require('@api/qsys/files')
const { fnSetLive } = require('@api/qsys/broadcast')
const { fnBarixesRelayOn } = require('@api/barix')
const { fnAmxesRelayOn } = require('@api/amx')

// 스케줄 방송 시작 로직
const fnInTimeScheduleRun = async (data) => {
  const { user, name, zones, file } = data
  try {
    // Page를 위한 uniqueId 생성
    const idx = uniqueId(16)
    // page 생성
    const page = await fnMakePageFromSchedule(data)

    //////////////// 릴레이 구동 ////////////////
    // amx 릴레이 구동
    await fnAmxesRelayOn(page)
    // Barix 릴레이 구동
    await fnBarixesRelayOn(page)
    // 로그
    logEvent(`스케줄 방송 릴레이 구동 완료 ID:${idx}`, user, 'live', zones)

    //////////////// 1초 대기 ////////////////
    await new Promise((resolve) => setTimeout(resolve, 1000))

    //////////////// 방송 시작 ////////////////
    const commands = await fnSetLive(idx, { ...data, devices: page }, user)
    io.bridge.emit('qsys:page:message', commands)
    // 로그
    logEvent(
      `스케줄 방송 송출 시작 ${name} - ${file.base}`,
      user,
      'schedule',
      zones
    )
  } catch (error) {
    throw error
  }
}

// 스케줄에서 페이징을 만들어서 qsys로 보내는 함수
const fnMakePageFromSchedule = async (args) => {
  const { idx, name, devices, file, Preamble } = args
  const arr = []
  // 스케줄 반복이 한번이면 메시지 송출 후 삭제 추가 필요
  const promises = devices.map(async (item) => {
    const { ipaddress, deviceId, Zones } = item
    const device = await dbQsysFindOne({ deviceId })
    arr.push({
      deviceId,
      params: {
        Mode: 'message',
        Zones,
        Preamble,
        Station: 1,
        Priority: 3,
        Message: `schedule/${idx}/${file.base}`,
        Start: true
      },
      barix: device.ZoneStatus.map((e) => e.destination),
      name,
      file,
      ipaddress
    })
  })
  await Promise.all(promises)
  return arr
}

const fnSendScheduleToAPP = async () => {
  const schedules = await dbSchFindToday()
  return io.scheduler.emit('today', schedules)
}

// 스케줄러 동작 변경
const fnSendActiveScheduleToAPP = (active) => {
  return io.scheduler.emit('active', active)
}
// 스케줄러 자동 전환 변경
const fnSendAutoScheduleToAPP = (auto) => {
  return io.scheduler.emit('auto', auto)
}

// Qsys 스케줄 폴더를 확인해서 폴더 이름이 스케줄의 idx에 없으면 삭제
const fnCleanQsysScheduleFolder = async () => {
  const schedules = await dbSchFind({})
  const devices = await dbQsysFind({})
  await Promise.all(
    devices.map(async (device) => {
      await fnQsysCheckScheduleFolder(device, schedules)
    })
  )
  logInfo(`Qsys 스케줄 폴더 정리 완료`, 'server', 'schedule')
}

// gStatus.scheduleFolder를 확인해서 폴더 이름이 스케줄의 idx에 없으면 삭제
const fnCleanScheduleFolder = async () => {
  const schedules = await dbSchFind({})
  const folders = fs.readdirSync(gStatus.scheduleFolder)
  await Promise.all(
    folders.map(async (folder) => {
      if (!schedules.find((e) => e.idx === folder)) {
        const folderPath = path.join(gStatus.scheduleFolder, folder)
        await fs.promises.rmdir(folderPath, { recursive: true })
      }
    })
  )
  logInfo(`스케줄 폴더 정리 완료`, 'server', 'schedule')
}

fnCleanScheduleFolder()

module.exports = {
  fnMakePageFromSchedule,
  fnSendScheduleToAPP,
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder,
  fnInTimeScheduleRun,
  fnSendActiveScheduleToAPP,
  fnSendAutoScheduleToAPP
}
