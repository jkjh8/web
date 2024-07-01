const express = require('express')
const {
  fnSyncUser,
  fnSyncQsys,
  fnSyncBarix,
  fnSyncSchedule
} = require('@api/backup/sync')
const { logInfo, logError } = require('@logger')
const router = express.Router()

// RBB01 사용자 정보 동기화
router.get('/user', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, data: await fnSyncUser() })
    logInfo('RBB01 사용자 정보 동기화', email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RBB01 사용자 정보 동기화 ${error}`, email)
  }
})

// RBB02 Qsys 정보 동기화
router.get('/qsys', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, data: await fnSyncQsys() })
    logInfo('RBB02 Qsys 정보 동기화', email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RBB02 Qsys 정보 동기화 ${error}`, email)
  }
})

// RBB03 BARIX 정보 동기화
router.get('/barix', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, data: await fnSyncBarix() })
    logInfo('RBB03 BARIX 정보 동기화', email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RBB03 BARIX 정보 동기화 ${error}`, email)
  }
})

// RBB04 스케줄 정보 동기화
router.get('/schedule', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, data: await fnSyncSchedule() })
    logInfo('RBB04 스케줄 정보 동기화', email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RBB04 스케줄 정보 동기화 ${error}`, email)
  }
})

module.exports = router
