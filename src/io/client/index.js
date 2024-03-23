const { logDebug, logError } = require('@logger')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')

function onlyForHandshake(middleware) {
  return (req, res, next) => {
    const isHandshake = req._query.sid === undefined
    if (isHandshake) {
      middleware(req, res, next)
    } else {
      next()
    }
  }
}

module.exports = async (socketio) => {
  socketio.use((socket, next) => {
    if (socket.request.user) {
      return next()
    }
    next(new Error('UnAuthorized'))
  })
  // socketio.use(sessionMiddleware)
  // socketio.use((socket, next) => {
  //   middleware(socket.request, {}, next)
  // })

  // socketio.use(
  //   onlyForHandshake((req, res, next) => {
  //     console.log(req.user)
  //     next()
  //   })
  // )

  socketio.on('connection', async (socket) => {
    const user = socket.request.user
    logDebug(`Socket.IO clients 연결 ${user.email}`, 'server', 'socket.io')

    socket.on('disconnect', (reason) => {
      logDebug(
        `Socket.IO clients 연결해제 ${user.email}`,
        'server',
        'socket.io'
      )
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
