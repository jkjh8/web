// db
const { dbQsysUpdateBackup } = require('@db/qsys')
// api
const { fnSendQsysData } = require('@api/qsys')
const { fnSendDeviceMuticast } = require('@multicast')
const { fnQsysCheckMediaFolder, fnQsysDeleteLive } = require('@api/qsys/files')
const { fnGetBarixInfo } = require('@api/barix')
// logger
const { logInfo, logError, logWarn } = require('@logger')

module.exports = function (socket) {
  // IC02 볼륨
  socket.on('qsys:volume', async (obj) => {
    const { email } = socket.user
    try {
      const { deviceId, zone, value, name } = obj
      const filter = { deviceId, 'ZoneStatus.Zone': zone }
      const update = { 'ZoneStatus.$.gain': value }
      // DB 업데이트
      await dbQsysUpdateBackup(filter, update)
      // 소켓 전송
      // fnSendQsysData('qsys:volume', obj)
      fnSendDeviceMuticast('qsys:volume', obj)
      logInfo(`IC02 볼륨 ${name}-${deviceId} ${zone}: ${value}`, email)
    } catch (error) {
      logError(`IC02 볼륨 ${error}`, email)
    }
  })

  //IC03 뮤트
  socket.on('qsys:mute', async (obj) => {
    const { email } = socket.user
    try {
      const { deviceId, zone, value, name } = obj
      const filter = { deviceId, 'ZoneStatus.Zone': zone }
      const update = { 'ZoneStatus.$.mute': value }
      await dbQsysUpdateBackup(filter, update)
      // fnSendQsysData('qsys:mute', obj)
      fnSendDeviceMuticast('qsys:mute', obj)
      logInfo(`IC03 뮤트 장치: ${name}-${deviceId} ${zone}: ${value}`, email)
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
      // fnSendQsysData('zone:set:channel', obj)
      fnSendDeviceMuticast('zone:set:channel', obj)
    } catch (error) {
      logError(`IC05 채널 ${error}`, email)
    }
  })
  // IC06 장치
  socket.on('zone:set:device', async (device) => {
    const { email } = socket.user
    try {
      const { name, deviceId } = device
      // fnSendQsysData('zone:set:device', deviceId)
      fnSendDeviceMuticast('zone:set:device', deviceId)
      fnQsysCheckMediaFolder(device)
      fnQsysDeleteLive(deviceId)
      logWarn(`IC06 장치 재설정 ${name}-${deviceId}`, email)
    } catch (error) {
      logError(`IC06 장치 ${error}`, email)
    }
  })
  // IC07 방송상태 갱신
  socket.on('zone:get:active', (device) => {
    const { email } = socket.user
    try {
      // fnSendQsysData('zone:get:active', device.deviceId)
      fnSendDeviceMuticast('zone:get:active', device.deviceId)
      logInfo(`IC07 방송상태 갱신 ${device.name}-${device.deviceId}`, email)
    } catch (error) {
      logError(`IC07 방송상태 ${error}`, email)
    }
  })
}
