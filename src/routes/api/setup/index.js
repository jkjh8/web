const { gStatus } = require('../../../defaultVal')
const { dbSetupUpdate } = require('@db/setup')
const { logInfo, logError } = require('@logger')
// api
const initSetup = require('@api/setup')
const {
  fnSendActiveScheduleToAPP,
  fnSendAutoScheduleToAPP
} = require('@api/schedule')
const { fnBackupFilesNow } = require('@api/backup')

const router = require('express').Router()

router.use('/barix', require('./barix'))
router.use('/qsys', require('./qsys'))

//SS01 서버 설정값 초기화
router.get('/', async (req, res) => {
  const { email } = req.user
  try {
    // await initSetup()
    res.status(200).json({ result: true, value: gStatus })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS01 서버설정 가져오기 ${error}`, email)
  }
})

// SS01-1 서버 설정값 초기화
router.get('/reload', async (req, res) => {
  try {
    await initSetup()
    res.status(200).json({ result: true, value: gStatus })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS01-1 서버설정 가져오기 ${error}`, email)
  }
})

//SS02 서버 모드를 조회하는 라우트입니다.
router.get('/servermode', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({
      result: true,
      mode: gStatus.mode,
      backupAddress: gStatus.backupAddress,
      backupActive: gStatus.backupActive,
      backupId: gStatus.backupId,
      backupFile: gStatus.backupFile
    })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    // 로그
    logError(`SS02 서버모드 조회 ${error}`, email)
  }
})

// SS03 서버 모드를 변경하는 라우트입니다.
router.put('/servermode', async (req, res) => {
  const { email } = req.user
  try {
    const { mode } = req.body
    await dbSetupUpdate({ key: 'mode' }, { value: mode })
    gStatus.mode = mode
    res.status(200).json({ result: true, mode: gStatus.mode })
    // 로그 기록
    logInfo(`SS03 서버모드 변경 ${mode}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS03 서버모드 변경 ${error}`, email)
  }
})

// SS04 백업 서버 주소를 변경하는 라우트입니다.
router.put('/backupaddress', async (req, res) => {
  const { email } = req.user
  try {
    const { backupAddress } = req.body
    await dbSetupUpdate({ key: 'backupAddress' }, { value: backupAddress })
    gStatus.backupAddress = backupAddress
    res.status(200).json({ result: true, address: gStatus.backupAddress })
    // 로그 기록
    logInfo(`SS04 백업서버 주소 변경 ${backupAddress}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS04 백업서버 주소 변경 ${error}`, email)
  }
})

//SS05 백업 활성화를 확인하는 라우트입니다.
router.get('/backupactive', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, active: gStatus.backupActive })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS05 백업 활성화 조회 ${error}`, email)
  }
})

//SS06 백업 활성화를 변경하는 라우트입니다.
router.put('/backupactive', async (req, res) => {
  const { email } = req.user
  try {
    const { active } = req.body
    await dbSetupUpdate({ key: 'backupActive' }, { valueBoolean: active })
    gStatus.backupActive = active
    res.status(200).json({ result: true, active: gStatus.backupActive })
    // 로그 기록
    logInfo(`SS06 백업 활성화 변경 ${active}`, email)
    // 백업 활성화가 true일 경우 사용자 정보를 백업합니다.
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS06 백업 활성화 변경 ${error}`, email)
  }
})

//SS07 스케줄러 동작 변경
router.put('/scheduleactive', async (req, res) => {
  const { email } = req.user
  try {
    const { active } = req.body
    // db update
    await dbSetupUpdate({ key: 'scheduler' }, { active: active })
    gStatus.scheduler.active = active
    // send socket.io
    fnSendActiveScheduleToAPP(active)
    res.status(200).json({ result: true, active: gStatus.scheduler.active })
    logInfo(`SS07 스케줄러 동작 변경 완료 ${active}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS07 스케줄러 동작 변경 오류 ${error}`, email)
  }
})

