const { logInfo, logWarn, logError } = require('@logger')
const { dbUserUpdate } = require('@db/user')
const { dbQsysUpdateBackup } = require('@db/qsys')
// api
const { fnSendQsys } = require('@api/qsys')
const { fnQsysCheckMediaFolder, fnQsysDeleteLive } = require('@api/qsys/files')
const { fnSendGlobalStatus } = require('@api/client')

const jwt = require('jsonwebtoken')

module.exports = async (socketio) => {
  socketio.use((socket, next) => {
    try {
      const token = socket.handshake.auth.token
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        socket.user = decoded.user
      }
      next()
    } catch (error) {
      next(new Error('invaild token'))
    }
  })
  // IC01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    const { email } = socket.user
    // 사용자 소켓 아이디 갱신
    const ipAddress = socket.handshake.headers['x-forwarded-for'].split(',')[0]
    try {
      await dbUserUpdate({ email }, { socketId: socket.id })
    } catch (error) {
      logError(`IC01 SOCKET.IO CLIENT 사용자갱신 - ${error}`, 'SERVER')
    }
    // const user = socket.request.user
    logInfo(`IC01 SOCKET.IO CLIENT 연결 ${email} ${socket.id} ${ipAddress}`)
    // 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(`IC01 SOCKET.IO CLIENT 연결해제 ${email} ${ipAddress}`)
    })
    // 전체 상태 전송
    fnSendGlobalStatus()
    // 클라이언트 함수
    // IC02 볼륨
    socket.on('qsys:volume', async (obj) => {
      const { email } = socket.user
      try {
        const { deviceId, zone, value, name } = obj
        let current = Number(value)
        if (current < -50) current = -50
        if (current > 10) current = 10
        // DB 업데이트
        await dbQsysUpdateBackup(
          { deviceId, 'ZoneStatus.Zone': zone },
          { 'ZoneStatus.$.gain': current }
        )
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
        await dbQsysUpdateBackup(
          { deviceId, 'ZoneStatus.Zone': zone },
          { 'ZoneStatus.$.mute': value }
        )
        fnSendQsys('qsys:mute', obj)
        logInfo(
          `IC03 볼륨 뮤트 변경 - ${name} - ${zone}=${value} - ${deviceId}`,
          email
        )
      } catch (error) {
        logError(`IC03 볼륨 뮤트 변경 -  ${error}`, email)
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
        logInfo(
          `IC07 방송상태 갱신 - ${device.name} - ${device.deviceId}`,
          email
        )
      } catch (error) {
        logError(`IC07 방송상태 갱신 - ${error}`, email)
      }
    })

    socket.on('connection_error', (error) => {
      logError(`IC01 SOCKET.IO CLIENT 연결 - ${error}`, 'SERVER')
    })
  })

  logInfo(`IC01 SOCKET.IO CLIENT 시작`, 'SERVER')
}
