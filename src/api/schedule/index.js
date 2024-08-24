const fs = require('fs')
const path = require('path')
const moment = require('moment')
// logger
const { logInfo, logEvent, logWarn, logError } = require('@logger')
// db
const { dbSchFind, dbSchFindToday } = require('@db/schedule')
const { dbQsysFind, dbQsysFindOne } = require('@db/qsys')
const { dbPageUpdate } = require('@db/page')
// api
const { fnWaitRelayOnTime } = require('@api/broadcast')
const uniqueId = require('@api/utils/uniqueId')
const { fnSendQsys } = require('@api/qsys')
const { fnQsysCheckScheduleFolder } = require('@api/qsys/files')
const {
  fnSetLive,
  fnSetZoneActive,
  fnCheckActive
} = require('@api/qsys/broadcast')
const { fnBarixesRelayOn } = require('@api/barix')
const { fnAmxesRelayOn } = require('@api/amx')
const { fnQsysDeleteFolder } = require('../qsys/files')
const io = require('@io')

// S01 스케줄 방송 시작 로직
const fnInTimeScheduleRun = async (data) => {
  const { user, name, zones, file } = data
  try {
    // Page를 위한 uniqueId 생성
    const idx = uniqueId(16)
    // page 생성
    const page = await fnMakePageFromSchedule(data)
    // page 생성 실패
    if (page.length === 0) {
      return logError(`S01 스케줄방송 시작 - page 생성 실패`, user, zones)
    }
    // qsys page commands 생성
    const commands = await fnSetLive(
      idx,
      { ...data, devices: page, schedule: true },
      user
    )

    // 방송 중복 확인
    const active = await fnCheckActive(data.devices, user)
    if (active.length > 0) {
      await dbPageUpdate({ idx }, { dub: active })
      for (const item of active) {
        logEvent(`스케줄방송 중복확인: ${item.name ?? ''}}`, user, item.Zones)
      }
    }

    //////////////// 릴레이 구동 ////////////////
    // amx 릴레이 구동
    await fnAmxesRelayOn(page)
    // Barix 릴레이 구동
    await fnBarixesRelayOn(page)

    // db에서 방송 중으로 변경
    page.forEach(async (item) => {
      fnSetZoneActive(item.deviceId, item.params.Zones)
    })
    // 로그
    logEvent(
      `스케줄방송 릴레이 구동완료: ${name ?? ''} - ${idx ?? ''}`,
      user,
      zones
    )

    //////////////// 대기 ////////////////
    await fnWaitRelayOnTime()

    //////////////// 방송 시작 ////////////////
    fnSendQsys('qsys:page:message', commands)
    // 로그
    return
  } catch (error) {
    logError(`S01 스케줄방송 시작 - ${error}`, user, zones)
  }
}

// S02 스케줄에서 페이징을 만들어서 qsys로 보내는 함수
const fnMakePageFromSchedule = async (args) => {
  const { idx, devices, file, Preamble } = args
  const arr = []
  // 스케줄 반복이 한번이면 메시지 송출 후 삭제 추가 필요
  const promises = devices.map(async (item) => {
    const { ipaddress, deviceId, Zones } = item
    let device = await dbQsysFindOne({ deviceId })
    if (!device) {
      logWarn(`S02 스케줄러에서 Q-SYS 찾기 실패 ${deviceId}`, 'SERVER')
      device = await dbQsysFindOne({ ipaddress })
      if (!device) {
        logWarn(`S02 스케줄러에서 Q-SYS 찾기 실패 ${ipaddress}`, 'SERVER')
        return
      }
    }
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
        MessageDelete: false,
        Start: true
      },
      barix: device.ZoneStatus.map((e) => e.destination),
      amx: device.amx,
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
    logError(`S03 오늘 스케줄 전송 - ${JSON.stringify(error)}`, 'SERVER')
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
  logInfo(`S06 QSYS 스케줄 폴더 정리완료`, 'SERVER')
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
    logInfo(`S07 스케줄 폴더 정리`, 'SERVER')
  } catch (error) {
    logError(`S07 스케줄 폴더 정리 - ${JSON.stringify(error)}`, 'SERVER')
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
              logInfo(`S08 QSYS 지난 스케줄 삭제 ${deviceId} ${idx}`, 'SERVER')
            } catch (error) {
              console.log(error)
            }
          })
        )
      }
    })
  )
}

// S09 스케줄러가 오늘 스케줄을 찾아서 APP로 전송
const fnSendScheduleToday = async () => {
  try {
    const schedules = await dbSchFindToday()
    io.scheduler.emit('schedules', JSON.stringify(schedules))
  } catch (error) {
    logError(`S09 오늘 스케줄 전송 - ${JSON.stringify(error)}`, 'SERVER')
  }
}

// S10 스케줄러로 전송
const fnSendScheduler = (key, value) => {
  io.scheduler.emit(key, value)
}

module.exports = {
  fnMakePageFromSchedule,
  fnSendScheduleToAPP,
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder,
  fnInTimeScheduleRun,
  fnSendActiveScheduleToAPP,
  fnSendAutoScheduleToAPP,
  fnCleanQsysScheduleTypeOnce,
  fnSendScheduleToday,
  fnSendScheduler
}
