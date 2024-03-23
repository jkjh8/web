/** @format */
const path = require('node:path')
const fs = require('node:fs')

require('module-alias/register')
require('dotenv').config()
require('@db')

// server
const express = require('express')
const https = require('node:https')
const http = require('node:http')
const { Server } = require('socket.io')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')

const { logInfo, logDebug, logError } = require('@logger')

// start codes
const app = express()

const options = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
  requestCert: false,
  rejectUnauthorized: false
}

// global settings
global.gStatus = require('./defaultVal').gStatus
require('@api/setup')()
require('@api/setup/folders')(__dirname)

app.use(require('morgan')('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// session
const session = require('express-session')
const MongoStore = require('connect-mongo')
const sessionMiddleware = session({
  secret: process.env.SESSION_PASS,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'None'
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_ADDR // 주소변경
    // mongoOptions: { useUnifiedTopology: true }
  })
})

app.use(sessionMiddleware)

// passport
const passport = require('passport')
const { Socket } = require('node:dgram')
require('@api/user/passport')()
app.use(passport.initialize())
app.use(passport.session())

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
app.use('/', require('@src/routes'))

// 서버
const httpServer = http.createServer(app)
const httpsServer = https.createServer(options, app)
// const io = new Server(server, {
//   maxHttpBufferSize: 1e8 // file transfer limit 100MB
// })

// 서버 시작
try {
  httpServer.listen(3000, () => {
    logDebug('3000번 포트에서 HTTP 서버가 시작 되었습니다', 'server', 'boot')
  })
} catch (err) {
  logError('HTTP 서버 오류', 'server', 'boot')
}

try {
  httpsServer.listen(3443, () => {
    logDebug('3443번 포트에서 HTTPS 서버가 시작 되었습니다.', 'server', 'boot')
  })
} catch (error) {
  logError(`HTTPS 서버 오류 ${error}`, 'server', 'boot')
}

// functions
require('@api/barix').fnStartBarix()

const io = new Server(httpsServer, {
  cors: {
    origin: (origin, cb) => {
      cb(null, origin)
    },
    credentials: true
  }
})
// io.attach(httpServer)

// io.engine.use(sessionMiddleware)
const client = io.of('/clients').use((socket, next) => {
  sessionMiddleware(socket.request, {}, next)
})
require('@io/client')(client)
const bridge = io.of('/qsys')
require('@io/bridge')(bridge)

exports.io = io
exports.client = client
exports.bridge = bridge
