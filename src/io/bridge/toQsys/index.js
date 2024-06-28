const io = require('@io')
const { logError } = require('@logger')

//IB10
const fnSendBridge = async (id, data) => {
  try {
    io.bridge.emit(id, data)
  } catch (error) {
    logError(`IB10 Bridge 송신 ${error}`, 'server')
  }
}

module.exports = {
  fnSendBridge
}
