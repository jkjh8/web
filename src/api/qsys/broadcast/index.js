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
    let arr = []
    let promises
    switch (Mode) {
      case 'live':
        promises = devices.map(async (item) => {
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
              Priority,
              Start: true
            }
          })
        })
        await Promise.all(promises)
        return arr
      case 'message':
        promises = devices.map(async (item) => {
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
              Message: `live/${file.base}`,
              Priority,
              MessageDelete: true,
              Start: true
            }
          })
        })
        await Promise.all(promises)
        return arr
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fnSetLive
}
