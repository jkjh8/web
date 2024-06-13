const { scheduler } = require('@io')

const fnMakePageFromSchedule = async (args) => {
  const { idx, name, devices, file, Preamble } = args
  const arr = []
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

module.exports = { fnMakePageFromSchedule, fnSendScheduleToAPP }
