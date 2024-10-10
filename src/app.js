/** @format */
const path = require('node:path')
require('module-alias/register')
require('dotenv').config()
require('@db')
const dgram = require('dgram')
const { fnAmxAllOn, fnAmxAllOff } = require('@api/amx')
const { fnBarixAllOn, fnBarixAllOff } = require('@api/barix')
// const compression = require('compression')
// logger
const { logInfo, logError } = require('@logger')
const pm2 = require('pm2')
// server
const express = require('express')
const http = require('node:http')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { Server } = require('socket.io')
const { createAdapter } = require('@socket.io/cluster-adapter')
const { setupWorker } = require('@socket.io/sticky')
const { gStatus } = require('@src/defaultVal.js')
// app install
// npm install @socket.io/cluster-adapter @socket.io/sticky -g
// npm install @socket.io/pm2 -g
require('@api/pm2').initPM2IPC()

// start codes
const app = express()
// global settings
require('@api/setup')()
require('@api/setup/folders')(__dirname, app)
gStatus.version = require('../package.json').version
gStatus.instanceId = process.env.INSTANCE_ID
// 프로듀션 모드가 아닌 경우 로깅
if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'))

  // cors
  // 호스팅시 삭제
  app.use(
    cors({
      origin: (origin, cb) => {
        cb(null, origin)
      },
      credentials: true
    })
  )
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// yanr add compression
// app.use(compression())

// passport
const passport = require('passport')
require('@api/user/passport')()
app.use(passport.initialize())

// static
app.use(express.static(path.join(__dirname, 'public', 'spa')))

app.use('/media', express.static(path.join(__dirname, 'media')))
app.use('/', require('@src/routes'))

// 서버
const httpServer = http.createServer(app, { host: '0.0.0.0' })

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
  logInfo(
    `APP WEB 3000번 포트에서 HTTP 서버${process.env.INSTANCE_ID}이 시작 되었습니다`,
    'SERVER'
  )
})
httpServer.on('error', (error) => {
  logError(`APP WEB HTTP 서버 오류 ${error}`, 'SERVER')
})

let offDelay = null
if (process.env.INSTANCE_ID == 0) {
  const { getAllDeviceStorage } = require('@api/qsys')
  getAllDeviceStorage()

  const net = require('net')
  const ipaddr = '0.0.0.0'
  const port = 2031

  let tcp = net.createServer(function (socket) {
    console.log(socket.address().address + ' connected.')

    // setting encoding
    socket.setEncoding('utf8')

    // print data from client
    socket.on('data', async function (data) {
      switch (data) {
        case 'on':
          await fnAmxAllOn()
          await fnBarixAllOn()
          if (offDelay) {
            clearTimeout(offDelay)
            offDelay = null
          }
          break
        case 'off':
          offDelay = setTimeout(async () => {
            await fnAmxAllOff()
            await fnBarixAllOff()
          }, 5000)
          break
        default:
          console.log(data)
          break
      }
    })

    // print message for disconnection with client
    socket.on('close', function () {
      console.log('client disconnted.')
    })

    // send message to client
    setTimeout(() => {
      socket.write('welcome to server')
    }, 500)
  })

  // print error message
  tcp.on('error', function (err) {
    console.log('err: ', err.code)
  })

  // listening
  tcp.listen(port, ipaddr, function () {
    console.log('listening on 2031..')
  })
}
