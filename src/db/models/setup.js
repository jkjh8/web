const mongoose = require('mongoose')

const setupSchema = new mongoose.Schema(
  {
    key: String,
    id: String,
    idx: String,
    active: String,
    auto: Boolean,
    connected: Boolean,
    type: String,
    value: String,
    valueNum: Number,
    valueBoolean: Boolean,
    valueArr: Array,
    main: {
      connected: Boolean,
      id: String,
      lastupdate: Date
    },
    backup: {
      connected: Boolean,
      id: String,
      lastupdate: Date
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Setup', setupSchema)
