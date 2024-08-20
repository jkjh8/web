const { logInfo, logWarn, logError } = require('@logger')
const fromClient = require('./fromClient')
const { dbUserUpdate } = require('@db/user')

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
    try {
      await dbUserUpdate({ email }, { socketId: socket.id })
      // 전체 상태 전송
      // require('@api/setup')()
      // socket.emit('setup:status', gStatus)
    } catch (error) {
      logError(`IC01 SOCKET.IO CLIENT 사용자갱신 - ${error}`, 'SERVER')
    }
    // const user = socket.request.user
    console.log(`IC01 SOCKET.IO CLIENT 연결 ${email}`)
    // 연결 해제
    socket.on('disconnect', (reason) => {
      console.log(`IC01 SOCKET.IO CLIENT 연결해제 ${email}`)
    })
    // 클라이언트 함수
    fromClient(socket)

    socketio.on('connection_error', (error) => {
      logError(`IC01 SOCKET.IO CLIENT 연결 - ${error}`, 'SERVER')
    })

    // 전체 상태 전송
    socket.emit('setup:status', gStatus)
  })

  logInfo(`IC01 SOCKET.IO CLIENT 시작`, 'SERVER')
}
