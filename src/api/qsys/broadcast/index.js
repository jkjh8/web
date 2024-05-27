const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { dbPageMake } = require('@db/page')
const { dbQsysFind, dbQsysUpdate } = require('@db/qsys')

const fnSetLive = async (idx, obj, email) => {
  try {
    const { Mode, Priority, Preamble, MaxPageTime, Station, file, devices } =
      obj
    await dbPageMake({
      user: email,
      idx,
      Mode,
      Priority,
      Preamble,
      MaxPageTime,
      Station,
      file,
      devices
    })
    let arr = []
    let promises = devices.map(async (item) => {
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
    logError(`방송 송출 오류 ${error}`, req.user.email, 'broadcast')
  }
}

const fnCheckActive = async (arr) => {
  try {
    const qsys = await dbQsysFind()
    for (let item of arr) {
      const idx = qsys.findIndex((e) => e.deviceId === item.deviceId)
      const { ZoneStatus } = qsys[idx]
      for (let zone of item.Zones) {
        if (ZoneStatus[zone - 1].Active) {
          return true
        }
      }
    }
    return false
  } catch (error) {
    logError(`방송구간 중복 확인 오류 ${error}`, req.user.email, 'broadcast')
  }
}

module.exports = {
  fnSetLive,
  fnCheckActive
}
