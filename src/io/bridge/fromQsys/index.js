const { fnSSQD } = require('@api/qsys')
const { dbQsysUpdate } = require('@db/qsys')

module.exports = function (socket) {
  socket.on('qsys:connect', async (device) => {
    const { deviceId } = device
    await dbQsysUpdate({ deviceId }, { connected: true })
  })
}
