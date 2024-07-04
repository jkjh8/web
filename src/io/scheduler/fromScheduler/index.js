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
  fnInTimeScheduleRun,
  fnCleanQsysScheduleTypeOnce
} = require('@api/schedule')
const { fnRTemp } = require('@api/files')
const { fnCheckPageStatusAll } = require('@api/qsys')
const { log } = require('winston')

const schedulerParser = (socket) => {
  // IS02 스케줄러 갱신
  socket.on('schedule:refresh', async () => {
    try {
      await fnSendScheduleToAPP()
    } catch (error) {
      logError(`IS02 스케줄 전송 ${error}`, 'server')
    }
  })
  // IS03 스케줄러 설정
  socket.on('schedule:setup', () => {
    socket.emit('schedule:setup', { ...gStatus.scheduler })
  })
  //  IS04 스케줄러 상태
  socket.on('schedule:status', (args) => {
    //
  })

  // IS05 스케줄 방송 시작
  socket.on('inTime', async (data) => {
    const { name, user, zones, file, idx, active } = data
    try {
      if (active === false) {
        logWarning(`비활성화된 스케줄: ${name} ID: ${idx}`, user, zones)
        return
      }
      // 스케줄 방송 시작
      await fnInTimeScheduleRun(data)
      // 사용자 방송 횟수 추가
      await dbUserUpdate({ email: user }, { $inc: { numberOfScheduleCall: 1 } })
      // 로그 기록
      logEvent(
        `스케줄 방송 시작: ${name} 파일: ${file.base} ID: ${idx}`,
        user,
        zones
      )
    } catch (error) {
      logError(`IS05 스케줄 방송 시작 ${error}`, user, zones)
    }
  })

  // IS06 00:00:00 스케줄 폴더 정리
  socket.on('clean', async () => {
    try {
      // 정상 모드일 때만 실행
      if (gStatus.mode === 'Normal') {
        // qsys page 초기화
        fnCheckPageStatusAll()
        //qsys 스케줄 폴더 비우기
        fnCleanQsysScheduleFolder()
        // qsys 스케줄 타입이 once인 폴더 비우기
        fnCleanQsysScheduleTypeOnce()
      }
      //스케줄 폴더 비우기
      fnCleanScheduleFolder()
      //temp 폴더 비우기
      fnRTemp()
    } catch (error) {
      logError(`IS06 스케줄 폴더 정리 ${error}`, 'server')
    }
  })

  // IS07 매시간 전달
  socket.on('hour', (time) => {
    logInfo(`IS07 매시간 전달 ${JSON.stringify(time)}`, 'server')
  })
}

module.exports = schedulerParser
