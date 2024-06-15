const { logInfo, logError } = require('@logger')
const { dbQsysFindAll } = require('@db/qsys')
const { dbSetupUpdate } = require('@db/setup')
const fromQsys = require('./fromQsys')
const { fnSendGlobalStatus } = require('../client/api')

module.exports = (socketio) => {
  // socketio.use((socket, next) => {
  //   const header = socket.handshake.headers
  //   if (header.host === 'localhost' && header.auth === 'qsys') {
  //     return next()
  //   }
  //   next(new Error('UnAuthorized'))
  // })

  socketio.on('connection', async (socket) => {
    await dbSetupUpdate({ key: 'bridge' }, { connected: true, id: socket.id })
    // gStatus 업데이트
    gStatus.bridge.connected = true
    gStatus.bridge.id = socket.id
    gStatus.bridge.lastupdate = new Date()
    // 전체 상태 전송
    fnSendGlobalStatus()

    logInfo(`Socket.IO Bridge 연결 ${socket.id}`, 'server', 'socket.io')

    socket.on('disconnect', async (reason) => {
      await dbSetupUpdate({ key: 'bridge' }, { connected: false })

      // gStatus 업데이트
      gStatus.bridge.connected = false
      gStatus.bridge.lastupdate = new Date()
      // 전체 상태 전송
      fnSendGlobalStatus()

      logInfo(`Socket.IO Bridge 연결해제 ${socket.id}`, 'server', 'socket.io')
    })
    // functions
    fromQsys(socket)
    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`Bridge 초기값 전송 오류 ${error}`, 'server', 'socket.io')
    }
  })
  logInfo(`Socket.IO Bridge 시작`, 'server', 'socket.io')
}
