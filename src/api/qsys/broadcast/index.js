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

    promises = devices.map(async (item) => {
      await dbQsysUpdate(
        { deviceId: item.deviceId },
        { $push: { PageStatus: { idx } } }
      )
      arr.push({
        deviceId: item.deviceId,
        idx,
        params: item.params
      })
    })
    await Promise.all(promises)
    return arr
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fnSetLive
}
