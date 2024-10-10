const mongoose = require('mongoose')

const ttsSchema = new mongoose.Schema(
  {
    voice: Object,
    user: String,
    text: String,
    rate: Number,
    volume: Number,
    speed: Number,
    pitch: Number
  },
  { timestamps: true }
)

module.exports = mongoose.model('TTS', ttsSchema)
