module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.user) return next()
    res
      .status(403)
      .json({ result: false, user: null, message: '로그인 해주세요' })
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) return next()
    res
      .status(403)
      .json({ result: false, user: null, message: '관리자 권한이 없습니다.' })
  }
}
