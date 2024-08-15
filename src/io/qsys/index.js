const { logInfo, logWarn, logError } = require('@logger')
const { fnSendSocket } = require('@api/client')
const { fnQsysCheckMediaFolder } = require('@api/qsys/files')
module.exports = async (socketio) => {
  // IQ01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    logInfo(`IQ01 Socket Qsys 연결 ID:${process.env.INSTANCE_ID}`, 'SERVER')
    // IQ02 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(
        `IQ2 Socket Qsys 연결해제 ID:${process.env.INSTANCE_ID}`,
        'SERVER'
      )
    })

    // IQ03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(`IQ03 Socket Qsys 연결 ID:${process.env.INSTANCE_ID} - ${error}`)
    })

    // evnets
    // IQ04 QSYS 연결
    socket.on('qsys:connect', (device) => {
      const { deviceId, name, ipaddress } = device
      fnSendSocket('qsys:device', { deviceId, data: { connected: true } })
      fnQsysCheckMediaFolder({ deviceId, name, ipaddress })
      logInfo(`IQ04 QSYS 연결 ${name} - ${ipaddress}: ${deviceId}`, 'SERVER')
    })
    // IQ05 QSYS 연결 해제
    socket.on('qsys:disconnect', (device) => {
      const { deviceId, name, ipaddress } = device
      fnSendSocket('qsys:device', { deviceId, data: { connected: false } })
      logWarn(
        `IQ05 QSYS 연결 해제 ${name} - ${ipaddress}: ${deviceId}`,
        'SERVER'
      )
    })
    // IQ06 QSYS ZoneStatus
    socket.on('ZoneStatus', (obj) => {
      const { deviceId, ZoneStatus } = obj
      fnSendSocket('qsys:ZoneStatus', { deviceId, ZoneStatus })
    })
    // IQ07 QSYS device
    socket.on('device', (obj) => {
      const { deviceId, data } = obj
      fnSendSocket('qsys:device', { deviceId, data })
    })
    // IQ08 QSYS deviceAll
    socket.on('deviceAll', () => {
      fnSendSocket('qsys:devices', {})
    })
    // IQ09 QSYS page:message
    socket.on('page:message', (obj) => {
      const { deviceId, message } = obj
      fnSendSocket('qsys:page:message', { deviceId, message })
    })

    logInfo(`IQ01 Socket Qsys 시작`, 'server')
  })
}
