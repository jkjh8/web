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

const { tts, fnGetTtsInfo, fnResetInfo, fnMakeTtsFile } = require('@api/tts')
let ttsProperty = {}

// TT01
router.get('/', async (req, res) => {
  try {
    if (Object.keys(ttsProperty).length) {
      res.status(200).json({ result: true, value: ttsProperty })
    } else {
      ttsProperty = await fnGetTtsInfo()
      res.status(200).json({ result: true, value: ttsProperty })
    }
  } catch (error) {
    logError(`TT01 TTS 정보 확인 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// TT02
router.put('/', async (req, res) => {
  try {
    const { rate, text, voice } = req.body
    const name = `${uniqueId(16)}.mp3`
    const filePath = path.join(gStatus.tempFolder, name)
    // TTS 파일 생성
    const data = await fnMakeTtsFile(rate, text, voice, filePath)

    // 파일 정보 수집
    const file = await fnGetFile(filePath)
    // 데이터 업데이트
    await dbTtsMake({ rate, text, voice, user: req.user.email })
    await dbUserUpdate({ _id: req.user._id }, { $inc: { numberOfTtsCalls: 1 } })
    res.status(200).json({
      result: true,
      value: {
        ...data,
        file
      }
    })
  } catch (error) {
    logError(`TT02 TTS 생성 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// TT03 TTS 파일 삭제
router.delete('/', (req, res) => {
  try {
    const { file } = req.body
    fs.unlinkSync(file.fullpath)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`TT03 TTS 파일 삭제 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// TT04 TTS 음성 확인
router.get('/voice', async (req, res) => {
  try {
    let r = await dbSetupFindOne({ key: 'voice' })
    if (r && r.value) {
      gStatus.voice = r.value
    }
    res.status(200).json({ ...gStatus })
  } catch (error) {
    logError(`TT04 TTS음성 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// TT05 TTS 음성 변경
router.put('/voice', async (req, res) => {
  const { email } = req.user
  try {
    // check admin
    // if (req.user.isAdmin !== true) {
    //   return res.status(403).json({ result: false, error: '권한이 없습니다.' })
    // }
    const { newVoice } = req.body
    await dbSetupUpdate({ key: 'voice' }, { value: newVoice })
    // update global tts voice
    gStatus.voice = newVoice
    logInfo(`TT05 TTS 음성 변경 완료 ${newVoice}`, email)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`TT05 TTS음성 ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
