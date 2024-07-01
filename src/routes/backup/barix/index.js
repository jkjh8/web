const express = require('express')
const { logError } = require('@logger')
const {
  dbBarix,
  dbBarixMake,
  dbBarixUpdate,
  dbBarixRemoveById
} = require('@db/barix')

const router = express.Router()

// BB01 post
router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbBarixMake({ ...req.body }) })
  } catch (error) {
    logError(`BB01 바릭스 정보 동기화 ${error}`, 'SERVER')
  }
})

// BB02 update
router.put('/', async (req, res) => {
  try {
    const { key, value } = req.body
    res.status(200).json({
      result: true,
      data: await dbBarixUpdate(key, value)
    })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BB02 바릭스 정보 동기화 ${error}`, 'SERVER')
  }
})

// BB03 delete
router.delete('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbBarixRemoveById(req.body.id) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BB03 바릭스 정보 동기화 ${error}`, 'SERVER')
  }
})

// BB04 Make Many
router.post('/many', async (req, res) => {
  try {
    const { barixs } = req.body
    // barixs array를 받아서 개별로 db 문서 생성
    for (let i = 0; i < barixs.length; i++) {
      await dbBarix.create(barixs[i])
    }
    res.status(200).json({ result: true })

    logInfo('BB04 바릭스 정보 동기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BB04 바릭스 정보 동기화 ${error}`, 'SERVER')
  }
})

// BB05 Reset Barix db
router.delete('/reset', async (req, res) => {
  try {
    res.status(200).json({ result: true, data: await dbBarix.deleteMany({}) })
    logInfo('BB05 바릭스 정보 초기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BB05 바릭스 정보 초기화 ${error}`, 'SERVER')
  }
})

module.exports = router
