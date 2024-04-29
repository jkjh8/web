const { fnSSQD, fnSQD } = require('@api/qsys')
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
    const { deviceId, id, PageID } = obj
    await dbQsysUpdate(
      { deviceId, 'PageStatus.id': id },
      { $set: { 'PageStatus.$.PageID': PageID } }
    )
  })

  socket.on('qsys:page:status', async (obj) => {
    const { deviceId, params } = obj
    await dbQsysUpdate(
      {
        deviceId,
        'PageStatus.PageID': params.PageID
      },
      { $set: { 'PageStatus.$': { ...params } } }
    )
  })
}
