const winston = require('winston')
const transport = require('./transport')

const timezoned = () => {
  return new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
}

// log config and color
const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    info: 3,
    data: 4,
    event: 5,
    custom: 6
  },
  colors: {
    error: '\x1b[31m',
    debug: '\x1b[34m',
    warn: '\x1b[33m',
    info: '\x1b[32m',
    data: '\x1b[35m',
    event: '\x1b[36m',
    custom: '\x1b[33m'
  }
}

const logFormat = winston.format.printf(
  ({ timestamp, level, message, source, category }) => {
    return `${
      config.colors[level] || ''
    } ${timestamp} ${level} - ${source} ${category} - ${message}\x1b[0m`
  }
)

const logger = winston.createLogger({
  levels: config.levels,
  transports: [new transport()]
})

// add prodution mode show console.log
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      levels: config.levels,
      level: 'custom',
      format: winston.format.combine(
        winston.format.timestamp({ format: timezoned }),
        logFormat
      )
    })
  )
}

module.exports = logger
