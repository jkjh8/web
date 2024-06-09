const { fnSendAllStatusAll, fnSendQsysData } = require('@api/qsys')
const { dbQsysUpdate } = require('@db/qsys')
const { fnGetBarixInfo } = require('@api/barix')

const { logInfo, logError } = require('@logger')
module.exports = function (socket) {
  socket.on('qsys:volume', async (obj) => {
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.gain': value }
    )
    fnSendQsysData('qsys:volume', obj)
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
    fnSendQsysData('qsys:mute', obj)
    logInfo(
      `Mute device: ${deviceId} Zone: ${zone} Value: ${value}`,
      socket.user.email,
      'qsys'
    )
  })

  socket.on('barix:get', async (ipaddress) => {
    fnGetBarixInfo(ipaddress)
  })

  socket.on('zone:set:channel', (obj) =>
    fnSendQsysData('zone:set:channel', obj)
  )
  socket.on('zone:set:device', (deviceId) => {
    // fnSendAllStatusAll()
    fnSendQsysData('zone:set:device', deviceId)
  })
}
