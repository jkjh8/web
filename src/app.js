/** @format */
const path = require('node:path')
const fs = require('node:fs')
const MongoStore = require('connect-mongo')
const information = require('../package.json')
require('module-alias/register')
require('dotenv').config()
require('@db')

// server
const express = require('express')
const https = require('node:https')
const http = require('node:http')
const cookieParser = require('cookie-parser')
const { Server } = require('socket.io')

const { logInfo, logError } = require('@logger')
// start codes
const app = express()

// global settings
global.gStatus = require('./defaultVal').gStatus
require('@api/setup')()
require('@api/setup/folders')(__dirname, app)
global.gStatus.version = information.version

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
  require('cors')({
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

// 서버 시작
httpServer.listen(3000)

httpServer.on('listening', () => {
  logInfo('WEB 3000번 포트에서 HTTP 서버가 시작 되었습니다', 'server')
})
httpServer.on('error', (error) => {
  logError(`WEB HTTP 서버 오류 ${error}`, 'server')
})

// functions
require('@api/barix').fnStartBarix()

// io
const io = new Server(httpServer, {
  cors: {
    origin: (origin, cb) => {
      cb(null, origin)
    },
    credentials: true
  },
  maxHttpBufferSize: 1e8, // file transfer limit 100MB
  allowedHeaders: ['auth']
})

require('@io').initIO(io)

const { getAllDeviceStorage } = require('@api/qsys')
getAllDeviceStorage()

require('@multicast').fnInitQsysSocket()
require('@multicast').fnInitScheduleSocket()
