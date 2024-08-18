const { logInfo, logWarn, logError } = require('@logger')

module.exports = async (socketio) => {
  // IB01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    logInfo(
      `IB01 SOCKET.IO BARIX 연결 SERVER-${process.env.INSTANCE_ID}`,
      'SERVER'
    )
    // IB02 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(
        `IB2 SOCKET.IO BARIX 연결해제 SERVER-${process.env.INSTANCE_ID}`,
        'SERVER'
      )
    })

    // IB03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(
        `IB03 SOCKET.IO BARIX 연결 SERVER-${process.env.INSTANCE_ID} - ${error}`,
        'SERVER'
      )
    })

    // evnets
    socket.on('polling', () => {
      socket.emit('polling', { polling: gStatus.interval })
    })

    logInfo(`IB01 SOCKET.IO BARIX 시작`, 'SERVER')
  })
}
