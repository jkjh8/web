const passport = require('passport')
const LocalStrategy = require('passport-local')
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt')
const bcrypt = require('bcrypt')
const { dbUserFindOne } = require('@db/user')

const cookieExtrator = (req) => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies['jwt']
  }
  return token
}

module.exports = () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: cookieExtrator,
        secretOrKey: process.env.JWT_SECRET_KEY
      },
      async (jwtPayload, done) => {
        try {
          const { user } = jwtPayload
          if (user) {
            return done(null, user)
          }
          return done(null, false, {
            message: '사용자를 찾을 수 없습니다. 이메일을 확인해 주세요'
          })
        } catch (error) {
          done(error)
        }
      }
    )
  )
  // passport.serializeUser((user, done) => {
  //   console.log(user)
  //   done(null, user)
  // })
  // passport.deserializeUser(async (user, done) => {
  //   try {
  //     return done(null, await dbUserFindOne({ email: user.email }))
  //   } catch (error) {
  //     return done(error, null)
  //   }
  // })
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'userPassword' },
      async (email, password, done) => {
        try {
          const user = await dbUserFindOne({ email: email })
          // not find user email
          if (!user)
            return done(null, false, {
              message: '사용자를 찾을 수 없습니다. 이메일을 확인해 주세요'
            })
          // compare password and hash
          if (bcrypt.compare(password, user.userPassword)) {
            // seccess login db update
            user.numberOfLogins++
            user.loginAt = Date.now()
            await user.save()
            // user data except password
            const userExtPass = { ...user._doc }
            delete userExtPass.userPassword
            delete userExtPass._id

            return done(null, userExtPass, { message: '로그인 성공' })
          }
          // password not match
          return done(null, false, {
            message: '비밀번호가 일치 하지 않습니다. 다시 확인해 주세요'
          })
        } catch (err) {
          // some error from server
          return done(err, null, {
            message: '서버 오류가 발생했습니다. 잠시후 다시 시도해 주세요.'
          })
        }
      }
    )
  )
}
