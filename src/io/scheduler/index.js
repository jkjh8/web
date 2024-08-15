const { logInfo, logWarn, logError } = require('@logger')
const { fnSendScheduleToday } = require('@api/schedule')

module.exports = async (socketio) => {
  // IS01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    logInfo(
      `IS01 Socket Scheduler 연결 ID:${process.env.INSTANCE_ID}`,
      'SERVER'
    )
    // IS02 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(
        `IS2 Socket Scheduler 연결해제 ID:${process.env.INSTANCE_ID}`,
        'SERVER'
      )
    })

    // IS03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(
        `IS03 Socket Scheduler 연결 ID:${process.env.INSTANCE_ID} - ${error}`
      )
    })

    socket.on('schedules', async () => {
      await fnSendScheduleToday()
    })
    socket.emit('setup', {})

    logInfo(`IS01 Socket Scheduler 시작`, 'server')
  })
}
