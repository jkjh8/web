const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { dbUserUpdate } = require('@db/user')
const { dbQsysUpdate } = require('@db/qsys')
const uniqueId = require('@api/utils/uniqueId')

const fnSetLive = async (obj, email) => {
  try {
    const { mode, priority, selected, maxPageTime } = obj
    const id = uniqueId(8)
    const zones = selected.zones
    await dbUserUpdate({ email }, { $push: { pageId: { id } } })
    if (mode === 'live') {
      let arr = []
      for (let item of zones) {
        dbQsysUpdate(
          { deviceId: item.deviceId },
          { $push: { PageStatus: { id } } }
        )
        arr.push({
          deviceId: item.deviceId,
          id: id,
          params: {
            Zones: item.value.map((e) => e.Zone),
            Mode: 'live',
            MaxPageTime: maxPageTime,
            Station: 1,
            Priority: priority
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
