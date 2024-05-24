const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema(
  {
    name: String,
    idx: String,
    user: String,
    repeat: String,
    mode: String,
    date: String,
    color: String,
    time: String,
    weekDays: Array,
    file: Object,
    active: { type: Boolean, default: true },
    devices: Array,
    zones: Array
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
