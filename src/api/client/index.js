const io = require('@io')
const { gStatus } = require('@src/defaultVal.js')
const fnSendPageMessage = (socket, deviceId, message) => {
  return io.client.to(socket).emit('qsys:page:message', { deviceId, message })
}

const fnSendGlobalStatus = () => {
  io.client.emit('setup:status', gStatus)
}

const fnSendSocket = (key, value) => {
  try {
    io.client.emit(key, value)
  } catch (error) {
    console.error('fnSendSocket error:', error)
  }
}

module.exports = {
  fnSendPageMessage,
  fnSendGlobalStatus,
  fnSendSocket
}
