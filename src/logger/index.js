const logger = require('./winston')

// logger functions
function logError(message, source = '', category = '', zones = []) {
  logger.log({ level: 'error', levelNum: 0, message, source, category, zones })
}
function logDebug(message, source = '', category = '', zones = []) {
  logger.log({ level: 'debug', levelNum: 1, message, source, category, zones })
}
function logWarn(message, source = '', category = '', zones = []) {
  logger.log({ level: 'warn', levelNum: 2, message, source, category, zones })
}
function logInfo(message, source = '', category = '', zones = []) {
  logger.log({ level: 'info', levelNum: 3, message, source, category, zones })
}
function logData(message, source = '', category = '') {
  logger.log({ level: 'data', levelNum: 4, message, source, category })
}
function logEvent(message, source = '', category = '', zones = []) {
  logger.log({ level: 'event', levelNum: 5, message, source, category, zones })
}
function logCustom(message, source = '', category = '') {
  logger.log({ level: 'custom', levelNum: 6, message, source, category })
}

module.exports = {
  logError,
  logDebug,
  logWarn,
  logInfo,
  logData,
  logEvent,
  logCustom
}
