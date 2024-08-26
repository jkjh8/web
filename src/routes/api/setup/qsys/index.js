const express = require('express')
const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { isAdmin } = require('@api/user')
const { logInfo, logError } = require('@logger')

const router = express.Router()
// RS03 볼륨조정 간격
router.get('/gainstep', async (req, res) => {
  const { email } = req.user
  try {
    const r = await dbSetupFindOne({ key: 'gainStep' })
    if (r && r.valueNum) {
      gStatus.gainStep = r.valueNum
    }
    res.status(200).json({ result: true, value: gStatus.gainStep })
  } catch (error) {
    logError(`RS03 볼륨 간격 조회 - ${error}`), email
  }
})

// RS04 볼륨조정 간격 변경
router.put('/gainstep', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    const { newGainStep } = req.body
    await dbSetupUpdate({ key: 'gainStep' }, { valueNum: newGainStep })
    // update global tts address
    logInfo(`RS04 볼륨 간격 변경 -${newGainStep}`, email)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`RS04 볼륨 간격 변경 - ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
