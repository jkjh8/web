const express = require('express')
const { dbSchFind } = require('@db/schedule')
const moment = require('moment')

const router = express.Router()

// Define your routes here
router.get('/', async (req, res) => {
  try {
    const date = moment()
    const weekday = date.day()
    const toDay = date.format('YYYY-MM-DD')
    console.log(date, weekday, toDay)
    const schedule = await dbSchFind({
      $or: [{ date: toDay }, { repeat: 'everyDay' }, { weekDays: weekday }]
    })
    res.json(schedule)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

module.exports = router
