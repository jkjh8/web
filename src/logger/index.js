const { dbLogsMake } = require('@db/logs')
const moment = require('moment')
moment.locale('ko')

// logger functions
// function logError() {
//   dbLogsMake
//   logger.log({ level: 'error', levelNum: 0, message, source, category, zones })
// }
// function logDebug(message, source = '', category = '', zones = []) {
//   logger.log({ level: 'warn', levelNum: 1, message, source, category, zones })
// }
// function logWarn(message, source = '', category = '', zones = []) {
//   logger.log({ level: 'info', levelNum: 2, message, source, category, zones })
// }
// function logInfo(message, source = '', category = '', zones = []) {
//   logger.log({ level: 'http', levelNum: 3, message, source, category, zones })
// }
// function logData(message, source = '', category = '') {
//   logger.log({ level: 'verbose', levelNum: 4, message, source, category })
// }
// function logEvent(message, source = '', category = '', zones = []) {
//   logger.log({ level: 'debug', levelNum: 5, message, source, category, zones })
// }
// function logCustom(message, source = '', category = '') {
//   logger.log({ level: 'silly', levelNum: 6, message, source, category })
// }

module.exports = {
  logError: async (message, source = '', category = '', zones = []) => {
    await dbLogsMake({
      level: 'error',
      levelNum: 0,
      message,
      source,
      category,
      zones
    })
    if (process.env.NODE_ENV !== 'production')
      console.log(
        `\x1b[31m${moment().format(
          'YYYY-MM-DD HH:mm:ss a'
        )} error ${message}, ${source}, ${zones}, ${category} \x1b[0m`
      )
  },
  logWarn: async (message, source = '', category = '', zones = []) => {
    await dbLogsMake({
      level: 'warn',
      levelNum: 1,
      message,
      source,
      category,
      zones
    })
    if (process.env.NODE_ENV !== 'production')
      console.log(
        `\x1b[33m${moment().format(
          'YYYY-MM-DD HH:mm:ss a'
        )} warn ${message}, ${source}, ${zones}, ${category} \x1b[0m`
      )
  },
  logInfo: async (message, source = '', category = '', zones = []) => {
    await dbLogsMake({
      level: 'info',
      levelNum: 2,
      message,
      source,
      category,
      zones
    })
    if (process.env.NODE_ENV !== 'production')
      console.log(
        `\x1b[32m${moment().format(
          'YYYY-MM-DD HH:mm:ss a'
        )} info ${message}, ${source}, ${zones}, ${category} \x1b[0m`
      )
  },
  logDebug: async (message, source = '', category = '', zones = []) => {
    await dbLogsMake({
      level: 'debug',
      levelNum: 3,
      message,
      source,
      category,
      zones
    })
    if (process.env.NODE_ENV !== 'production')
      console.log(
        `\x1b[35m${moment().format(
          'YYYY-MM-DD HH:mm:ss a'
        )} debug ${message}, ${source}, ${zones}, ${category} \x1b[0m`
      )
  },
  logEvent: async (message, source = '', category = '', zones = []) => {
    await dbLogsMake({
      level: 'event',
      levelNum: 4,
      message,
      source,
      category,
      zones
    })
    if (process.env.NODE_ENV !== 'production')
      console.log(
        `\x1b[36m${moment().format(
          'YYYY-MM-DD HH:mm:ss a'
        )} event ${message}, ${source}, ${zones}, ${category} \x1b[0m`
      )
  }
}
