const { logInfo, logWarn, logError } = require('@logger')

module.exports = async (socketio) => {
  // IB01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    logInfo(`IB01 Socket Barix 연결 ID:${process.env.INSTANCE_ID}`, 'SERVER')
    // IB02 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(
        `IB2 Socket Barix 연결해제 ID:${process.env.INSTANCE_ID}`,
        'SERVER'
      )
    })

    // IB03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(
        `IB03 Socket Barix 연결 ID:${process.env.INSTANCE_ID} - ${error}`
      )
    })

    // evnets
    socket.on('polling', () => {
      socket.emit('polling', { polling: gStatus.interval })
    })

    logInfo(`IB01 Socket Barix 시작`, 'server')
  })
}
