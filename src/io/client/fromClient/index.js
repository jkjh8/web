// db
const { dbQsysUpdate, dbQsysUpdateBackup } = require('@db/qsys')
// api
const { fnSendQsysData } = require('@api/qsys')
const { fnGetBarixInfo } = require('@api/barix')
// logger
const { logInfo, logError } = require('@logger')

module.exports = function (socket) {
  // IC02 볼륨
  socket.on('qsys:volume', async (obj) => {
    const { email } = socket.user
    try {
      const { deviceId, zone, value } = obj
      const filter = { deviceId, 'ZoneStatus.Zone': zone }
      const update = { 'ZoneStatus.$.gain': value }
      // DB 업데이트
      await dbQsysUpdateBackup(filter, update)
      // 소켓 전송
      fnSendQsysData('qsys:volume', obj)
      logInfo(`IC02 볼륨 ${deviceId} ${zone}: ${value}`, email)
    } catch (error) {
      logError(`IC02 볼륨 ${error}`, email)
    }
  })

  //IC03 뮤트
  socket.on('qsys:mute', async (obj) => {
    const { email } = socket.user
    try {
      const { deviceId, zone, value } = obj
      const filter = { deviceId, 'ZoneStatus.Zone': zone }
      const update = { 'ZoneStatus.$.mute': value }
      await dbQsysUpdateBackup(filter, update)
      fnSendQsysData('qsys:mute', obj)
      logInfo(`IC03 뮤트 장치: ${deviceId} ${zone}: ${value}`, email)
    } catch (error) {
      logError(`IC03 뮤트 ${error}`, email)
    }
  })
  // IC04 소스
  socket.on('barix:get', async (ipaddress) => {
    const { email } = socket.user
    try {
      fnGetBarixInfo(ipaddress)
    } catch (error) {
      logError(`IC04 소스 ${error}`, email)
    }
  })
  // IC05 채널
  socket.on('zone:set:channel', (obj) => {
    const { email } = socket.user
    try {
      fnSendQsysData('zone:set:channel', obj)
    } catch (error) {
      logError(`IC05 채널 ${error}`, email)
    }
  })
  // IC06 장치
  socket.on('zone:set:device', (deviceId) => {
    const { email } = socket.user
    try {
      fnSendQsysData('zone:set:device', deviceId)
    } catch (error) {
      logError(`IC06 장치 ${error}`, email)
    }
  })
}
