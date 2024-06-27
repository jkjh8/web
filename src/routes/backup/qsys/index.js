const express = require('express')
const { logError } = require('@logger')
const {
  dbQsysMake,
  dbQsysUpdate,
  dbQsysRemove,
  dbQsysBulkWrite
} = require('@api/qsys')

const router = express.Router()

// BQ01 post
router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbQsysMake({ ...req.body }) })
  } catch (error) {
    logError(`BQ01 QSYS 정보 동기화 ${error}`, 'SERVER')
  }
})

// BQ02 update
router.put('/', async (req, res) => {
  try {
    const { key, value } = req.body
    res.status(200).json({
      result: true,
      data: await dbQsysUpdate(key, value)
    })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BQ02 QSYS 정보 동기화 ${error}`, 'SERVER')
  }
})

// BQ03 delete
router.delete('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbQsysRemove(req.body.id) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BQ03 QSYS 정보 동기화 ${error}`, 'SERVER')
  }
})

router.put('/bulk', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbQsysBulkWrite(req.body.arr) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BQ04 QSYS 정보 동기화 ${error}`, 'SERVER')
  }
})

module.exports = router
