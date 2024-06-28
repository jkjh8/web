const Barix = require('@db/models/barix')
const { fnBackupRequest } = require('../../api/backup')

module.exports = {
  dbBarix: Barix,
  dbBarixMake: async (obj) => {
    await Barix.create({ ...obj })
    // backup
    await fnBackupRequest('/backup/barix', obj, 'POST')
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
    await Barix.findOneAndUpdate(filer, value, {
      new: false,
      upsert: true
    })
    // backup
    await fnBackupRequest('/backup/barix', { filer, value }, 'PUT')
  },
  dbBarixExists: async (obj) => {
    return await Barix.exists(obj)
  },
  dbBarixRemoveById: async (id) => {
    await Barix.findByIdAndDelete(id)
    // backup
    await fnBackupRequest('/backup/barix', { data: { id } }, 'DELETE')
  }
}
