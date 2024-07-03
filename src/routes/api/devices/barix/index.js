const express = require('express')
// logger
const { logInfo, logError } = require('@logger')
// db
const {
  dbBarixFind,
  dbBarixMake,
  dbBarixUpdate,
  dbBarixUpdateBackup,
  dbBarixExists,
  dbBarixRemoveById
} = require('@db/barix')

const router = express.Router()

// RB01 - Barix 장치 관리
router.get('/', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, devices: await dbBarixFind() })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RB01 Barix 데이터 수집 ${error}`, email)
  }
})

// RB02 - Barix 장치 추가
router.post('/', async (req, res) => {
  const { email } = req.user
  try {
    const { name, ipaddress, deviceId } = req.body
    // 데이터베이스 추가
    await dbBarixMake({ ...req.body })
    // add event log
    logInfo(
      `RB02 Barix 장치 추가 ${name}:${ipaddress}-${deviceId}`,
      req.user.email
    )
    // await qsysDeviceSend('devices')
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RB02 Barix 장치 추가 ${error}`, email)
  }
})

// RB03 - Barix 장치 수정
router.put('/', async (req, res) => {
  const { email } = req.user
  try {
    const { _id, name, ipaddress } = req.body
    const key = { _id }
    const value = { name, ipaddress }
    res
      .status(200)
      .json({ result: true, data: await dbBarixUpdateBackup(key, value) })
    // 로그
    logInfo(`RB03 Barix 장치 수정 ${name}:${ipaddress}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RB03 Barix 장치 수정 ${error}`, email)
  }
})

// RB04 - Barix 장치 삭제
router.delete('/', async (req, res) => {
  const { email } = req.user
  try {
    const { _id, name, ipaddress, deviceId } = req.body
    res.status(200).json({ result: true, data: await dbBarixRemoveById(_id) })
    logInfo(`RB04 Barix 장치 삭제 ${name}:${ipaddress}-${deviceId}`, email)
    // await qsysDeviceSend('devices')
  } catch (error) {
    logError(`RB04 Barix 장치 삭제 ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// RB05 - Barix 장치 존재 여부
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
