const Tts = require('@db/models/tts')

module.exports = {
  dbTtsMake: async (obj) => {
    return await Tts.create({ ...obj })
  },
  dbTtsFind: async (obj) => {
    return await Tts.find({ ...obj })
  },
  dbTtsFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Tts.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => reject(err))
    })
  },
  dbTtsUpdate: async (filter, value) => {
    return await Tts.findOneAndUpdate(filter, value, {
      new: true,
      upsert: true
    })
  },
  dbTtsRemoveById: async (id) => {
    return await Tts.findByIdAndDelete(id)
  }
}
