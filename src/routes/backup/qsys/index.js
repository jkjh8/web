const express = require('express')
const { logInfo, logError } = require('@logger')
const {
  dbQsys,
  dbQsysMake,
  dbQsysUpdate,
  dbQsysRemove,
  dbQsysBulkWrite
} = require('@db/qsys')

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

// BQ04 bulk update
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

// BQ05 make many
router.post('/many', async (req, res) => {
  try {
    const { qsys } = req.body
    // qsys array를 받아서 개별로 db 문서 생성
    for (let i = 0; i < qsys.length; i++) {
      await dbQsys.create(qsys[i])
    }
    res.status(200).json({ result: true })

    logInfo('BQ05 QSYS 정보 동기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BQ05 QSYS 정보 동기화 ${error}`, 'SERVER')
  }
})

// BQ06 reset Qsys db
router.delete('/reset', async (req, res) => {
  try {
    res.status(200).json({ result: true, data: await dbQsys.deleteMany({}) })
    logInfo('BQ06 QSYS 정보 초기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BQ06 QSYS 정보 초기화 ${error}`, 'SERVER')
  }
})

module.exports = router
