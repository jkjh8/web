const Logs = require('@db/models/logs')

module.exports = {
  dbLogsMake: async (obj) => {
    return await Logs.create({ ...obj })
  },
  dbLogsFind: async (obj) => {
    return await Logs.find({ ...obj })
  },
  dbLogsFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Logs.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => reject(err))
    })
  },
  dbLogsUpdate: async (filer, value) => {
    return await Logs.findOneAndUpdate(filer, value, {
      new: false,
      upsert: true
    })
  },
  dbLogsExists: async (obj) => {
    return await Logs.exists(obj)
  },
  dbLogsRemoveById: async (id) => {
    return await Logs.findByIdAndDelete(id)
  }
}
