const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { dbUserMake, dbUserFindOneNonePass, dbUserExists } = require('@db/user')
const uniqueId = require('@api/utils/uniqueId')
const { isLoggedIn } = require('@api/user')

const { logInfo, logError } = require('@logger')

const router = express.Router()

router.get('/', isLoggedIn, async (req, res) => {
  try {
    const user = await dbUserFindOneNonePass({ email: req.user.email })
    let token = null
    const currentTime = Math.floor(Date.now() / 1000)
    if (currentTime - req.user.iat < 6000) {
      token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
      })
    }
    if (token) {
      res.status(200).json({ result: true, user, token })
    } else {
      res.status(200).json({ result: true, user })
    }
  } catch (error) {
    res.status(500).json({ result: false, user: null, error: error })
  }
})

// 로그인
router.post('/', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) return res.status(500).json({ err, info })
    if (!user) return res.status(401).json({ err, info })
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1d'
    })
    res.status(200).json({ result: true, user, token })
  })(req, res, next)
})

router.post('/signup', async (req, res) => {
  try {
    const { name, email, userPassword } = req.body
    const salt = bcrypt.genSaltSync(10)
    if (email === 'superuser@superuser.com') {
      await dbUserMake({
        name: 'superuser',
        email: 'superuser@superuser.com',
        userPassword: bcrypt.hashSync('superuser', salt),
        isAdmin: true,
        folder: uniqueId(16)
      })
      logInfo('슈퍼 사용자 생성', 'server', 'user')
    } else {
      await dbUserMake({
        name: name,
        email: email,
        userPassword: bcrypt.hashSync(userPassword, salt),
        folder: uniqueId(16)
      })
      logInfo(`사용자 계정 생성: ${email}`, 'server', 'user')
    }
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`사용자 계정 생성 실패: ${error}`, 'server', 'user')
    res.status(500).json(error)
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
      res
        .clearCookie('jwt', { sameSite: 'none', secure: true })
        .status(200)
        .json({ result: true, user: null })
    } else {
      res.status(401).json({ error: '잘못된 토큰' })
    }
  } catch (error) {
    logError(`사용자 로그아웃 오류: ${req.user.email} ${err}`, 'server', 'user')
  }
})

module.exports = router
