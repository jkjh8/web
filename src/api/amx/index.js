const dgram = require('dgram')
const { logError } = require('@logger')

// 릴레이 여러개 구동
const fnAmxesRelayOn = async (devices) => {
  return Promise.all(
    devices.map(async (device) => {
      await fnAmxRelayOn(device)
    })
  )
}
// 단일 릴레이 구동
const fnAmxRelayOn = (device) => {
  return new Promise((resolve, reject) => {
    if (device.amx) {
      const udp = dgram.createSocket('udp4')
      udp.send(
        `#on,${device.params.Zones.join(',')}!`,
        12032,
        device.amx,
        (error) => {
          if (error) {
            logError(
              `AMX Relay On 오류 ${device.name} - ${error}`,
              'server',
              'amx'
            )
            reject(error)
          }
          udp.close()
          resolve()
        }
      )
    }
    resolve()
  })
}

// 릴레이 끄기
const fnAmxRelayOff = (device) => {
  return new Promise((resolve, reject) => {
    if (device.amx) {
      const udp = dgram.createSocket('udp4')
      udp.send(
        `#off,${device.params.Zones.join(',')}!`,
        12032,
        device.amx,
        (error) => {
          if (error) {
            logError(
              `AMX Relay Off 오류 ${device.name} - ${error}`,
              'server',
              'amx'
            )
            reject(error)
          }
          udp.close()
          resolve()
        }
      )
    }
    resolve()
  })
}

module.exports = {
  fnAmxesRelayOn,
  fnAmxRelayOn,
  fnAmxRelayOff
}
