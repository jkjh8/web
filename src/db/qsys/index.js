const Qsys = require('@db/models/qsys')

module.exports = {
  dbQsysMake: async (obj) => {
    return await Qsys.create({ ...obj })
  },
  dbQsysFindAll: async () => {
    return await Qsys.find().populate('ZoneStatus.destination')
  },
  dbQsysFind: async () => {
    return await Qsys.find()
  },
  dbQsysFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Qsys.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  dbQsysUpdate: async (filer, value) => {
    return await Qsys.findOneAndUpdate(filer, value, {
      new: true,
      upsert: true
    })
  },
  dbQsysExists: async (obj) => {
    return await Qsys.exists(obj)
  },
  dbQsysRemove: async (id) => {
    return await Qsys.findByIdAndDelete(id)
  }
}
