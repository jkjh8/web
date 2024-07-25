function fnWaitRelayOnTime() {
  return new Promise((resolve) => {
    console.log(gStatus.relayOnTime)
    setTimeout(() => {
      resolve()
    }, gStatus.relayOnTime * 1000)
  })
}

module.exports = { fnWaitRelayOnTime }
