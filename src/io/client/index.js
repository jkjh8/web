const { logDebug, logError } = require('@logger')
const middleware = require('./middleware')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')

module.exports = async (socketio) => {
  socketio.use(middleware)
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
  })
  logDebug(`Socket.IO clients 시작`, 'server', 'socket.io')
}
