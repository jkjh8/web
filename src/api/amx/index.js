const dgram = require('dgram')
const { dbQsysFindOne, dbQsysFindAll } = require('@db/qsys')
const { logError } = require('@logger')

//A01 릴레이 여러개 구동
const fnAmxesRelayOn = async (devices) => {
  return Promise.all(
    devices.map(async (device) => {
      await fnAmxRelayOn(device)
    })
  )
}
//A02 단일 릴레이 구동
const fnAmxRelayOn = (device) => {
  return new Promise((resolve, reject) => {
    if (device.amx) {
      const udp = dgram.createSocket('udp4')
      udp.send(
        `#on,${device.params.Zones.join(',')}!`,
        9000,
        device.amx,
        (error) => {
          if (error) {
            logError(
              `A02 AMX 릴레이 켜기 - ${device.name} - ${error}`,
              'SERVER'
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

//A03 릴레이 끄기
const fnAmxRelayOff = async (device) => {
  try {
    const checkDevice = await dbQsysFindOne({ deviceId: device.deviceId })
    const ZoneStatus = checkDevice.ZoneStatus
    const Zones = device.params.Zones
    const active = Zones.filter((zone) => !ZoneStatus[zone - 1].Active)
    if (device.amx) {
      const udp = dgram.createSocket('udp4')
      udp.send(`#off,${active.join(',')}!`, 9000, device.amx, (error) => {
        if (error) {
          logError(`A03 AMX 릴레이 끄기 - ${device.name} - ${error}`, 'SERVER')
          throw error
        }
        udp.close()
      })
    }
  } catch (error) {
    logError(`A03 AMX 릴레이 끄기 - ${error}`, 'SERVER')
  }
}
// A04 All on
const fnAmxAllOn = async () => {
  try {
    const devices = await dbQsysFindAll({})
    for (let device of devices) {
      if (device.amx) {
        const udp = dgram.createSocket('udp4')
        // device.ZoneStatus에서 Zone만 추출
        const Zones = device.ZoneStatus.map((zone) => zone.Zone)
        console.log(Zones)
        udp.send(`#on,${Zones.join(',')}!`, 9000, device.amx, (error) => {
          if (error) {
            logError(
              `A04 AMX 릴레이 전체 켜기 - ${device.name} - ${error}`,
              'SERVER'
            )
            throw error
          }
          udp.close()
        })
      }
    }
  } catch (error) {
    logError(`A04 AMX 릴레이 전체 켜기 - ${error}`, 'SERVER')
  }
}
// A05 All off
const fnAmxAllOff = async () => {
  try {
    const devices = await dbQsysFindAll({})
    for (let device of devices) {
      if (device.amx) {
        const udp = dgram.createSocket('udp4')
        // device.ZoneStatus에서 Zone만 추출
        const Zones = device.ZoneStatus.map((zone) => zone.Zone)
        console.log(Zones)
        udp.send(`#off,${Zones.join(',')}!`, 9000, device.amx, (error) => {
          if (error) {
            logError(
              `A05 AMX 릴레이 전체 켜기 - ${device.name} - ${error}`,
              'SERVER'
            )
            throw error
          }
          udp.close()
        })
      }
    }
  } catch (error) {
    logError(`A05 AMX 릴레이 전체 끄기 - ${error}`, 'SERVER')
  }
}

module.exports = {
  fnAmxesRelayOn,
  fnAmxRelayOn,
  fnAmxRelayOff,
  fnAmxAllOn,
  fnAmxAllOff
}
