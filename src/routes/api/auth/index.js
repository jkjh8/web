const path = require('path')
const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { dbUserMake, dbUserFindOneNonePass, dbUserExists } = require('@db/user')
const uniqueId = require('@api/utils/uniqueId')
const { isLoggedIn } = require('@api/user')
const { fnMakeFolder } = require('@api/files')
const { logInfo, logError } = require('@logger')

const router = express.Router()

// AH01 사용자 정보 조회 및 토큰 갱신
router.get('/', isLoggedIn, async (req, res) => {
  try {
    let token = null
    const currentTime = Math.floor(Date.now() / 1000)
    // 토큰 만료 1시간 전에 갱신
    if (currentTime - req.user.iat < 6000) {
      const user = req.user
      delete user.userPassword
      delete user._id
      token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
        expiresIn: '3h'
      })
    }
    // 토큰이 있을 경우 토큰을 포함하여 응답
    res.status(200).json({ result: true, user: req.user, token })
  } catch (error) {
    res.status(500).json({ result: false, user: null, error: error })
  }
})

// AH02 로그인
router.post('/', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    // 에러 발생 시 500 상태 코드와 에러 정보를 응답
    if (err) return res.status(500).json({ err, info })
    // 사용자가 없을 경우 401 상태 코드와 에러 정보를 응답
    if (!user) return res.status(401).json({ err, info })
    // 사용자 정보를 기반으로 JWT 토큰 생성
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
      expiresIn: '3h'
    })

    logInfo(
      `AH02 사용자 로그인: ${user.email} - ${
        req.connectAddress ?? 'Unknown Address'
      }`,
      'SERVER'
    )

    // 성공적으로 로그인한 경우 200 상태 코드와 사용자 정보 및 토큰을 응답
    res.status(200).json({ result: true, user, token })
  })(req, res, next)
})

// AH03 회원가입
router.post('/signup', async (req, res) => {
  try {
    const { name, email, userPassword } = req.body
    const salt = bcrypt.genSaltSync(10)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    // 슈퍼 사용자 생성
    if (email === 'superuser@superuser.com') {
      await dbUserMake({
        name: 'superuser',
        email: 'superuser@superuser.com',
        userPassword: bcrypt.hashSync('superuser', salt),
        isAdmin: true,
        folder: uniqueId(16),
        permitAddress: ip
      })
      logInfo(`AH03 슈퍼 사용자 생성 - ${ip ?? 'Unknown Address'}`, 'SERVER')
    } else {
      // 일반 사용자 생성
      await dbUserMake({
        name: name,
        email: email,
        userPassword: bcrypt.hashSync(userPassword, salt),
        folder: uniqueId(16),
        permitAddress: ip
      })
      logInfo(
        `AH03 사용자 계정 생성 - ${email} - ${ip ?? 'Unknown Address'}`,
        'SERVER'
      )
    }
    // 사용자 폴더 생성
    fnMakeFolder(path.join(gStatus.mediaFolder, email))
    // 사용자 생성 성공 시 200 상태 코드와 결과를 응답
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`AH03 사용자 계정 생성 ${error}`, 'SERVER')
    res.status(500).json({ result: false, error })
  }
})

// AH04 이메일 중복 체크
router.get('/exists_email', async (req, res) => {
  try {
    const { email } = req.query
    res.status(200).json({ result: true, user: await dbUserExists({ email }) })
  } catch (error) {
    logError(`AH04 이메일 중복 체크 - ${error}`, 'SERVER')
    res.status(500).json({ return: false, error })
  }
})

// AH05 로그아웃
router.get('/signout', isLoggedIn, async (req, res) => {
  try {
    logInfo(
      `사용자 로그아웃: ${req.user.email} - ${
        req.connectAddress ?? 'Unknown Address'
      }`,
      'SERVER'
    )
  } catch (error) {
    logError(`AH05 사용자 로그아웃 - ${req.user.email} - ${error}`, 'SERVER')
  }
})

module.exports = router
