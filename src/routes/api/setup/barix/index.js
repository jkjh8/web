const express = require('express')
const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { logInfo, logError } = require('@logger')
const { fnSendGlobalStatus } = require('@api/client')
const { fnSendMessagePM2 } = require('@api/pm2')
const { gStatus } = require('@src/defaultVal.js')
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
    logError(`RS01 BARIX 정보 수집 간격 - ${error}`), email
  }
})

// RS02 BARIX SET HTTP DATA INTERVAL
router.put('/interval', async (req, res) => {
  const { email } = req.user
  try {
    const { newInterval } = req.body
    await dbSetupUpdate({ key: 'interval' }, { valueNum: newInterval })
    gStatus.interval = newInterval
    fnSendGlobalStatus()
    fnSendMessagePM2({ type: 'setup', data: { interval: gStatus.interval } })
    // restart barix
    logInfo(`RS02 BARIX 정보 수집 간격 조정 - ${newInterval}`, email)
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RS02 BARIX 정보 수집 간격 조정 - ${error}`, email)
  }
})

module.exports = router
