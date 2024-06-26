const express = require('express')
const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { fnRestartBarix } = require('@api/barix')
const { logInfo, logError } = require('@logger')

const router = express.Router()

// RS01 BARIX GET HTTP DATA INTERVAL
router.get('/interval', async (req, res) => {
  const { email } = req.user
  try {
    const r = await dbSetupFindOne({ key: 'interval' })
    if (r && r.valueNum) {
      gStatus.interval = r.valueNum
    }
    res.status(200).json({ result: true, value: gStatus.interval })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RS01 Barix 정보 수집 간격 ${error}`), email
  }
})

// RS02 BARIX SET HTTP DATA INTERVAL
router.put('/interval', async (req, res) => {
  const { email } = req.user
  try {
    const { newInterval } = req.body
    await dbSetupUpdate({ key: 'interval' }, { valueNum: newInterval })
    gStatus.interval = newInterval
    // restart barix
    fnRestartBarix()
    res.status(200).json({ result: true })
    logInfo(`RS02 Barix 정보 수집 간격 조정 ${newInterval}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RS02 Barix 정보 수집 간격 조정 ${error}`, email)
  }
})

module.exports = router
