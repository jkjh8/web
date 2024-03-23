const { logInfo, logDebug, logError } = require('@logger')
const { dbQsysFindAll } = require('@db/qsys')
const fromQsys = require('./fromQsys')

module.exports = (socketio) => {
  socketio.use((socket, next) => {
    const header = socket.request.handshake.headers
    if (header.host === 'localhost:3443') {
      next()
    }
    next(new Error('UnAuthorized'))
  })

  socketio.on('connection', async (socket) => {
    logDebug(`Socket.IO Bridge 연결 ${socket.id}`, 'server', 'socket.io')

    socket.on('disconnect', (reason) => {
      logDebug(`Socket.IO Bridge 연결해제 ${socket.id}`, 'server', 'socket.io')
    })
    // functions
    fromQsys(socket)
    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`Bridge 초기값 전송 오류 ${error}`, 'server', 'socket.io')
    }
  })
  logDebug(`Socket.IO Bridge 시작`, 'server', 'socket.io')
}
