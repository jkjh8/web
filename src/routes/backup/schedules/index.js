const express = require('express')
const logError = require('@logger')
const { dbSchMake, dbSchUpdate, dbSchRemoveById } = require('@api/schedule')

const router = express.Router()

// BS01 post
router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbSchMake({ ...req.body }) })
  } catch (error) {
    logError(`BS01 스케줄 정보 동기화 ${error}`, 'SERVER')
  }
})

// BS02 update
router.put('/', async (req, res) => {
  try {
    const { key, value } = req.body
    res.status(200).json({
      result: true,
      data: await dbSchUpdate(key, value)
    })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BS02 스케줄 정보 동기화 ${error}`, 'SERVER')
  }
})

// BS03 delete
router.delete('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbSchRemoveById(req.body.id) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BS03 스케줄 정보 동기화 ${error}`, 'SERVER')
  }
})

module.exports = router
