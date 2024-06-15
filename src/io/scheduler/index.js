// logger
const { logEvent, logInfo, logError } = require('@logger')
// db
const { dbSetupUpdate } = require('@db/setup')
// api
const { fnSendScheduleToAPP } = require('@api/schedule')
const { gStatus } = require('../../defaultVal')
const { fnSendGlobalStatus } = require('../client/api')

module.exports = (socketio) => {
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

    logInfo(`Socekt.IO Scheduler 연결 ${socket.id}`, 'server', 'socket.io')

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

      logInfo(
        `Socket.IO Scheduler 연결해제 ${socket.id}`,
        'server',
        'socket.io'
      )
    })
    //
    require('./fromScheduler')(socket)

    // 접속시 오늘 스케줄 전송
    await fnSendScheduleToAPP()
  })
}
