const { logInfo, logWarn, logError } = require('@logger')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')
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
    } catch (error) {
      logError(`IC01 Socket Client 사용자 갱신`, 'server')
    }
    // const user = socket.request.user
    logInfo(`IC01 Socket client 연결`, email)
    // 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(`IC01 Socket client 연결해제`, email)
    })
    // 클라이언트 함수
    fromClient(socket)
    // 초기값 전송
    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`IC01 client 초기값 전송 오류 ${error}`, 'server')
    }

    socketio.on('connection_error', (error) => {
      logError(`IC01 Socket Client 연결 - ${error}`)
    })

    // 전체 상태 전송
    socket.emit('setup:status', gStatus)
  })

  logInfo(`IC01 Socket client 시작`, 'server')
}
