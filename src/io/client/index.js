const { logDebug, logError } = require('@logger')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')

module.exports = async (socketio, sessionMiddleware) => {
  // socketio.use(sessionMiddleware)
  // socketio.use((socket, next) => {
  //   middleware(socket.request, {}, next)
  // })

  socketio.use((socket, next) => {
    const session = socket.request.session

    console.log(session)
    if (session && session.passport) {
    }
    return next()
  })

  socketio.on('connection', async (socket) => {
    logDebug(`Socket.IO clients 연결 ${socket.id}`, 'server', 'socket.io')

    socket.on('disconnect', (reason) => {
      logDebug(`Socket.IO clients 연결해제 ${socket.id}`, 'server', 'socket.io')
    })
    fromClient(socket)
    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`clients 초기값 전송 오류 ${error}`, 'server', 'socket.io')
    }
    socketio.on('connection_error', (error) => {
      console.log(error)
    })
  })

  logDebug(`Socket.IO clients 시작`, 'server', 'socket.io')
}
