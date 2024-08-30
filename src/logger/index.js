const { Logs, dbLogsMake } = require('@db/logs')
const moment = require('moment')
moment.locale('ko')
const log = (
  level,
  levelNum,
  message,
  source = '',
  zones = [],
  devices = []
) => {
  Logs.create({ level, levelNum, message, source, zones, devices })
    .then((result) => {
      //
    })
    .catch((err) => {
      console.log(err)
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
      case 'event error':
        color = '\x1b[37m'
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
  logError: (message, source = '', zones = [], devices = []) => {
    log('error', 0, message, source, zones, devices)
  },
  logWarn: (message, source = '', zones = [], devices = []) => {
    log('warn', 1, message, source, zones, devices)
  },
  logInfo: (message, source = '', zones = [], devices = []) => {
    log('info', 2, message, source, zones, devices)
  },
  logDebug: (message, source = '', zones = [], devices = []) => {
    log('debug', 3, message, source, zones, devices)
  },
  logEvent: (message, source = '', zones = [], devices = []) => {
    log('event', 4, message, source, zones, devices)
  },
  logErrorEvent: (message, source = '', zones = [], devices = []) => {
    log('event error', 5, message, source, zones, devices)
  }
}
