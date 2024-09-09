const { gStatus } = require('@src/defaultVal.js')
function fnWaitRelayOnTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, gStatus.relayOnTime * 1000)
  })
}

module.exports = { fnWaitRelayOnTime }
