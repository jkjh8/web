const express = require('express')
const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { fnRestartBarix } = require('@api/barix')
const { logInfo, logError } = require('@logger')

const router = express.Router()

// BARIX GET HTTP DATA INTERVAL
router.get('/interval', async (req, res) => {
  try {
    const r = await dbSetupFindOne({ key: 'interval' })
    if (r && r.valueNum) {
      gStatus.interval = r.valueNum
    }
    res.status(200).json({ result: true, value: gStatus.interval })
  } catch (error) {
    logError(`Barix 정보 수집 간격 조회 오류 ${error}`), 'server', 'setup'
  }
})

// BARIX SET HTTP DATA INTERVAL
router.put('/interval', async (req, res) => {
  try {
    const { newInterval } = req.body
    await dbSetupUpdate({ key: 'interval' }, { valueNum: newInterval })
    gStatus.interval = newInterval
    // restart barix
    fnRestartBarix()
    logInfo(`Barix 정보 수집 간격 조정 ${newInterval}`, 'server', 'setup')
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`Barix 정보 수집 간격 조정 ${error}`, 'server', 'setup')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
