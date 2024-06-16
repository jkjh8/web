const express = require('express')
const { dbQsysMake, dbQsysUpdate, dbQsysRemove } = require('@api/qsys')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, device: await dbQsysMake({ ...req.body }) })
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
      .json({ result: true, value: await dbQsysUpdate({ key }, { ...value }) })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`기기 백업 오류 ${error.response.message}`, 'server', 'device')
  }
})

router.put('/bulk', async (req, res) => {
  try {
    const { arr } = req.body
    await dbQsysBulkWrite(arr)
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
  }
})

router.delete('/', async (req, res) => {
  try {
    const { id } = req.body
    await dbQsysRemove(id)
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
  }
})

module.exports = router
