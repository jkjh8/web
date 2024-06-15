const fs = require('fs')
const path = require('path')
const io = require('@io')
const { logInfo } = require('@logger')
const { dbSchFind, dbSchFindToday } = require('@db/schedule')
const { dbQsysFind, dbQsysFindOne, dbQsysUpdate } = require('@db/qsys')
const uniqueId = require('@api/utils/uniqueId')
const { fnQsysCheckScheduleFolder } = require('@api/qsys/files')
const { fnSetLive } = require('@api/qsys/broadcast')
const { fnBarixRelayOn } = require('../barix')

// 스케줄 방송 시작 로직
const fnInTimeScheduleRun = async (data) => {
  try {
    const page = await fnMakePageFromSchedule(data)
    // Barix 릴레이 구동
    for (let zone of page) {
      await fnBarixRelayOn(zone.barix)
    }
    // Page를 위한 uniqueId 생성
    const idx = uniqueId(16)
    // Page 생성 및 송출
    const commands = await fnSetLive(idx, { ...data, devices: page }, data.user)
    io.bridge.emit('qsys:page:message', commands)
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
