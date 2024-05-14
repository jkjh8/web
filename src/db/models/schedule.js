const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema(
  {
    name: String,
    idx: String,
    user: String,
    repeat: String,
    date: String,
    time: String,
    weekday: Array,
    file: Object,
    active: Boolean,
    zones: [{ deviceId, zones }],
    zoneNames: Array
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
