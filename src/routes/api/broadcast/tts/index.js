const path = require('node:path')
const fs = require('node:fs')
const express = require('express')
const axios = require('axios')

const { logError, logWarn, logDebug, logInfo } = require('@logger')
const { fnGFile } = require('@api/files')
const makeId = require('@api/utils/uniqueId.js')
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
    const { rate, text, voice } = req.body
    const name = `${makeId(12)}.mp3`
    const filePath = path.join(gStatus.tempFolder, name)
    const r = await tts.post('/speak', {
      rate,
      text,
      voice: voice.id,
      filePath
    })
    res.status(200).json({
      result: true,
      value: {
        text: r.data.text,
        file: { ...path.parse(filePath), ...(await fnGFile(filePath)) }
      }
    })
  } catch (error) {
    logError(`TTS 생성 오류 ${error}`, req.user.email, 'tts')
    res.status(500).json({ result: false, error })
  }
})

router.delete('/', (req, res) => {
  try {
    const { file } = req.body
    fs.unlinkSync(file.fullpath)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`TTS 파일 삭제 오류 ${error}`, req.user.email, 'tts')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
