// logger
const { logInfo, logWarn } = require('@logger')
// db
const { dbSetupUpdate } = require('@db/setup')
// api
const { fnSendScheduleToAPP } = require('@api/schedule')
const { gStatus } = require('../../defaultVal')
const { fnSendGlobalStatus } = require('@api/client')

module.exports = (socketio) => {
  // IS01 소켓 연결
  socketio.on('connection', async (socket) => {
    const type = socket.handshake.headers.type
    const connected = { connected: true, id: socket.id, lastupdate: new Date() }
    const update = type === 'main' ? { main: connected } : { backup: connected }
    await dbSetupUpdate({ key: 'scheduler' }, update)
    // gStatus 업데이트
    gStatus.scheduler[type].connected = true
    gStatus.scheduler[type].id = socket.id
    gStatus.scheduler[type].lastupdate = new Date()
    // 전체 상태 전송
    fnSendGlobalStatus()
    // send relay on time
    socketio.emit('relayOnTime', gStatus.relayOnTime)

    logInfo(`IS01 Socekt 스케줄러 연결 ${socket.id}`, 'server')

    // 1분마다 오늘 스케줄 전송
    const interval = setInterval(async () => {
      await fnSendScheduleToAPP()
    }, 60000)

    // 연결 해제
    socket.on('disconnect', async (reason) => {
      // 1분마다 스케줄 전송 해제
      clearInterval(interval)

      const connected = { connected: false, lastupdate: new Date() }
      const update =
        type === 'main' ? { main: connected } : { backup: connected }
      await dbSetupUpdate({ key: 'scheduler' }, update)

      // gStatus 업데이트
      gStatus.scheduler[type].connected = false
      gStatus.scheduler[type].lastupdate = new Date()
      // 전체 상태 전송
      fnSendGlobalStatus()

      logWarn(`IS01 Socket 스케줄러 연결 해제 ${socket.id}`, 'server')
    })
    //
    require('./fromScheduler')(socket)

    // 접속시 오늘 스케줄 전송
    await fnSendScheduleToAPP()
  })
}
