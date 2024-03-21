module.exports = function (socket, next) {
  const session = socket.request.session
  const token = socket.handshake.auth.token
  if (token) {
    return next()
  }
  if (session && session.passport && session.passport.user) {
    return next()
  }
  socket.emit('Not authenticated')
  next(new Error('Not authenticated'))
}
