const express = require('express')
const logError = require('@logger')
const {
  dbSch,
  dbSchMake,
  dbSchUpdate,
  dbSchRemoveById
} = require('@db/schedule')

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

// BS04 Make Many
router.post('/many', async (req, res) => {
  try {
    const { schedules } = req.body
    // schedules array를 받아서 개별로 db 문서 생성
    for (let i = 0; i < schedules.length; i++) {
      await dbSchMake(schedules[i])
    }
    res.status(200).json({ result: true })
    logInfo('BS04 스케줄 정보 동기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BS04 스케줄 정보 동기화 ${error}`, 'SERVER')
  }
})

// BS05 스케줄 초기화
router.delete('/reset', async (req, res) => {
  try {
    res.status(200).json({ result: true, data: await dbSch.deleteMany({}) })
    logInfo('BS05 스케줄 정보 초기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BS05 스케줄 정보 초기화 ${error}`, 'SERVER')
  }
})

module.exports = router
