const fs = require('fs')
const path = require('path')
const { scheduler } = require('@io')
const { logInfo } = require('@logger')
const { dbSchFind, dbSchFindToday } = require('@db/schedule')
const { dbQsysFind, dbQsysFindOne } = require('@db/qsys')

const { fnQsysCheckScheduleFolder } = require('@api/qsys/files')

// 스케줄에서 페이징을 만들어서 qsys로 보내는 함수
const fnMakePageFromSchedule = async (args) => {
  const { idx, name, devices, file, Preamble } = args
  const arr = []
  // 스케줄 반복이 한번이면 메시지 송출 후 삭제 추가 필요
  const promises = devices.map(async (item) => {
    const { ipaddress, deviceId, Zones } = item
    const device = await dbQsysFindOne({ deviceId })
    arr.push({
      idx,
      deviceId: deviceId,
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
  return scheduler.emit('today', schedules)
}

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
  fnCleanScheduleFolder
}
