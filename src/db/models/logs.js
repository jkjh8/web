const mongoose = require('mongoose')
const { searchArrToStr, makeSearchField } = require('@api/utils/search')

const logsSchema = new mongoose.Schema(
  {
    level: String,
    levelNum: Number,
    message: String,
    search: String,
    category: String,
    source: String
  },
  { timestamps: true }
)

makeSearchField(logsSchema, 'search', (docs) => {
  const arr = []
  const { level, message, category, source } = docs
  arr.push(level)
  arr.push(message)
  arr.push(category)
  arr.push(source)
  return searchArrToStr(arr)
})

module.exports = mongoose.model('Logs', logsSchema)
