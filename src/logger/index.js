const { dbLogsMake } = require('@db/logs')
const moment = require('moment')
moment.locale('ko')
const log = async (level, levelNum, message, source = '', zones = []) => {
  await dbLogsMake({
    level,
    levelNum,
    message,
    source,
    zones
  })
  if (process.env.NODE_ENV !== 'production') {
    let color = ''
    switch (level) {
      case 'error':
        color = '\x1b[31m'
        break
      case 'warn':
        color = '\x1b[33m'
        break
      case 'info':
        color = '\x1b[32m'
        break
      case 'debug':
        color = '\x1b[35m'
        break
      case 'event':
        color = '\x1b[36m'
        break
      default:
        color = ''
    }
    console.log(
      `${color}${moment().format(
        'YYYY-MM-DD HH:mm:ss a'
      )} ${level} ${message}, ${source} ${zones}\x1b[0m`
    )
  }
}

module.exports = {
  logError: async (message, source = '', zones = []) => {
    await log('error', 0, message, source, zones)
  },
  logWarn: async (message, source = '', zones = []) => {
    await log('warn', 1, message, source, zones)
  },
  logInfo: async (message, source = '', zones = []) => {
    await log('info', 2, message, source, zones)
  },
  logDebug: async (message, source = '', zones = []) => {
    await log('debug', 3, message, source, zones)
  },
  logEvent: async (message, source = '', zones = []) => {
    await log('event', 4, message, source, zones)
  }
}
