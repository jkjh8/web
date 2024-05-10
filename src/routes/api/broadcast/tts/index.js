const express = require('express')
const axios = require('axios')
const { logError, logWarn, logDebug, logInfo } = require('@logger')
// const { tts, ttsProperty, fnResetInfo } = require('@api/tts')

const router = express.Router()

const tts = axios.create({ baseURL: 'http://localhost:5000' })
let ttsProperty = {}

const fnGetTtsInfo = async () => {
  const r = await tts.get('/')
  ttsProperty = r.data.values
  return ttsProperty
}

const fnResetInfo = async () => {
  const r = await tts.get('/reset')
  ttsProperty = r.data.values
  return ttsProperty
}

router.get('/', async (req, res) => {
  try {
    if (Object.keys(ttsProperty).length) {
      res.status(200).json({ result: true, value: ttsProperty })
    } else {
      await fnResetInfo()
      res.status(200).json({ result: true, value: ttsProperty })
    }
  } catch (error) {
    logError(`TTS 정보 확인 오류 ${error}`, req.user.email, 'tts')
    res.status(500).json({ result: false, error })
  }
})

router.put('/', async (req, res) => {
  try {
    console.log(req.body)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`TTS 생성 오류 ${error}`, req.user.email, 'tts')
    req.status(500).json({ result: false, error })
  }
})

module.exports = router
