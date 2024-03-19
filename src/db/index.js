const mongoose = require('mongoose')

console.log(process.env.MONGODB_ADDR)
mongoose
  .connect(process.env.MONGODB_ADDR)
  .then(() => {
    console.log('connect database')
  })
  .catch((err) => console.error(err))
