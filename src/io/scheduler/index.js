const { logInfo, logWarn, logError } = require('@logger')
const { fnSendScheduleToday } = require('@api/schedule')

module.exports = async (socketio) => {
  // IS01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    logInfo(
      `IS01 SOCKET.IO SCHEDULER 연결 SERVER=${process.env.INSTANCE_ID}`,
      'SERVER'
    )
    // IS02 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(
        `IS2 SOCKET.IO SCHEDULER 연결해제 SERVER=${process.env.INSTANCE_ID}`,
        'SERVER'
      )
    })

    // IS03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(
        `IS03 SOCKET.IO SCHEDULER 연결 SERVER=${process.env.INSTANCE_ID} - ${error}, 'SERVER'`
      )
    })

    socket.on('schedules', async () => {
      await fnSendScheduleToday()
    })
    socket.emit('setup', {})

    logInfo(`IS01 SOCKET.IO SCHEDULER 시작`, 'SERVER')
  })
}
