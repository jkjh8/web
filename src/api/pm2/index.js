const pm2 = require('pm2')
const { gStatus } = require('@src/defaultVal.js')
const { logError } = require('@logger')
// connect to pm2
let neighborIds = []

const initPM2IPC = () => {
  pm2.connect(function () {
    pm2.list((err, list) => {
      if (err) {
        console.error(err)
      }
      for (let item of list) {
        if (
          item.name == 'web' &&
          item.pm2_env.INSTANCE_ID !== undefined &&
          item.pm2_env.INSTANCE_ID != process.env.INSTANCE_ID
        ) {
          neighborIds.push(item.pm_id)
        }
      }
    })

    pm2.launchBus(function (err, bus) {
      bus.on('process:msg', function (packet) {
        try {
          if (neighborIds.includes(packet.process.pm_id))
            switch (packet.data.type) {
              case 'setup':
                for (let key in packet.data.data) {
                  gStatus[key] = packet.data.data[key]
                }
                // console.log('gStatus:', gStatus)
                break
              case 'broadcast':
                // broadcast
                break
              case 'qsys':
                // qsys
                break
              default:
                break
            }
        } catch (error) {
          logError(`PM2IPC - ${error}`, 'SERVER')
        }
        // console.log('Message from neighbor:', packet)
      })
    })
  })
  // recive message from process
}

const fnSendMessagePM2 = async (data) => {
  process.send({
    type: 'process:msg',
    data: data
  })
}

module.exports = {
  initPM2IPC,
  fnSendMessagePM2
}
