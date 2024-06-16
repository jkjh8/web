const express = require('express')

const { dbBarixMake, dbBarixUpdate, dbBarixRemoveById } = require('@api/barix')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, device: await dbBarixMake({ ...req.body }) })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`기기 백업 오류 ${error.response.message}`, 'server', 'device')
  }
})

router.put('/', async (req, res) => {
  try {
    const { key, value } = req.body
    res
      .status(200)
      .json({ result: true, value: await dbBarixUpdate({ key }, { ...value }) })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`기기 백업 오류 ${error.response.message}`, 'server', 'device')
  }
})

router.delete('/', async (req, res) => {
  try {
    const { id } = req.body
    await dbBarixRemoveById(id)
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
  }
})

module.exports = router
