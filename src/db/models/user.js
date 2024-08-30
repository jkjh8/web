const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    userPassword: { type: String, bcrypt: true },
    isAdmin: { type: Boolean, default: false },
    em: { type: Boolean, default: false },
    level: { type: Number, default: 0 },
    zones: Array,
    numberOfLogins: { type: Number, default: 0 },
    numberOfTtsCalls: { type: Number, default: 0 },
    numberOfPaging: { type: Number, default: 0 },
    numberOfSchedule: { type: Number, default: 0 },
    numberOfScheduleCall: { type: Number, default: 0 },
    loginAt: { type: Date, default: new Date() },
    folder: String,
    socketId: String,
    voice: String,
    permitAddress: String,
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
