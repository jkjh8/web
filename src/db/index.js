const mongoose = require('mongoose')
const { logInfo } = require('@logger')

//DB01
mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDR}`
  )
  .then(() => {
    logInfo('DB01 데이터 베이스가 연결', 'server')
  })
  .catch((err) => console.error(err))
