const { fnSBData } = require('@api/qsys')
const { dbQsysUpdate } = require('@db/qsys')
const { fnGetBarixInfo } = require('@api/barix')

const { logInfo, logDebug, logError } = require('@logger')
module.exports = function (socket) {
  socket.on('qsys:volume', async (obj) => {
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.gain': value }
    )
    fnSBData('qsys:volume', obj)
    logInfo(
      `Volumr device: ${deviceId} Zone: ${zone} Value: ${value}`,
      socket.user.email,
      'qsys'
    )
  })
  socket.on('qsys:mute', async (obj) => {
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.mute': value }
    )
    fnSBData('qsys:mute', obj)
    logInfo(
      `Mute device: ${deviceId} Zone: ${zone} Value: ${value}`,
      socket.user.email,
      'qsys'
    )
  })

  socket.on('barix:get', async (ipaddress) => {
    fnGetBarixInfo(ipaddress)
  })

  socket.on('zone:set:channel', (obj) => fnSBData('zone:set:channel', obj))
}
