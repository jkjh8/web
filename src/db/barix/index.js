const Barix = require('@db/models/barix')

module.exports = {
  dbBarixMake: async (obj) => {
    return await Barix.create({ ...obj })
  },
  dbBarixFind: async (obj) => {
    return await Barix.find({ ...obj })
  },
  dbBarixFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Barix.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => reject(err))
    })
  },
  dbBarixUpdate: async (filer, value) => {
    return await Barix.findOneAndUpdate(filer, value, {
      new: false,
      upsert: true
    })
  },
  dbBarixExists: async (obj) => {
    return await Barix.exists(obj)
  },
  dbBarixRemoveById: async (id) => {
    return await Barix.findByIdAndDelete(id)
  }
}
