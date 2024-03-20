module.exports = function (length) {
  const _sym = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz1234567890'
  let uid = ''
  for (let i = 0; i < length; i++) {
    uid += _sym[parseInt(Math.random() * _sym.length)]
  }
  return uid
}
