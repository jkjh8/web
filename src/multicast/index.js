const dgram = require('dgram')
const { logInfo, logError } = require('@logger')
const parser = require('./parser')

const address = '239.129.129.12'

let multicast = dgram.createSocket({ type: 'udp4', reuseAddr: true })

// SK01
multicast.on('error', (err) => {
  logError(`SK01 디바이스 소켓 오류 ${err}`, 'SERVER')
})

// SK02
multicast.on('message', (msg) => {
  try {
    const { key, value } = JSON.parse(msg.toString().trim())
    parser(key, value)
  } catch (error) {
    logError(`SK01 디바이스 소켓 메시지 오류 ${error}`, 'SERVER')
  }
})

// SK03
multicast.on('listening', () => {
  multicast.setBroadcast(true)
  multicast.setMulticastTTL(0)
  multicast.addMembership(address)
  logInfo('SK01 디바이스 소켓 시작 9908', 'SERVER')
})

const fnInitQsysSocket = () => {
  console.log(process.env.INSTANCE_ID)
  const port = 9908 + Number(process.env.INSTANCE_ID)
  logInfo(
    `디바이스 소켓 시작 포트 ${process.env.INSTANCE_ID} ${port}`,
    'SERVER'
  )

  multicast.bind({
    port: port,
    exclusive: true
  })
}

// SK04
const fnSendDeviceMuticast = (key, value) => {
  const message = Buffer.from(JSON.stringify({ key, value }))
  multicast.send(message, 0, message.length, 9998, address, (err) => {
    if (err) {
      logError(`SK04 디바이스 소켓 메시지 전송 오류 ${err}`, 'SERVER')
    }
  })
}

// SK05
const fnSendScheduleMuticast = (key, value) => {
  const message = Buffer.from(JSON.stringify({ key, value }))
  multicast.send(message, 0, message.length, 9997, address, (err) => {
    if (err) {
      logError(`SK05 스케줄 소켓 메시지 전송 오류 ${err}`, 'SERVER')
    }
  })
}

module.exports = {
  multicast,
  fnInitQsysSocket,
  fnSendDeviceMuticast,
  fnSendScheduleMuticast
}
