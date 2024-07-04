const fs = require('fs')
const path = require('path')
const moment = require('moment')
// io
const io = require('@io')
// logger
const { logInfo, logEvent, logError } = require('@logger')
// db
const { dbSchFind, dbSchFindToday } = require('@db/schedule')
const { dbQsysFind, dbQsysFindOne } = require('@db/qsys')
// api
const uniqueId = require('@api/utils/uniqueId')
const { fnSendQsysData } = require('@api/qsys')
const { fnQsysCheckScheduleFolder } = require('@api/qsys/files')
const { fnSetLive } = require('@api/qsys/broadcast')
const { fnBarixesRelayOn } = require('@api/barix')
const { fnAmxesRelayOn } = require('@api/amx')
const { fnQsysDeleteFolder } = require('../qsys/files')

// S01 스케줄 방송 시작 로직
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
    logEvent(`스케줄 방송 릴레이 구동 완료:${name} ID:${idx}`, user, zones)

    //////////////// 1초 대기 ////////////////
    await new Promise((resolve) => setTimeout(resolve, 1000))

    //////////////// 방송 시작 ////////////////
    const commands = await fnSetLive(idx, { ...data, devices: page }, user)
    fnSendQsysData('qsys:page:message', commands)
    // 로그
    return
  } catch (error) {
    throw error
  }
}

// S02 스케줄에서 페이징을 만들어서 qsys로 보내는 함수
const fnMakePageFromSchedule = async (args) => {
  const { idx, devices, file, Preamble } = args
  const arr = []
  // 스케줄 반복이 한번이면 메시지 송출 후 삭제 추가 필요
  const promises = devices.map(async (item) => {
    const { ipaddress, deviceId, Zones } = item
    const device = await dbQsysFindOne({ deviceId })
    arr.push({
      deviceId,
      name: device.name,
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
      file,
      zones:
        Zones.length === device.ZoneStatus.length
          ? `${device.name}- ALL`
          : `${device.name}-${Zones.join(',')}`,
      ipaddress
    })
  })
  await Promise.all(promises)
  return arr
}

// S03 오늘 스케줄을 찾아서 APP로 전송
const fnSendScheduleToAPP = async () => {
  try {
    const schedules = await dbSchFindToday()
    return io.scheduler.emit('today', schedules)
  } catch (error) {
    logError(`S03 오늘 스케줄 전송 오류 ${error}`, 'server')
  }
}

// S04 스케줄러 동작 변경
const fnSendActiveScheduleToAPP = (active) => {
  return io.scheduler.emit('active', active)
}

// S05 스케줄러 자동 전환 변경
const fnSendAutoScheduleToAPP = (auto) => {
  return io.scheduler.emit('auto', auto)
}

// S06 Qsys 스케줄 폴더를 확인해서 폴더 이름이 스케줄의 idx에 없으면 삭제
const fnCleanQsysScheduleFolder = async () => {
  const schedules = await dbSchFind({})
  const devices = await dbQsysFind({})
  await Promise.all(
    devices.map(async (device) => {
      await fnQsysCheckScheduleFolder(device, schedules)
    })
  )
  logInfo(`S06 QSYS 스케줄 폴더 정리 완료`, 'server')
}

// S07 gStatus.scheduleFolder를 확인해서 폴더 이름이 스케줄의 idx에 없으면 삭제
const fnCleanScheduleFolder = async () => {
  try {
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
    logInfo(`S07 스케줄 폴더 정리`, 'server')
  } catch (error) {
    logError(`S07 스케줄 폴더 정리 ${error}`, 'server')
  }
}

// S08 스케줄 한번 동작중 시간이 지난 스케줄 찾아서 QSYS에서 삭제
const fnCleanQsysScheduleTypeOnce = async () => {
  const schedules = await dbSchFind({ repeat: 'once' })
  // 오늘 보다 하루전으로 날짜 설정
  const yesterday = moment().subtract(1, 'days')
  await Promise.all(
    schedules.map(async (schedule) => {
      const scheduleDate = moment(schedule.date)
      if (scheduleDate < yesterday) {
        const { devices, idx } = schedule
        await Promise.all(
          devices.map(async (device) => {
            const { deviceId, ipaddress } = device
            try {
              await fnQsysDeleteFolder(deviceId, ipaddress, `schedule/${idx}`)
              logInfo(`S08 QSYS 지난 스케줄 삭제 ${deviceId} ${idx}`, 'server')
            } catch (error) {
              logError(
                `S08 QSYS 지난 스케줄 파일삭제 ${deviceId} ${idx}`,
                'server'
              )
            }
          })
        )
      }
    })
  )
}

module.exports = {
  fnMakePageFromSchedule,
  fnSendScheduleToAPP,
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder,
  fnInTimeScheduleRun,
  fnSendActiveScheduleToAPP,
  fnSendAutoScheduleToAPP,
  fnCleanQsysScheduleTypeOnce
}
