function fnWaitRelayOnTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, gStatus.relayOnTime)
  })
}

module.exports = { fnWaitRelayOnTime }
