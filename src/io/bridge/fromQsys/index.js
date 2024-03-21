const { fnSSQD, fnSQD } = require('@api/qsys')
const { dbQsysUpdate } = require('@db/qsys')

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

  socket.on('qsys:EngineStatus', async (args) => {
    const { deviceId, EngineStatus } = args
    await dbQsysUpdate({ deviceId }, { EngineStatus })
    fnSQD(deviceId, { EngineStatus })
  })

  socket.on('qsys:ZoneStatus', async (args) => {
    const { deviceId, ZoneStatus } = args
    await dbQsysUpdate({ deviceId }, { ZoneStatus })
    fnSQD(deviceId, { ZoneStatus })
  })

  socket.on('qsys:GainMute', async (args) => {
    const { deviceId, ZoneStatus } = args
    await dbQsysUpdate({ deviceId }, { ZoneStatus })
    fnSQD(deviceId, { ZoneStatus })
  })
}
