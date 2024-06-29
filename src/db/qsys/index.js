const Qsys = require('@db/models/qsys')
const { logError } = require('@logger')
const { fnBackupRequest } = require('@api/backup')

const dbQsysMake = async (obj) => {
  await Qsys.create({ ...obj })
  // backup
  await fnBackupRequest('/backup/qsys', obj, 'POST')
}

const dbQsysFindAll = async () => {
  return await Qsys.find().populate(
    'ZoneStatus.destination',
    'name idx deviceId ipaddress status streamurl'
  )
}

const dbQsysFind = async (args) => {
  return await Qsys.find({ ...args })
}

const dbQsysFindOne = (obj) => {
  return new Promise((resolve, reject) => {
    Qsys.findOne(obj)
      .then((doc) => {
        resolve(doc)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const dbQsysFindOnePop = async (args) => {
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
}

const dbQsysBulkWrite = async (arr) => {
  await Qsys.bulkWrite(arr)
  // backup
  await fnBackupRequest('/backup/qsys/bulk', { arr }, 'PUT')
}

const dbQsysUpdate = async (filer, value) => {
  await Qsys.findOneAndUpdate(filer, value, {
    new: true,
    upsert: true
  })
  // backup
  // await fnBackupRequest('/backup/qsys', { filter, value }, 'PUT')
}

const dbQsysExists = async (obj) => {
  return await Qsys.exists(obj)
}

const dbQsysRemove = async (id) => {
  await Qsys.findByIdAndDelete(id)
  // backup
  await fnBackupRequest('/backup/qsys', { data: { id } }, 'DELETE')
}

const dbQsysPageUpdate = async (devices, idx) => {
  await Promise.all(
    devices.map(async (item) => {
      await Qsys.findOneAndUpdate(
        { deviceId: item.deviceId },
        { $push: { PageStatus: { idx } } }
      )
    })
  )
}

module.exports = {
  dbQsys: Qsys,
  dbQsysMake,
  dbQsysFindAll,
  dbQsysFind,
  dbQsysFindOne,
  dbQsysFindOnePop,
  dbQsysBulkWrite,
  dbQsysUpdate,
  dbQsysExists,
  dbQsysRemove,
  dbQsysPageUpdate
}
