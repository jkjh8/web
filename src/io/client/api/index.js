const io = require('@io')

const fnSendPageMessage = (socket, deviceId, message) => {
  return io.client.to(socket).emit('qsys:page:message', { deviceId, message })
}

module.exports = {
  fnSendPageMessage
}
