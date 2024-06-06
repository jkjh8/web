//오늘 스케줄을 db에서 찾아서 소켓으로 전송하는 코드
// 스케줄러 소켓 가져오기

const scheduler = require('@io/scheduler')

const fnSendTodaySchedule = async () => {
  try {
    scheduler.emit('today', await dbSchFindToday())
  } catch (error) {
    logError(`Scheduler 초기값 전송 오류 ${error}`, 'server', 'socket.io')
  }
}

module.exports = { fnSendTodaySchedule }
