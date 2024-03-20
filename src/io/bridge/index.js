const { logInfo, logDebug, logError } = require('@logger')
const fromQsys = require('./fromQsys')

let bridge = null

const ioBridge = (io) => {
  bridge = io.of('/qsys')
  bridge.on('connection', async (socket) => {
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

module.exports = { bridge, ioBridge }
