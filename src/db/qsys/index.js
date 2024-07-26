const Qsys = require('@db/models/qsys')
const { logError } = require('@logger')
const { fnBackupRequest } = require('@api/backup')

//DQ01
const dbQsysMake = async (obj) => {
  await Qsys.create({ ...obj })
  // backup
  fnBackupRequest('/backup/qsys', obj, 'POST')
}

//DQ02
const dbQsysFindAll = async (obj) => {
  return await Qsys.find(obj).populate(
    'ZoneStatus.destination',
    'name idx deviceId ipaddress status streamurl'
  )
}
//DQ03
const dbQsysFind = async (args) => {
  return await Qsys.find({ ...args })
}
// DQ04
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
// DQ05
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

//DQ06
const dbQsysBulkWrite = async (arr) => {
  await Qsys.bulkWrite(arr)
  // backup
  fnBackupRequest('/backup/qsys/bulk', { arr }, 'PUT')
}

//DQ07
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
// DQ08
const dbQsysUpdateBackup = async (filter, value) => {
  await Qsys.findOneAndUpdate(filter, value, { new: true, upsert: true })
  fnBackupRequest('/backup/qsys', { filter, value }, 'PUT')
}
//DQ09
const dbQsysRemove = async (id) => {
  await Qsys.findByIdAndDelete(id)
  // backup
  fnBackupRequest('/backup/qsys', { data: { id } }, 'DELETE')
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
  dbQsysUpdateBackup,
  dbQsysExists,
  dbQsysRemove,
  dbQsysPageUpdate
}
