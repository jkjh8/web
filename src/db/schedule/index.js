const Sch = require('@db/models/schedule')

module.exports = {
  dbSchMake: async (obj) => {
    return await Sch.create({ ...obj })
  },
  dbSchFind: async (obj) => {
    return await Sch.find({ ...obj }).sort({ time: 1 })
  },
  dbSchFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Sch.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => reject(err))
    })
  },
  dbSchUpdate: async (filter, value) => {
    return await Sch.findOneAndUpdate(filter, value, {
      new: true,
      upsert: true
    })
  },
  dbSchRemoveById: async (id) => {
    return await Sch.findByIdAndDelete(id)
  }
}
