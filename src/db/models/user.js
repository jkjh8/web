const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    userPassword: { type: String, bcrypt: true },
    isAdmin: { type: Boolean, default: false },
    level: { type: Number, default: 0 },
    zones: Array,
    tts: { type: Number, default: 0 },
    numberOfLogins: { type: Number, default: 0 },
    numberOfTtsCalls: { type: Number, default: 0 },
    numberOfPaging: { type: Number, default: 0 },
    numberOfReservation: { type: Number, default: 0 },
    loginAt: { type: Date, default: new Date() },
    folder: String,
    socketId: String,
    voice: String,
    pageId: [
      {
        id: String,
        PageID: Number
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
