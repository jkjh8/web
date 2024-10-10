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
    RetryCount: Number,
    MaxPageTime: Number,
    file: Object,
    Mode: { type: String, default: 'message' },
    Station: { type: Number, default: 1 },
    Priority: { type: Number, default: 3 },
    active: { type: Boolean, default: true },
    sync: { type: Boolean, default: false },
    devices: Array,
    zones: Array,
    description: String,
    duration: Number,
    MaxPageTime: Number,
    Station: { type: Number, default: 3 },
    tts: { type: mongoose.Types.ObjectId, ref: 'TTS' }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
