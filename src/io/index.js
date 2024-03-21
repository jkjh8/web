const { ioClients } = require('@clients')
const { ioBridge } = require('@bridge')

module.exports = initIo = () => {
  ioClients()
  ioBridge()
}
