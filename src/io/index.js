const { ioClients } = require('@clients')
const { ioBridge } = require('@bridge')

module.exports = initIo = (io) => {
  ioClients(io)
  ioBridge(io)
}
