const express = require('express')
const { logInfo, logDebug, logError } = require('@logger')

const {
  dbQsysMake,
  dbQsysFind,
  dbQsysFindAll,
  dbQsysUpdate,
  dbQsysExists,
  dbQsysRemove
} = require('@db/qsys')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ result: true, devices: await dbQsysFindAll() })
  } catch (error) {
    logError(`Qsys 장치 검색 오류 ${error}`, 'server', 'qsys')
  }
})

router.get('/gainstep', async (req, res) => {})

module.exports = router
