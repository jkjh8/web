const express = require('express')
const { logInfo, logDebug, logError } = require('@logger')
const { fnSADs, fnSCDs, fnSQD, fnSSQD } = require('@api/qsys')
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

router.post('/', async (req, res) => {
  try {
    await dbQsysMake({ ...req.body })
    await fnSADs()
    logDebug(
      `QSYS 장치 추가 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'qsys'
    )
    res.status(200).json({ result: true })
    // add event log
  } catch (error) {
    logError(`QSYS 장치 추가 오류: ${error}`, req.user.email, 'qsys')
    res.status(500).json({ result: false, error })
  }
})

router.get('/exists', async (req, res) => {
  try {
    res.status(200).json({ result: await dbQsysExists({ ...req.query.value }) })
  } catch (error) {
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
