const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { dbPageMake } = require('@db/page')
const { dbQsysUpdate } = require('@db/qsys')

const fnSetLive = async (idx, obj, email) => {
  try {
    const { Mode, Priority, MaxPageTime, Station, file, devices } = obj
    await dbPageMake({
      user: email,
      idx,
      Mode,
      Priority,
      MaxPageTime,
      Station,
      file,
      devices
    })
    if (Mode === 'live') {
      let arr = []
      for (let item of devices) {
        await dbQsysUpdate(
          { deviceId: item.deviceId },
          { $push: { PageStatus: { idx } } }
        )
        arr.push({
          deviceId: item.deviceId,
          idx,
          params: {
            Zones: item.Zones,
            Mode,
            MaxPageTime,
            Station,
            Priority
          }
        })
      }
      return arr
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fnSetLive
}
