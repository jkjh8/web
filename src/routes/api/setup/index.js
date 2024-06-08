const initSetup = require('@api/setup')
const { dbSetupUpdate } = require('@db/setup')
const { logInfo, logError } = require('@logger')
const { fnBackupUsers } = require('@api/backup')

const router = require('express').Router()

router.use('/barix', require('./barix'))
router.use('/qsys', require('./qsys'))

router.get('/', async (req, res) => {
  try {
    await initSetup()
    res.status(200).json({ result: true, value: gStatus })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`Setup값 갱신 오류 ${error}`, 'server', 'setup')
  }
})

// 서버 모드를 조회하는 라우트입니다.
router.get('/servermode', async (req, res) => {
  try {
    await initSetup()
    res.status(200).json({
      result: true,
      mode: gStatus.mode,
      backupAddress: gStatus.backupAddress,
      backupActive: gStatus.backupActive
    })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`서버모드 조회 오류 ${error}`, 'server', 'setup')
  }
})

// 서버 모드를 변경하는 라우트입니다.
router.put('/servermode', async (req, res) => {
  try {
    const { mode } = req.body
    await dbSetupUpdate({ key: 'mode' }, { value: mode })
    gStatus.mode = mode
    res.status(200).json({ result: true, mode: gStatus.mode })
    // 로그 기록
    logInfo(`서버모드 변경 완료`, req.user.email, 'setup')
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`서버모드 변경 오류 ${error}`, 'server', 'setup')
  }
})

// 백업 서버 주소를 변경하는 라우트입니다.
router.put('/backupaddress', async (req, res) => {
  try {
    const { backupAddress } = req.body
    await dbSetupUpdate({ key: 'backupAddress' }, { value: backupAddress })
    gStatus.backupAddress = backupAddress
    res.status(200).json({ result: true, address: gStatus.backupAddress })
    // 로그 기록
    logInfo(`백업서버 주소 변경 완료`, req.user.email, 'setup')
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`백업서버 주소 변경 오류 ${error}`, 'server', 'setup')
  }
})
// 백업 활성화를 확인하는 라우트입니다.
router.get('/backupactive', async (req, res) => {
  try {
    await initSetup()
    res.status(200).json({ result: true, active: gStatus.backupActive })
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`백업 활성화 조회 오류 ${error}`, 'server', 'setup')
  }
})
// 백업 활성화를 변경하는 라우트입니다.
router.put('/backupactive', async (req, res) => {
  try {
    const { active } = req.body
    await dbSetupUpdate({ key: 'backupActive' }, { valueBoolean: active })
    gStatus.backupActive = active
    res.status(200).json({ result: true, active: gStatus.backupActive })
    // 로그 기록
    logInfo(`백업 활성화 변경 완료`, req.user.email, 'setup')
    // 백업 활성화가 true일 경우 사용자 정보를 백업합니다.
    if (gStatus.backupActive) {
      fnBackupUsers(req.user.email)
    }
  } catch (error) {
    res.status(500).json({ result: false, error: error.message })
    logError(`백업 활성화 변경 오류 ${error}`, 'server', 'setup')
  }
})
module.exports = router
