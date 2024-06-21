const mongoose = require('mongoose')
const { logInfo } = require('@logger')
mongoose
  .connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDR}`)
  .then(() => {
    logInfo('데이터 베이스가 연결되었습니다.', 'server', 'db')
  })
  .catch((err) => console.error(err))
