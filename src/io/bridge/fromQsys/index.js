const { logInfo, logError, logEvent } = require('@logger')
const { fnSCDs, fnSQD, fnSPM } = require('@api/qsys')
const { fnCheckMediaFolder } = require('@api/qsys/files')
const { fnBarixRelayOff } = require('@api/barix')
const { dbPageUpdate, dbPageFindOne } = require('@db/page')
const { dbQsysUpdate } = require('@db/qsys')
const { dbBarixFindOne } = require('@db/barix')

module.exports = function (socket) {
  socket.on('qsys:connect', async (device) => {
    const { deviceId } = device
    const r = await dbQsysUpdate({ deviceId }, { connected: true })
    fnSQD(deviceId, { connected: true })
    fnCheckMediaFolder(r)
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
    let id = null

    if (value) {
      const r = await dbBarixFindOne({ ipaddress: value })
      console.log(r)
      if (r) {
        id = r._id
      }
    }
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.destination': id }
    )
    await fnSCDs()
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
      // 종료시
      if (params.State === 'done') {
        // 종료 메시지
        fnSPM({ deviceId, message: '방송 종료' })
        // barix relay off
        const r = await dbPageFindOne({
          devices: { $elemMatch: { deviceId: deviceId, PageID: params.PageID } }
        })
        const index = r.devices.findIndex((e) => e.PageID === params.PageID)
        await fnBarixRelayOff(r.devices[index].barix)
        // delete PageID
        return await dbQsysUpdate(
          { deviceId },
          { $pull: { PageStatus: { PageID: params.PageID } } }
        )
      }
      // Status update
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
