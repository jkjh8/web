exports.initIO = (io) => {
  let client = io.of('/client')
  let bridge = io.of('/qsys')
  let scheduler = io.of('/scheduler')

  require('@io/client')(client)
  require('@io/bridge')(bridge)
  require('@io/scheduler')(scheduler)

  // return
  exports.io = io
  exports.client = client
  exports.bridge = bridge
  exports.scheduler = scheduler
}
