const dgram = require('dgram')
const { logInfo, logError } = require('@logger')
const qsysParser = require('./qsysParser')

const address = '239.129.129.12'

let qsysSocket = dgram.createSocket({ type: 'udp4', reuseAddr: true })
let scheduleSocket = dgram.createSocket({ type: 'udp4', reuseAddr: true })

// SK01
qsysSocket.on('error', (err) => {
  logError(`SK01 디바이스 소켓 오류 ${err}`, 'multicast')
})

// SK02
qsysSocket.on('message', (msg, rinfo) => {
  try {
    const rt = JSON.parse(msg.toString().trim())
    const { key, value } = rt
    qsysParser(key, value)
  } catch (error) {
    logError(`SK01 디바이스 소켓 메시지 오류 ${error}`, 'multicast')
  }
})

// SK03
qsysSocket.on('listening', () => {
  qsysSocket.setBroadcast(true)
  qsysSocket.setMulticastTTL(128)
  qsysSocket.addMembership(address)
  logInfo('SK01 디바이스 소켓 시작', 'multicast')
})

// SK04
scheduleSocket.on('error', (err) => {
  logError(`SK02 스케줄 소켓 오류 ${err}`, 'schedule')
})

// SK05
scheduleSocket.on('message', (msg, rinfo) => {
  console.log(msg.toString().trim())
})

// SK06
scheduleSocket.on('listening', () => {
  scheduleSocket.setBroadcast(true)
  scheduleSocket.setMulticastTTL(128)
  scheduleSocket.addMembership(address)
  logInfo('SK02 스케줄 소켓 시작', 'multicast')
})

const fnInitQsysSocket = () => {
  qsysSocket.bind(9908)
}

const fnInitScheduleSocket = () => {
  scheduleSocket.bind(9907)
}

const fnSendDeviceMuticast = (key, value) => {
  const message = Buffer.from(JSON.stringify({ key, value }))
  qsysSocket.send(message, 0, message.length, 9998, address, (err) => {
    if (err) {
      logError(`SK01 디바이스 소켓 메시지 전송 오류 ${err}`, 'multicast')
    }
  })
}

module.exports = {
  fnInitQsysSocket,
  fnInitScheduleSocket,
  fnSendDeviceMuticast
}
