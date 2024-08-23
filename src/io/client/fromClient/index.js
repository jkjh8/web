// db
const { dbQsysUpdateBackup } = require('@db/qsys')
// api
const { fnSendQsys } = require('@api/qsys')
const { fnQsysCheckMediaFolder, fnQsysDeleteLive } = require('@api/qsys/files')
const { fnGetBarixInfo } = require('@api/barix')
// logger
const { logInfo, logError, logWarn } = require('@logger')
const { set } = require('mongoose')

module.exports = function (socket) {
  // IC02 볼륨
  socket.on('qsys:volume', async (obj) => {
    const { email } = socket.user
    try {
      const { deviceId, zone, value, name } = obj
      let current = Number(value)
      if (current < -50) current = -50
      if (current > 10) current = 10

      const filter = { deviceId, 'ZoneStatus.Zone': zone }
      const update = { 'ZoneStatus.$.gain': current }
      // DB 업데이트
      await dbQsysUpdateBackup(filter, update)
      // 소켓 전송
      fnSendQsys('qsys:volume', { ...obj, value: current })
      logInfo(
        `IC02 볼륨 변경 - ${name} - ${zone}=${value} - ${deviceId}`,
        email
      )
    } catch (error) {
      logError(`IC02 볼륨 변경 - ${error}`, email)
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
      fnSendQsys('qsys:mute', obj)
      logInfo(
        `IC03 볼륨 뮤트 변경 - ${name} - ${zone}=${value} - ${deviceId}`,
        email
      )
    } catch (error) {
      logError(`IC03 볼륨 뮤트 변경 -  ${error}`, email)
    }
  })
  // IC04 소스
  socket.on('barix:get', async (ipaddress) => {
    const { email } = socket.user
    try {
      fnGetBarixInfo(ipaddress)
    } catch (error) {
      logError(`IC04 BARIX 정보수집 -  ${error}`, email)
    }
  })
  // IC05 채널
  socket.on('zone:set:channel', (obj) => {
    const { email } = socket.user
    try {
      fnSendQsys('zone:set:channel', obj)
    } catch (error) {
      logError(`IC05 채널 재설정 - ${error}`, email)
    }
  })
  // IC06 장치
  socket.on('zone:set:device', async (device) => {
    const { email } = socket.user
    try {
      const { name, deviceId } = device
      fnSendQsys('qsys:device', device)
      console.log(device)
      setTimeout(() => {
        fnSendQsys('zone:set:device', deviceId)
        fnQsysCheckMediaFolder(device)
        fnQsysDeleteLive(deviceId)
        logWarn(`IC06 장치 재설정 - ${name} - ${deviceId}`, email)
      }, 1000)
    } catch (error) {
      logError(`IC06 장치 재성정 - ${error}`, email)
    }
  })
  // IC07 방송상태 갱신
  socket.on('zone:get:active', (device) => {
    const { email } = socket.user
    try {
      fnSendQsys('zone:get:active', device.deviceId)
      logInfo(`IC07 방송상태 갱신 - ${device.name} - ${device.deviceId}`, email)
    } catch (error) {
      logError(`IC07 방송상태 갱신 - ${error}`, email)
    }
  })
}
