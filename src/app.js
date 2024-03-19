/** @format */
require('module-alias/register')
require('dotenv').config()
require('@db')

const path = require('node:path')

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
    httpOnly: true
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_ADDR // 주소변경
    // mongoOptions: { useUnifiedTopology: true }
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
// 서버
const server = http.createServer(app)
const io = new Server(server, {
  maxHttpBufferSize: 1e8 // file transfer limit 100MB
})

io.engine.use(sessionMiddleware)
// 서버 시작
try {
  server.listen(3000, () => {
    logDebug('3000번 포트에서 웹서버가 시작 되었습니다', 'server', 'boot')
  })
} catch (err) {
  logError('웹서버 오류', 'server', 'boot')
}

exports.app = app
exports.io = io
