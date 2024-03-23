const Setup = require('@db/models/setup')

module.exports = {
  dbSetupFind: async (obj) => {
    return await Setup.find(obj)
  },
  dbSetupFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Setup.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => reject(err))
    })
  },
  dbSetupUpdate: async (filter, value) => {
    return await Setup.findOneAndUpdate(filter, value, {
      upsert: true,
      new: true
    })
  }
}
