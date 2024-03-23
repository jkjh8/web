const { fnSBData } = require('@api/qsys')
const { dbQsysUpdate } = require('@db/qsys')

module.exports = function (socket) {
  socket.on('qsys:volume', async (obj) => {
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.gain': value }
    )
    fnSBData('qsys:volume', obj)
  })
  socket.on('qsys:mute', async (obj) => {
    console.log(obj)
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.mute': value }
    )
    fnSBData('qsys:mute', obj)
  })
}
