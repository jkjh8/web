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
const { fnCheckPageStatusAll } = require('@api/qsys')

const schedulerParser = (socket) => {
  socket.on('schedule:refresh', async () => {
    try {
      await fnSendScheduleToAPP()
    } catch (error) {
      logError(`스케줄 전송 오류 ${error}`, 'server')
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
    const { name, user, zones, file, idx, active } = data
    try {
      if (active === false) {
        logWarning(`비활성화된 스케줄 ${name} - ${idx}`, user, zones)
        return
      }
      // 스케줄 방송 시작
      await fnInTimeScheduleRun(data)
      // 사용자 방송 횟수 추가
      await dbUserUpdate({ email: user }, { $inc: { numberOfScheduleCall: 1 } })
      logEvent(`스케줄 방송 시작 ${name} - ${file.base} - ${idx}`, user, zones)
    } catch (error) {
      logError(`스케줄 방송 시작 오류 ${error}`, user, zones)
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
      // qsys page 초기화
      fnCheckPageStatusAll()
    } catch (error) {
      logError(`스케줄 폴더 정리 오류 ${error}`, 'server')
    }
  })

  // 매시간 전달
  socket.on('hour', (time) => {
    //
  })
}

module.exports = schedulerParser
