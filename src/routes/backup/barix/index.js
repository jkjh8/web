const express = require('express')
const { logError } = require('@logger')
const { dbBarixMake, dbBarixUpdate, dbBarixRemoveById } = require('@api/barix')

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

module.exports = router
