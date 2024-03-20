const express = require('express')
const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { isAdmin } = require('@api/user')
const { logInfo, logError, logDebug } = require('@logger')

const router = express.Router()

router.get('/addr', isAdmin, async (req, res) => {
  try {
    let r = await dbSetupFindOne({ key: 'ttsAddress' })
    if (r && r.value) {
      gStatus.ttsAddress = r.value
    }
    res.status(200).json({ ...gStatus })
  } catch (error) {
    logError(`TTS주소 오류 ${error}`, 'server', 'setup')
    res.status(500).json({ result: false, error })
  }
})

router.put('/addr', isAdmin, async (req, res) => {
  try {
    const { newName } = req.body
    await dbSetupUpdate({ key: 'ttsAddress' }, { value: newName })
    // update global tts address
    sStatus.ttsAddress = newName
    logInfo(
      `TTS 주소 변경 오류 ${newName} by ${req.user.email}`,
      'server',
      'setup'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`edit tts address error ${error}`, 'server', 'setup')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
