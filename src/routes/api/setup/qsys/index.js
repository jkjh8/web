const express = require('express')
const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { isAdmin } = require('@api/user')
const { logInfo, logError } = require('@logger')

const router = express.Router()

router.get('/gainstep', async (req, res) => {
  try {
    const r = await dbSetupFindOne({ key: 'gainStep' })
    if (r && r.valueNum) {
      gStatus.gainStep = r.valueNum
    }
    res.status(200).json({ result: true, value: gStatus.gainStep })
  } catch (error) {
    logError(`볼륨 간격 조회 ${error}`), 'server', 'setup'
  }
})

router.put('/gainstep', isAdmin, async (req, res) => {
  try {
    const { newGainStep } = req.body
    await dbSetupUpdate({ key: 'gainStep' }, { valueNum: newGainStep })
    // update global tts address
    logInfo(
      `볼륨 간격 변경 ${newGainStep} by ${req.user.email}`,
      'server',
      'setup'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`볼륨 간격 변경 ${error}`, 'server', 'setup')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
