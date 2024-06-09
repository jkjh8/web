const io = require('@io')
const { logInfo, logError } = require('@logger')
const { dbQsysFindAll, dbQsysFind } = require('@db/qsys')

const fnSendSocketStatusAll = async (socket) => {
  try {
    const qsys = await dbQsysFindAll()
    socket.emit('qsys:devices', qsys)
  } catch (error) {
    logError(`QSYS 데이터 소켓 송신 오류 ${error}`, 'server', 'qsys')
  }
}

const fnSendClientQsysData = async (deviceId, obj) => {
  try {
    io.client.emit('qsys:device', { deviceId, data: obj })
  } catch (error) {
    logError(`QSYS 단일 데이터 Client 송신 오류 ${error}`, 'server', 'qsys')
  }
}

const fnSendClientStatusAll = async () => {
  try {
    const data = await dbQsysFindAll()
    io.client.emit('qsys:devices', data)
  } catch (error) {
    logError(`QSYS 데이터 Client 송신 오류 ${error}`, 'server', 'qsys')
  }
}

const fnSendQsysData = async (key, obj) => {
  try {
    io.bridge.emit(key, obj)
  } catch (error) {
    logError(`Bridge 전송 오류 ${error}`, 'server', 'bridge')
  }
}
const fnSendAllStatusAll = async () => {
  try {
    const data = await dbQsysFindAll()
    io.bridge.emit('qsys:devices', data)
    io.client.emit('qsys:devices', data)
  } catch (error) {
    logError(`QSYS 데이터 전체 송신 오류 ${error}`, 'server', 'qsys')
  }
}

const fnSendClientPageMessage = async (obj) => {
  try {
    io.client.emit('qsys:page:message', obj)
  } catch (error) {
    logError(`QSYS Page message 전송 오류 ${error}`, 'server', 'qsys')
  }
}

module.exports = {
  fnSendClientQsysData,
  fnSendSocketStatusAll,
  fnSendClientStatusAll,
  fnSendAllStatusAll,
  fnSendQsysData,
  fnSendClientPageMessage
}
