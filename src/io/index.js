exports.initIO = (io) => {
  let client = io.of('/client')
  let bridge = io.of('/bridge')

  require('@io/client')(client)
  require('@io/bridge')(bridge)
  // return
  exports.io = io
  exports.client = client
  exports.bridge = bridge
}
