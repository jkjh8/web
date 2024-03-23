const { logDebug, logError } = require('@logger')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')

module.exports = async (socketio) => {
  socketio.on('connection', async (socket) => {
    const userId = socket.request.session.passport.user.email
    logDebug(
      `Socket.IO clients 연결 ${userId} ${socket.id}`,
      'server',
      'socket.io'
    )

    socket.conn.on('upgrade', (transport) => {
      console.log(`transport upgraded to ${transport.name}`)
    })

    socket.on('disconnect', (reason) => {
      logDebug(
        `Socket.IO clients 연결해제 ${userId} ${socket.id}`,
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
