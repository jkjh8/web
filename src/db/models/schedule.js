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
    Preamble: String,
    file: Object,
    Mode: { type: String, default: 'message' },
    Station: { type: Number, default: 1 },
    Priority: { type: Number, default: 3 },
    active: { type: Boolean, default: true },
    sync: { type: Boolean, default: false },
    devices: Array,
    zones: Array,
    description: String,
    start: String,
    end: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
