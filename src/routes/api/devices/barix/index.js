const express = require('express')
const { logInfo, logDebug, logError } = require('@logger')

const {
  dbBarixFind,
  dbBarixMake,
  dbBarixUpdate,
  dbBarixExists,
  dbBarixRemoveById
} = require('@db/barix')

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
    logInfo(
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

router.put('/', async (req, res) => {
  try {
    const { _id, name, ipaddress } = req.body
    await dbBarixUpdate({ _id }, { $set: { name, ipaddress } })
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`Barix 장치 수정 오류 ${error}`, req.user.email, 'barix')
    res.status(500).json({ result: false, error })
  }
})

router.delete('/', async (req, res) => {
  try {
    const r = await dbBarixRemoveById(req.body._id)
    logInfo(
      `Barix 장치 삭제 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'barix'
    )
    // await qsysDeviceSend('devices')
    res.status(200).json({ result: true, data: r })
  } catch (error) {
    logError(`Barix 장치 삭제 오류 ${error}`, req.user.email, 'barix')
    res.status(500).json({ result: false, error })
  }
})

router.get('/exists', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: await dbBarixExists({ ...req.query.value }) })
  } catch (error) {
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
