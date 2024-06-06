const Sch = require('@db/models/schedule')
const moment = require('moment')

module.exports = {
  dbSchMake: async (obj) => {
    return await Sch.create({ ...obj })
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
    return await Sch.findOneAndUpdate(filter, value, {
      new: true,
      upsert: true
    })
  },
  dbSchRemoveById: async (id) => {
    return await Sch.findByIdAndDelete(id)
  },
  dbSchFindToday: async () => {
    const date = moment()
    const weekday = date.day()
    const toDay = date.format('YYYY-MM-DD')
    return await Sch.find({
      $or: [{ date: toDay }, { repeat: 'everyDay' }, { weekDays: weekday }]
    }).sort({ time: 1 })
  }
}
