exports.initIO = (io) => {
  let client = io.of('/client')

  require('@io/client')(client)

  // return
  exports.io = io
  exports.client = client
}
