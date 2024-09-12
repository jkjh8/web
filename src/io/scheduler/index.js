const { logInfo, logWarn, logError } = require('@logger')
const { fnSendScheduleToday } = require('@api/schedule')
const { fnSendSocket } = require('@api/client')
const moment = require('moment')
const { gStatue } = require('@src/defaultVal.js')
const { gStatus } = require('../../defaultVal')

moment.locale('ko')

// const sendSchedulerStatus = () => {
//   const status = gStatus.mode === 'backup' ? 'schedulerBackup' : 'schedulerMain'
//   fnSendSocket('setup:status', {
//     [status]: moment().format('YYYY-MM-DD HH:mm:ss')
//   })
// }

module.exports = async (socketio) => {
  socketio.use((socket, next) => {
    try {
      const token = socket.handshake.headers['token']
      if (token && token === process.env.SCHEDULER_PASS) {
        next()
      }
    } catch (error) {
      next(new Error('invaild token'))
    }
  })
  // IS01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    // sendSchedulerStatus()

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
      // sendSchedulerStatus()
    })

    socket.on('oclock', () => {
      console.log('oclock')
      // sendSchedulerStatus()
    })

    socket.emit('setup', {})

    logInfo(`IS01 SOCKET.IO SCHEDULER 시작`, 'SERVER')
  })
}
