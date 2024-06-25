const { fnSendAllStatusAll, fnSendQsysData } = require('@api/qsys')
const { dbQsysUpdate } = require('@db/qsys')
const { fnGetBarixInfo } = require('@api/barix')

const { logInfo, logError } = require('@logger')

module.exports = function (socket) {
  // IC02 볼륨
  socket.on('qsys:volume', async (obj) => {
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.gain': value }
    )
    fnSendQsysData('qsys:volume', obj)
    logInfo(`IC02 볼륨 장치: ${deviceId} ${zone}: ${value}`, socket.user.email)
  })
  //IC03 뮤트
  socket.on('qsys:mute', async (obj) => {
    const { deviceId, zone, value } = obj
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.mute': value }
    )
    fnSendQsysData('qsys:mute', obj)
    logInfo(`IC03 뮤트 장치: ${deviceId} ${zone}: ${value}`, socket.user.email)
  })
  // IC04 소스
  socket.on('barix:get', async (ipaddress) => {
    fnGetBarixInfo(ipaddress)
  })
  // IC05 채널
  socket.on('zone:set:channel', (obj) =>
    fnSendQsysData('zone:set:channel', obj)
  )
  // IC06 장치
  socket.on('zone:set:device', (deviceId) => {
    // fnSendAllStatusAll()
    fnSendQsysData('zone:set:device', deviceId)
  })
}
