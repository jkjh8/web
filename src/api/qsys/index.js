const { clients } = require('@clients')
const { logInfo, logDebug, logError } = require('@logger')

const { dbQsysFindAll, dbQsysFind } = require('@db/qsys')

const fnSSQD = async (socket) => {
  try {
    const qsys = await dbQsysFindAll()
    socket.emit('qsys:devices', qsys)
  } catch (error) {
    logError(error)
  }
}

module.exports = { fnSSQD }
