const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    userPassword: { type: String, bcrypt: true },
    isAdmin: { type: Boolean, default: false },
    level: { type: Number, default: 0 },
    zones: { type: Array },
    numberOfLogins: { type: Number, default: 0 },
    numberOfTtsCalls: { type: Number, default: 0 },
    numberOfPaging: { type: Number, default: 0 },
    numberOfReservation: { type: Number, default: 0 },
    loginAt: { type: Date, default: new Date() },
    folder: { type: String },
    socketId: { type: String },
    pageId: [
      {
        id: String,
        pageId: Number
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
