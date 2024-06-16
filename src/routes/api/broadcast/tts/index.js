const path = require('node:path')
const fs = require('node:fs')
const express = require('express')
const axios = require('axios')

const { dbSetupFindOne, dbSetupUpdate } = require('@db/setup')
const { dbTtsMake } = require('@db/tts')
const { dbUserUpdate } = require('@db/user')
const { logError, logWarn, logInfo } = require('@logger')
const { fnGetFile } = require('@api/files')
const uniqueId = require('@api/utils/uniqueId.js')

const router = express.Router()

const { tts, fnGetTtsInfo, fnResetInfo } = require('@api/tts')
let ttsProperty = {}

router.get('/', async (req, res) => {
  try {
    if (Object.keys(ttsProperty).length) {
      res.status(200).json({ result: true, value: ttsProperty })
    } else {
      ttsProperty = await fnResetInfo()
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
    const name = `${uniqueId(16)}.mp3`
    const filePath = path.join(gStatus.tempFolder, name)
    // TTS 파일 생성
    const { data } = await tts.post('/speak', {
      rate,
      text,
      voice,
      filePath
    })
    // 파일 정보 수집
    const file = await fnGetFile(filePath)
    // 데이터 업데이트
    await dbTtsMake({ rate, text, voice, user: req.user.email })
    await dbUserUpdate({ _id: req.user._id }, { $inc: { tts: 1 } })
    res.status(200).json({
      result: true,
      value: {
        ...data,
        file
      }
    })
  } catch (error) {
    logError(`TTS 생성 오류 ${error}`, req.user.email, 'tts')
    res.status(500).json({ result: false, error })
  }
})

// TTS 파일 삭제
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

router.get('/voice', async (req, res) => {
  try {
    let r = await dbSetupFindOne({ key: 'voice' })
    if (r && r.value) {
      gStatus.voice = r.value
    }
    res.status(200).json({ ...gStatus })
  } catch (error) {
    logError(`TTS음성 오류 ${error}`, 'server', 'setup')
    res.status(500).json({ result: false, error })
  }
})

router.put('/voice', async (req, res) => {
  try {
    // check admin
    if (req.user.isAdmin !== true) {
      return res.status(403).json({ result: false, error: '권한이 없습니다.' })
    }
    const { newVoice } = req.body
    await dbSetupUpdate({ key: 'voice' }, { value: newVoice })
    // update global tts voice
    gStatus.voice = newVoice
    logInfo(
      `TTS 음성 변경 완료 ${newVoice} by ${req.user.email}`,
      'server',
      'setup'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`edit tts voice error ${error}`, 'server', 'setup')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
