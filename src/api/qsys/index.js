const app = require('@app')
const { logInfo, logDebug, logError } = require('@logger')
const { dbQsysFindAll, dbQsysFind } = require('@db/qsys')

const fnSSQD = async (socket) => {
  try {
    const qsys = await dbQsysFindAll()
    socket.emit('qsys:devices', qsys)
  } catch (error) {
    logError(`QSYS 데이터 소켓 송신 오류 ${error}`, 'server', 'qsys')
  }
}

const fnSQD = async (deviceId, obj) => {
  try {
    app.client.emit('qsys:device', { deviceId, data: obj })
  } catch (error) {
    logError(`QSYS 단일 데이터 송신 오류 ${error}`, 'server', 'qsys')
  }
}

const fnSCDS = async () => {
  try {
    const data = await dbQsysFindAll()
    app.client.emit('qsys:devices', data)
  } catch (error) {
    logError(`QSYS 데이터 브릿지 공유 오류 ${error}`, 'server', 'qsys')
  }
}

module.exports = { fnSQD, fnSSQD, fnSCDS }
