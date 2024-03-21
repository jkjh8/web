const express = require('express')
const { logInfo, logDebug, logError } = require('@logger')

const { dbBarixFind, dbBarixMake } = require('@db/barix')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ result: true, devices: await dbBarixFind() })
  } catch (error) {
    logError(`Barix 데이터 수집 오류 ${error}`, req.user.email, 'barix')
    res.status(500).json({ result: false, error })
  }
})

router.post('/', async (req, res) => {
  try {
    await dbBarixMake({ ...req.body })
    // add event log
    logEvent(
      `Barix 장치 추가 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'barix'
    )
    // await qsysDeviceSend('devices')
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`Barix 장치 추가 오류 ${error}`, req.user.email, 'barix')
    res.status(500).json({ result: false, error })
  }
})

router.delete('/', async (req, res) => {
  try {
    const r = await barixRemoveById(req.body._id)
    logEvent(
      `Barix 장치 삭제 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'barix'
    )
    // await qsysDeviceSend('devices')
    res.status(200).json({ result: true, data: r })
  } catch (error) {
    logger.error(`Barix 장치 삭제 오류 ${error}`, req.user.email, 'barix')
    res.status(500).json({ result: false, error })
  }
})

router.get('/exists', async (req, res) => {
  try {
    res.status(200).json({ result: await barixExists({ ...req.query.value }) })
  } catch (error) {
    req.status(500).json({ result: false, error })
  }
})

module.exports = router
