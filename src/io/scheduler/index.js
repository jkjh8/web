const { dbSchFindToday } = require('@db/schedule')
const { fnSendScheduleToAPP } = require('@api/schedule')
const {
  fnMakePageFromSchedule,
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder
} = require('@api/schedule')
const io = require('@io')
const { logEvent, logInfo, logError } = require('@logger')
const { fnInTimeScheduleRun } = require('@api/schedule')

module.exports = (socketio) => {
  socketio.on('connection', async (socket) => {
    // 접속시 로그 기록
    logInfo(`Socekt.IO Scheduler 연결 ${socket.id}`, 'server', 'socket.io')

    // 1분마다 오늘 스케줄 전송
    const interval = setInterval(async () => {
      socket.emit('today', await dbSchFindToday())
    }, 60000)

    // 연결 해제
    socket.on('disconnect', (reason) => {
      // 1분마다 스케줄 전송 해제
      clearInterval(interval)
      logInfo(
        `Socket.IO Scheduler 연결해제 ${socket.id}`,
        'server',
        'socket.io'
      )
    })
    //
    socket.on('schedule:refresh', async () => {
      try {
        await fnSendScheduleToAPP()
      } catch (error) {
        logError(`스케줄 전송 오류 ${error}`, 'server', 'schedule')
      }
    })

    socket.on('inTime', async (data) => {
      try {
        await fnInTimeScheduleRun(data)
        logEvent(
          `스케줄 방송 시작 ${data.name} - ${data.idx} - ${data.file.base}`,
          data.user,
          'schedule'
        )
      } catch (error) {
        logError(`스케줄 방송 시작 오류 ${error}`, 'server', 'schedule')
      }
    })

    socket.on('clean', async () => {
      try {
        fnCleanQsysScheduleFolder()
        fnCleanScheduleFolder()
      } catch (error) {
        logError(`스케줄 폴더 정리 오류 ${error}`, 'server', 'schedule')
      }
    })
    // 접속시 오늘 스케줄 전송
    socket.emit('today', await dbSchFindToday())
  })
}
