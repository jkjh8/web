const passport = require('passport')
const { dbUserFindOne } = require('@db/user')
const { logWarn } = require('@logger')
module.exports = {
  isLoggedIn: (req, res, next) => {
    passport.authenticate(
      'jwt',
      { session: false },
      async (err, user, info) => {
        if (err) return next(err)
        if (!user)
          return res
            .status(401)
            .json({ result: false, user: null, message: 'Unauthorized' })
        // IP 보안
        if (
          gStatus.blockIp &&
          !req.connectAddress.includes('127.0.0.1') &&
          req.connectAddress &&
          req.connectAddress !== user.permitAddress
        ) {
          logWarn(
            `허가된 IP 주소가 일치하지 않음 - ${req.connectAddress} - ${user.permitAddress}`,
            'SERVER'
          )
          return res.status(403).json({
            result: false,
            user: null,
            message: '허가된 IP 주소가 일치하지 않습니다.'
          })
        }
        req.user = user
        next()
      }
    )(req, res, next)
  },
  isAdmin: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) return next(err)
      if (!user)
        return res
          .status(401)
          .json({ result: false, user: null, message: 'Unauthorized' })
      req.user = user
      if (user.isAdmin) return next()
      res
        .status(403)
        .json({ result: false, user: null, message: '관리자 권한이 없습니다.' })
    })(req, res, next)
  },
  isScheduler: (req, res, next) => {
    if (req.headers.authenticate === process.env.SCHEDULER_PASS) return next()
    res.status(401).json({ result: false, message: 'Unauthorized' })
  },
  isBarix: (req, res, next) => {
    if (req.headers.authenticate === process.env.BARIX_PASS) return next()
    res.status(401).json({ result: false, message: 'Unauthorized' })
  },
  checkAddress: async (req, res, next) => {
    // 호출 당사자 ip 주소 확인
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    req.connectAddress = ip
    if (!gStatus.blockIp) return next()
    if (ip.includes('127.0.0.1')) return next()
    if (await dbUserFindOne({ permitAddress: ip })) return next()
    logWarn(`허가되지 않은 IP 주소 - ${ip}`, 'SERVER')
    res.status(501).json({ result: false, message: '허가되지 않은 IP 주소' })
  }
}
