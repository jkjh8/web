const Barix = require('@db/models/barix')
const { fnMake, fnDelete } = require('@api/backup/devices/barix')
module.exports = {
  dbBarixMake: async (obj) => {
    await Barix.create({ ...obj })
    await fnMake({ ...obj })
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
    await Barix.findByIdAndDelete(id)
    await fnDelete(id)
  }
}
