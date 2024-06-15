// const io = require('@io')
// logger
const { logEvent, logInfo, logError } = require('@logger')
// db
// api
const {
  fnSendScheduleToAPP,
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder,
  fnInTimeScheduleRun
} = require('@api/schedule')
const { gStatus } = require('../../../defaultVal')

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

  socket.on('inTime', async (data) => {
    try {
      await fnInTimeScheduleRun(data)
      logEvent(
        `스케줄 방송 시작 ${data.name} - ${data.idx} - ${data.file.base}`,
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

  socket.on('clean', async () => {
    try {
      fnCleanQsysScheduleFolder()
      fnCleanScheduleFolder()
    } catch (error) {
      logError(`스케줄 폴더 정리 오류 ${error}`, 'server', 'schedule')
    }
  })
}

module.exports = schedulerParser
