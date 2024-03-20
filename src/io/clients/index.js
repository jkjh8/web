const { logDebug, logError } = require('@logger')
const middleware = require('./middleware')
const fromClient = require('./fromClient')
const { dbQsysFindAll } = require('@db/qsys')

let clients

const ioClients = async (io) => {
  clients = io.of('/clients')
  clients.use(middleware)

  clients.on('connection', async (socket) => {
    logDebug(`Socket.IO Client 연결 ${socket.id}`, 'server', 'socket.io')
    socket.on('disconnect', (reason) => {
      logDebug(`Socket.IO Client 연결해제 ${socket.id}`, 'server', 'socket.io')
    })
    fromClient(socket)
    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`Client 초기값 전송 오류 ${error}`, 'server', 'socket.io')
    }
  })
  logDebug(`Socket.IO Client 시작`, 'server', 'socket.io')
}

module.exports = { clients, ioClients }
