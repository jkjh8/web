/** @format */
const path = require('node:path')
require('module-alias/register')
require('dotenv').config()
require('@db')
// logger
const { logInfo, logError } = require('@logger')

// server
const express = require('express')
const http = require('node:http')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { Server } = require('socket.io')
const { createAdapter } = require('@socket.io/cluster-adapter')
const { setupWorker } = require('@socket.io/sticky')
// start codes
const app = express()
// global settings
global.gStatus = require('./defaultVal').gStatus
require('@api/setup')()
require('@api/setup/folders')(__dirname, app)
global.gStatus.version = require('../package.json').version
gStatus.instanceId = process.env.INSTANCE_ID
// 프로듀션 모드가 아닌 경우 로깅
if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// passport
const passport = require('passport')
require('@api/user/passport')()
app.use(passport.initialize())

// cors
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, origin)
    },
    credentials: true
  })
)

// static
app.use(express.static(path.join(__dirname, 'public', 'spa')))
app.use('/media', express.static(path.join(__dirname, 'media')))
app.use('/', require('@src/routes'))

// 서버
const httpServer = http.createServer(app)

// io
const io = new Server(httpServer, {
  cors: {
    origin: (origin, cb) => {
      cb(null, origin)
    },
    credentials: true
  },
  maxHttpBufferSize: 1e8 // file transfer limit 100MB
})
require('@io').initIO(io)

try {
  io.adapter(createAdapter())
  setupWorker(io)
} catch (error) {
  console.error('io error:', error)
}

// 서버 시작
httpServer.listen(3000)

httpServer.on('listening', () => {
  logInfo('WEB 3000번 포트에서 HTTP 서버가 시작 되었습니다', 'server')
})
httpServer.on('error', (error) => {
  logError(`WEB HTTP 서버 오류 ${error}`, 'server')
})

// multicast socket
require('@multicast').fnInitQsysSocket()

if (process.env.INSTANCE_ID == 0) {
  const { getAllDeviceStorage } = require('@api/qsys')
  getAllDeviceStorage()
  require('@multicast').fnGetSchedulerSetup()
}
