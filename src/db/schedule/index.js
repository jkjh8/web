const Sch = require('@db/models/schedule')
const moment = require('moment')
const { fnBackupRequest } = require('@api/backup')

module.exports = {
  dbSch: Sch,
  dbSchMake: async (obj) => {
    await Sch.create({ ...obj })
    fnBackupRequest('/backup/schedules', obj, 'POST')
  },
  dbSchFind: async (obj) => {
    return await Sch.find({ ...obj }).sort({ time: 1 })
  },
  dbSchFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Sch.findOne(obj)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => reject(err))
    })
  },
  dbSchUpdate: async (filter, value) => {
    await Sch.findOneAndUpdate(filter, value, {
      new: true,
      upsert: true
    })
    fnBackupRequest('/backup/schedules', { filter, value }, 'PUT')
  },
  dbSchRemoveById: async (id) => {
    await Sch.findByIdAndDelete(id)
    fnBackupRequest('/backup/schedules', { data: { id } }, 'DELETE')
  },
  dbSchRemoveByUser: async (user) => {
    await Sch.deleteMany({ user })
    fnBackupRequest('/backup/schedules/user', { data: { user } }, 'DELETE')
  },
  dbSchFindToday: async () => {
    const date = moment()
    const weekday = date.day()
    const toDay = date.format('YYYY-MM-DD')
    return await Sch.find({
      $or: [
        { $and: [{ repeat: 'once' }, { date: toDay }] },
        { repeat: 'everyDay' },
        { $and: [{ repeat: 'everyWeek' }, { weekDays: { $in: weekday } }] },
        { $and: [{ repeat: 'workDays' }, { weekDays: { $in: weekday } }] }
      ]
    }).sort({ time: 1 })
  }
}
