const { logDebug, logError } = require('@logger')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')
const { dbUserUpdate } = require('@db/user')

const jwt = require('jsonwebtoken')

module.exports = async (socketio) => {
  socketio.use((socket, next) => {
    try {
      const token = socket.handshake.headers.cookie.substring(4)
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        socket.user = decoded.user
      }
      next()
    } catch (error) {
      next(new Error('invaild token'))
    }
  })

  socketio.on('connection', async (socket) => {
    const { email } = socket.user

    try {
      await dbUserUpdate({ email }, { socketId: socket.id })
      logDebug(`socket.io 연결 ${socket.id}`, 'server', 'socket.io')
    } catch (error) {
      logError(`socket.io 계정 오류`, 'server', 'socket.io')
    }
    // const user = socket.request.user
    logDebug(`Socket.IO clients 연결`, email, 'socket.io')

    socket.on('disconnect', (reason) => {
      logDebug(`Socket.IO clients 연결해제`, email, 'socket.io')
    })

    fromClient(socket)

    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`clients 초기값 전송 오류 ${error}`, 'server', 'socket.io')
    }

    socketio.on('connection_error', (error) => {
      console.log(`socket.io connection error - ${error}`)
    })
  })

  logDebug(`Socket.IO clients 시작`, 'server', 'socket.io')
}
