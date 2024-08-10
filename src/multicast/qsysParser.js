const { dbQsysFindAll } = require('@db/qsys')
const {
  fnSendClientQsysData,
  fnSendClientZoneStatus,
  fnSendSocketStatusAll,
  fnSendClientPageMessage
} = require('@api/qsys')
const { fnQsysCheckMediaFolder } = require('@api/qsys/files')
const { logInfo, logError } = require('@logger')
const io = require('@io')
// LQ01
const qsysParser = async (key, value) => {
  try {
    switch (key) {
      case 'connect':
        io.client.emit('qsys:device', {
          deviceId: value.deviceId,
          data: { connected: true }
        })
        // fnSendClientQsysData(value.deviceId, { connected: true })
        fnQsysCheckMediaFolder({
          deviceId: value.deviceId,
          name: value.name,
          ipaddress: value.ipaddress
        })
        logInfo(
          `QSYS 연결 ${value.name} - ${value.ipaddress}: ${value.deviceId}`,
          'SERVER'
        )
        break
      case 'disconnect':
        // fnSendClientQsysData(value.deviceId, { connected: false })
        io.client.emit('qsys:device', {
          deviceId: value.deviceId,
          data: { connected: false }
        })
        logInfo(
          `QSYS 연결 해제 ${value.name} - ${value.ipaddress}: ${value.deviceId}`,
          'SERVER'
        )
        break
      case 'ZoneStatus':
        // fnSendClientZoneStatus(value.deviceId, value.ZoneStatus)
        io.client.emit('qsys:ZoneStatus', {
          deviceId: value.deviceId,
          ZoneStatus: value.ZoneStatus
        })
        break
      case 'device':
        io.client.emit('qsys:device', {
          deviceId: value.deviceId,
          data: value.data
        })
        // fnSendClientQsysData(value.deviceId, { ...value.data })
        break
      case 'deviceAll':
        const devices = await dbQsysFindAll()
        io.client.emit('qsys:devices', devices)
        break
      case 'page:message':
        io.client.emit('qsys:page:message', {
          deviceId: value.deviceId,
          message: value.message
        })
        break
      default:
        logInfo(`알 수 없는 키: ${key}`, 'SERVER')
        break
    }
  } catch (error) {
    logError(`LQ01 QSYS Parser Error ${error}`, 'MULTICAST')
  }
}

module.exports = qsysParser
