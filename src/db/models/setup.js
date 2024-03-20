const mongoose = require('mongoose')

const setupSchema = new mongoose.Schema(
  {
    key: String,
    value: String,
    valueNum: Number,
    valueBoolean: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Setup', setupSchema)
