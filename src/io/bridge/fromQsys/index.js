const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { fnSSQD, fnSQD, fnSPM } = require('@api/qsys')
const { dbPageUpdate } = require('@db/page')
const { dbQsysUpdate } = require('@db/qsys')
const { dbBarixFindOne } = require('@db/barix')

module.exports = function (socket) {
  socket.on('qsys:connect', async (device) => {
    const { deviceId } = device
    await dbQsysUpdate({ deviceId }, { connected: true })
    fnSQD(deviceId, { connected: true })
  })

  socket.on('qsys:disconnect', async (device) => {
    const { deviceId } = device
    await dbQsysUpdate({ deviceId }, { connected: false })
    fnSQD(deviceId, { connected: false })
  })

  socket.on('qsys:device', async (obj) => {
    const { deviceId, data } = obj
    await dbQsysUpdate({ deviceId }, { ...data })
    fnSQD(deviceId, { ...data })
  })

  socket.on('qsys:rttr', async (obj) => {
    const { deviceId, zone, value } = obj
    let id = ''

    if (value) {
      const r = await dbBarixFindOne({ ipaddress: value })
      id = r._id
    }
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.destination': id ? id : null }
    )
  })

  // page
  socket.on('qsys:page:id', async (obj) => {
    try {
      const { deviceId, idx, PageID } = obj
      await dbQsysUpdate(
        { deviceId, 'PageStatus.idx': idx },
        { $set: { 'PageStatus.$.PageID': PageID, 'PageStatus.$.idx': idx } }
      )
      await dbPageUpdate(
        { idx, 'devices.deviceId': deviceId },
        { $set: { 'devices.$.PageID': PageID } }
      )
    } catch (error) {
      logError(`QSYS 방송 idx 갱신 오류 ${error}`, 'qsys', 'page')
    }
  })

  socket.on('qsys:page:status', async (obj) => {
    try {
      const { deviceId, params } = obj
      if (params.State === 'done') {
        fnSPM({ deviceId, message: '방송 종료' })
        return await dbQsysUpdate(
          { deviceId },
          { $pull: { PageStatus: { PageID: params.PageID } } }
        )
      }
      await dbQsysUpdate(
        {
          deviceId,
          'PageStatus.PageID': params.PageID
        },
        { $set: { 'PageStatus.$': { ...params } } }
      )
    } catch (error) {
      logError(`QSYS PAGE 상태 갱신오류 ${error}`, 'qsys', 'page')
    }
  })
}
