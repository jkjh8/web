/** @format */
const path = require('node:path')
const fs = require('node:fs')
const MongoStore = require('connect-mongo')

require('module-alias/register')
require('dotenv').config()
require('@db')

// server
const express = require('express')
const https = require('node:https')
const http = require('node:http')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { Server } = require('socket.io')

const { logInfo, logDebug, logError } = require('@logger')
// start codes
const app = express()
app.enable('trust proxy')

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

const sessionMiddleware = session({
  secret: process.env.SESSION_PASS,
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'None'
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_ADDR // 주소변경
  })
})
app.use(sessionMiddleware)

// passport
const passport = require('passport')
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

app.use(function (req, res, next) {
  if (!req.secure) {
    // 호스팅시 주소 수정 요망!!!!
    return res.redirect('https://192.168.1.70:3443' + req.url)
  }
  next()
})

// static
app.use(express.static(path.join(__dirname, 'public', 'spa')))
app.use('/', require('@src/routes'))

// 서버
const httpServer = http.createServer(app)
const httpsServer = https.createServer(options, app)

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

// io
const io = new Server(httpsServer, {
  cors: {
    origin: (origin, cb) => {
      cb(null, origin)
    },
    maxHttpBufferSize: 1e8, // file transfer limit 100MB
    credentials: true
  }
})
function onlyForHandshake(middleware) {
  return (req, res, next) => {
    const isHandshake = req._query.sid === undefined
    if (isHandshake) {
      middleware(req, res, next)
    } else {
      next()
    }
  }
}
io.engine.use(onlyForHandshake(sessionMiddleware))
io.engine.use(onlyForHandshake(passport.session()))

require('@io').initIO(io)
