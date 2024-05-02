const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema(
  {
    idx: String,
    user: String,
    Mode: String,
    MaxPageTime: Number,
    Station: { type: Number, default: 1 },
    Priority: { type: Number, default: 3 },
    file: String,
    devices: [
      {
        deviceId: String,
        Zones: Array,
        PageID: Number,
        State: String,
        SubState: String,
        Message: String
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Page', pageSchema)
