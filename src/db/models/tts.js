const mongoose = require('mongoose')

const ttsSchema = new mongoose.Schema(
  {
    voice: String,
    user: String,
    text: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('TTS', ttsSchema)
