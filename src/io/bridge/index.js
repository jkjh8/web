const { logInfo, logError } = require('@logger')
const { dbQsysFindAll } = require('@db/qsys')
const { dbSetupUpdate } = require('@db/setup')
const fromQsys = require('./fromQsys')
const { fnSendGlobalStatus } = require('@api/client')

//IB01
module.exports = (socketio) => {
  // socketio 연결
  socketio.on('connection', async (socket) => {
    await dbSetupUpdate({ key: 'bridge' }, { connected: true, id: socket.id })
    // gStatus 업데이트
    gStatus.bridge.connected = true
    gStatus.bridge.id = socket.id
    gStatus.bridge.lastupdate = new Date()
    // 전체 상태 전송
    fnSendGlobalStatus()

    logInfo(`IB01 Socket Bridge 연결 ${socket.id}`, 'server')

    // 연결 해제
    socket.on('disconnect', async (reason) => {
      await dbSetupUpdate({ key: 'bridge' }, { connected: false })
      // gStatus 업데이트
      gStatus.bridge.connected = false
      gStatus.bridge.lastupdate = new Date()
      // 전체 상태 전송
      fnSendGlobalStatus()

      logInfo(`IB01 Socket Bridge 연결해제 ${socket.id}`, 'server')
    })

    // functions
    fromQsys(socket)

    // 초기값 전송
    try {
      socket.emit('qsys:devices', await dbQsysFindAll())
    } catch (error) {
      logError(`IB01 Bridge 초기값 전송 ${error}`, 'server')
    }
  })
  logInfo(`IB01 Socket Bridge 시작`, 'server')
}
