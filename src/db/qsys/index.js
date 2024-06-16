const Qsys = require('@db/models/qsys')
module.exports = {
  dbQsysMake: async (obj) => {
    // backup function

    // make db
    return await Qsys.create({ ...obj })
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
    return await Qsys.bulkWrite(arr)
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
