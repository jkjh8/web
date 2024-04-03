const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { dbUserMake, dbUserFind, dbUserExists } = require('@db/user')
const uniqueId = require('@api/utils/uniqueId')
const { isLoggedIn } = require('@api/user')

const { logInfo, logWarn, logDebug, logError } = require('@logger')
const { loggers } = require('winston')

const router = express.Router()

router.get('/', isLoggedIn, (req, res) => {
  try {
    const { user } = req
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
      expiresIn: '300s'
    })
    res
      .cookie('jwt', token, { sameSite: 'none', secure: true })
      .status(200)
      .json({ result: true, user })
  } catch (error) {
    res.status(500).json({ result: false, user: null, error: error })
  }
})

router.post('/', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) return res.status(500).json({ err, info })
    if (!user) return res.status(401).json({ err, info })
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
      expiresIn: '300s'
    })
    res
      .cookie('jwt', token, { sameSite: 'none', secure: true })
      .status(200)
      .json({ result: true, user })
  })(req, res, next)
})

router.post('/signup', async (req, res) => {
  try {
    const { userName, userEmail, userPass } = req.body.auth
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(userPass, salt)
    await dbUserMake({
      name: userName,
      email: userEmail,
      userPassword: hash,
      folder: uniqueId(12)
    })
    logInfo(`사용자 계정 생성: ${userEmail}`, 'server', 'user')
    res.status(200).json({ result: true })
  } catch (error) {
    console.log(error)
    logError(`사용자 계정 생성 실패: ${error}`, 'server', 'user')
    res.status(500).json(err)
  }
})

router.get('/exists_email', async (req, res) => {
  try {
    const { email } = req.query
    res.status(200).json({ result: true, user: await dbUserExists({ email }) })
  } catch (err) {
    logError(`이메일 중복 체크 오류: ${err}`, 'server', 'user')
    res.status(500).json(err)
  }
})

router.get('/signout', isLoggedIn, async (req, res) => {
  try {
    // console.log(req.user)
    if (req.cookies['jwt']) {
      // logInfo(`사용자 로그아웃: ${req.user.email}`)
      res.clearCookie('jwt').status(200).json({ result: true, user: null })
    } else {
      res.status(401).json({ error: '잘못된 토큰' })
    }
  } catch (error) {
    logError(`사용자 로그아웃 오류: ${req.user.email} ${err}`, 'server', 'user')
  }
})

module.exports = router
