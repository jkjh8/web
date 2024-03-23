const { Server } = require('socket.io')
const middleware = require('@api/middleware/session')

exports.initIO = (server) => {
  let io = new Server(server, {
    cors: {
      origin: (origin, cb) => {
        cb(null, origin)
      },
      maxHttpBufferSize: 1e8, // file transfer limit 100MB
      credentials: true
    }
  })

  let client = io.of('/client')
  client.use((socket, next) => {
    middleware(socket.request, {}, next)
  })
  let bridge = io.of('/bridge')

  require('@io/client')(client)
  require('@io/bridge')(bridge)
  exports.io = io
  exports.client = client
  exports.bridge = bridge
}
