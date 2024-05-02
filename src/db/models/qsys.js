const mongoose = require('mongoose')

const qsysSchema = new mongoose.Schema(
  {
    name: String,
    idx: { type: Number, default: 0 },
    deviceId: { type: String, unique: true, required: true },
    ipaddress: { type: String, unique: true },
    connected: { type: Boolean, default: false },
    header: { type: String, default: 'root' },
    EngineStatus: Object,
    ZoneStatus: [
      {
        Active: { type: Boolean, default: false },
        Message: String,
        Priority: Number,
        PriorityName: String,
        Squelch: Boolean,
        Station: Number,
        Zone: Number,
        gain: { type: Number, default: 0 },
        mute: { type: Boolean, default: false },
        name: String,
        destination: {
          type: mongoose.Types.ObjectId,
          ref: 'Barix'
        }
      }
    ],
    PageStatus: [
      {
        idx: String,
        PageID: Number
      }
    ],
    PaConfig: Object,
    ZoneStatusConfigure: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('QSys', qsysSchema)
