const session = require('express-session')
const MongoStore = require('connect-mongo')
module.exports = session({
  secret: process.env.SESSION_PASS,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'None'
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_ADDR // 주소변경
  })
})
