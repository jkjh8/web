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
const io = require('@io')
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
const sessionMiddleware = require('@api/middleware/session')
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
app.enable('trust proxy')

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

// io
io.initIO(httpsServer)
