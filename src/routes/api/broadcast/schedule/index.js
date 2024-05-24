const express = require('express')
const axios = require('axios')
const path = require('node:path')
const fs = require('node:fs')
const makeId = require('@api/utils/uniqueId.js')
const {
  dbSchMake,
  dbSchFind,
  dbSchFindOne,
  dbSchUpdate,
  dbSchRemoveById
} = require('@db/schedule')
const { logError, logWarn, logDebug, logInfo } = require('@logger')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { isAdmin, zones } = req.user
    if (isAdmin) {
      res.status(200).json({ result: true, schedules: await dbSchFind() })
    } else {
      res
        .status(200)
        .json({
          result: true,
          schedules: await dbSchFind({ 'devices.deviceId': { $in: zones } })
        })
    }
  } catch (error) {
    logError(`스케줄 찾기 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { email, folder } = req.user
    const schedule = req.body
    await dbSchMake({ ...schedule, user: email, idx: makeId(12) })
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`스케줄 추가 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

router.get('/exists', async (req, res) => {
  try {
    console.log(req.query)
    res.status(200).json({
      result: true,
      schedules: await dbSchFind({
        'time': req.query.time,
        'devices.deviceId': { $in: req.query.devices }
      })
    })
  } catch (error) {
    logError(`스케줄 중복 확인 오류 ${error}`, req.user.email, 'schedule')
  }
})

router.delete('/', async (req, res) => {
  try {
    const { schedule } = req.body
    await dbSchRemoveById(schedule._id)
    logWarn(`스케줄 삭제 ${schedule.name}`, req.user.email, 'schedule')
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`스케줄 삭제 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
