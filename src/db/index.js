const mongoose = require('mongoose')
const { logInfo } = require('@logger')
mongoose
  .connect(`mongodb://${process.env.MONGODB_ADDR}/bs`)
  .then(() => {
    logInfo('데이터 베이스가 연결되었습니다.', 'server', 'db')
  })
  .catch((err) => console.error(err))
