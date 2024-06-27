const Qsys = require('@db/models/qsys')
const { fnBackupRequest } = require('@api/backup')

module.exports = {
  dbQsysMake: async (obj) => {
    await Qsys.create({ ...obj })
    // backup
    await fnBackupRequest('/backup/qsys', obj, 'POST')
  },
  dbQsysFindAll: async () => {
    return await Qsys.find().populate(
      'ZoneStatus.destination',
      'name idx deviceId ipaddress status streamurl'
    )
  },
  dbQsysFind: async (args) => {
    return await Qsys.find({ ...args })
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
  dbQsysFindOnePop: async (args) => {
    return new Promise((resolve, reject) => {
      Qsys.findOne(args)
        .populate(
          'ZoneStatus.destination',
          'name idx deviceId ipaddress status streamurl'
        )
        .then((doc) => {
          resolve(doc)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  dbQsysBulkWrite: async (arr) => {
    await Qsys.bulkWrite(arr)
    // backup
    await fnBackupRequest('/backup/qsys/bulk', { arr }, 'PUT')
  },
  dbQsysUpdate: async (filer, value) => {
    await Qsys.findOneAndUpdate(filer, value, {
      new: true,
      upsert: true
    })
    // backup
    await fnBackupRequest('/backup/qsys', { filer, value }, 'PUT')
  },
  dbQsysExists: async (obj) => {
    return await Qsys.exists(obj)
  },
  dbQsysRemove: async (id) => {
    await Qsys.findByIdAndDelete(id)
    // backup
    await fnBackupRequest('/backup/qsys', { data: { id } }, 'DELETE')
  },
  dbQsysPageUpdate: async (devices, idx) => {
    await Promise.all(
      devices.map(async (item) => {
        await Qsys.findOneAndUpdate(
          { deviceId: item.deviceId },
          { $push: { PageStatus: { idx } } }
        )
      })
    )
  }
}