// SS08 스케줄러 자동 전환 변경
router.put('/scheduleauto', async (req, res) => {
  const { email } = req.user
  try {
    const { auto } = req.body
    // db update
    await dbSetupUpdate({ key: 'scheduler' }, { auto: auto })
    gStatus.scheduler.auto = auto
    // send socket.io
    fnSendAutoScheduleToAPP(auto)
    res.status(200).json({ result: true, auto: gStatus.scheduler.auto })
    logInfo(`SS08 스케줄러 자동 전환 변경 ${auto}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS08 스케줄러 자동 전환 변경 ${error}`, email)
  }
})

// SS09 백업 ID
router.put('/backupid', async (req, res) => {
  const { email } = req.user
  try {
    const { backupId } = req.body
    await dbSetupUpdate({ key: 'backupId' }, { value: backupId })
    gStatus.backupId = backupId
    res.status(200).json({ result: true, backupId: gStatus.backupId })
    logInfo(`SS09 백업 ID 변경 ${backupId}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`SS09 백업 ID 변경 ${error}`, email)
  }
})

// SS10 릴레이 동작 시간
router.get('/relayontime', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, value: gStatus.relayOnTime })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS10 릴레이 동작 시간 조회 ${error}`, email)
  }
})

// SS11 릴레이 동작 시간 변경
router.put('/relayontime', async (req, res) => {
  const { email } = req.user
  try {
    const { newTime } = req.body
    await dbSetupUpdate({ key: 'relayOnTime' }, { valueNum: newTime })
    gStatus.relayOnTime = newTime
    res.status(200).json({ result: true, value: gStatus.relayOnTime })
    logInfo(`SS10 릴레이 동작 시간 변경 ${gStatus.relayOnTime}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
  }
})

// SS12 TTS Mode
router.get('/ttsmode', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, value: gStatus.ttsMode })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS12 TTS Mode 조회 ${error}`, email)
  }
})

// SS13 TTS Mode 변경
router.put('/ttsmode', async (req, res) => {
  const { email } = req.user
  try {
    const { newMode } = req.body
    await dbSetupUpdate({ key: 'ttsMode' }, { value: newMode })
    gStatus.ttsMode = newMode
    res.status(200).json({ result: true, value: gStatus.ttsMode })
    logInfo(`SS13 TTS Mode 변경 ${gStatus.ttsMode}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS13 TTS Mode 변경 ${error}`, email)
  }
})

// SS14 TTS Voiceware voice
router.get('/voicewarevoice', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, value: gStatus.voiceWareVoice })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS14 TTS Voiceware voice 조회 ${error}`, email)
  }
})

// SS15 TTS Voiceware voice 변경
router.put('/voicewarevoice', async (req, res) => {
  const { email } = req.user
  try {
    const { newVoice } = req.body
    await dbSetupUpdate({ key: 'voiceWareVoice' }, { value: newVoice })
    gStatus.voiceWareVoice = newVoice
    res.status(200).json({ result: true, value: gStatus.voiceWareVoice })
  } catch (error) {
    res.status(200).json({ result: true, value: gStatus.voiceWareVoice })
    logError(`SS15 TTS Voiceware voice 변경 ${error}`, email)
  }
})

// SS16 백업 파일
router.get('/backupfile', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, value: gStatus.backupFile })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS16 백업 파일 조회 ${error}`, email)
  }
})

// SS17 백업 파일 변경
router.put('/backupfile', async (req, res) => {
  const { email } = req.user
  try {
    const { newValue } = req.body
    await dbSetupUpdate({ key: 'backupFile' }, { valueBoolean: newValue })
    gStatus.backupFile = newValue
    res.status(200).json({ result: true, value: gStatus.backupFile })
    logInfo(`SS17 백업 파일 변경 ${gStatus.backupFile}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS17 백업 파일 변경 ${error}`, email)
  }
})

// SS18 지금 파일 백업
router.get('/backupnow', async (req, res) => {
  const { email } = req.user
  try {
    // 백업 서버로 파일을 백업합니다.
    await fnBackupFilesNow()
    res.status(200).json({ result: true })
    logInfo(`SS18 지금 파일 백업 완료`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SS18 지금 파일 백업 ${error}`, email)
  }
})

module.exports = router
