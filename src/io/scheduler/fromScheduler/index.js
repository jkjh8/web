// const io = require('@io')
// logger
const { logEvent, logInfo, logError } = require('@logger')
// db
const { dbUserUpdate } = require('@db/user')
// api
const {
  fnSendScheduleToAPP,
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder,
  fnInTimeScheduleRun
} = require('@api/schedule')
const { fnRTemp } = require('@api/files')

const schedulerParser = (socket) => {
  socket.on('schedule:refresh', async () => {
    try {
      await fnSendScheduleToAPP()
    } catch (error) {
      logError(`스케줄 전송 오류 ${error}`, 'server', 'schedule')
    }
  })

  socket.on('schedule:setup', () => {
    socket.emit('schedule:setup', { ...gStatus.scheduler })
  })

  socket.on('schedule:status', (args) => {
    //
  })

  // 스케줄 방송 시작
  socket.on('inTime', async (data) => {
    try {
      if (data.active === false)
        return logWarning(
          `비활성화된 스케줄 ${data.name} - ${data.idx}`,
          data.user,
          'schedule',
          data.zones
        )
      await fnInTimeScheduleRun(data)
      // 사용자 방송 횟수 추가
      await dbUserUpdate(
        { email: data.user },
        { $inc: { numberOfScheduleCall: 1 } }
      )
      logEvent(
        `스케줄 방송 시작 ${data.name} - ${data.file.base} - ${data.idx}`,
        data.user,
        'schedule',
        data.zones
      )
    } catch (error) {
      logError(
        `스케줄 방송 시작 오류 ${error}`,
        'server',
        'schedule',
        data.zones
      )
    }
  })

  // 00:00:00 스케줄 폴더 정리
  socket.on('clean', async () => {
    try {
      //qsys 스케줄 폴더 비우기
      fnCleanQsysScheduleFolder()
      //스케줄 폴더 비우기
      fnCleanScheduleFolder()
      //temp 폴더 비우기
      fnRTemp()
    } catch (error) {
      logError(`스케줄 폴더 정리 오류 ${error}`, 'server', 'schedule')
    }
  })

  // 매시간 전달
  socket.on('hour', (time) => {
    //
  })
}

module.exports = schedulerParser
