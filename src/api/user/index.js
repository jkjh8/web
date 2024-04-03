const passport = require('passport')

module.exports = {
  isLoggedIn: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) return next(err)
      if (!user)
        return res
          .status(401)
          .json({ result: false, user: null, message: 'Unauthorized' })
      req.user = user
      next()
    })(req, res, next)
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
  }
}
