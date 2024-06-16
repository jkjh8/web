const express = require('express')
const { logInfo, logWarn, logError } = require('@logger')
const { dbUserFind, dbUserUpdate, dbUserRemove } = require('@db/user')
const { isAdmin } = require('@api/user')
const { fnBackupUsers } = require('@api/backup/users')
const { fnUserUpdate } = require('@api/backup/users')

const router = express.Router()

router.get('/', isAdmin, async (req, res) => {
  try {
    const users = await dbUserFind({}, { userPassword: 0 })
    res.status(200).json({ result: true, users })
  } catch (err) {
    logError(`사용자 데이터 오류`, req.user.email, 'user')
    res.status(500).json({ result: false, error: err })
  }
})

router.put('/', isAdmin, async (req, res) => {
  try {
    const { user, update } = req.body
    await dbUserUpdate({ _id: user._id }, update)
    // 백업 서버 전송
    await fnUserUpdate({ _id: user._id }, update)
    logInfo(
      `사용자 권한이 변경되었습니다. ${user.email} ${JSON.stringify(update)}`,
      req.user.email,
      'user'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`사용자 권한 변경 오류 ${error}`, 'server', 'user')
    res.status(500).json({ result: false, error: error })
  }
})

router.put('/admin', isAdmin, async (req, res) => {
  try {
    const { _id, email, isAdmin } = req.body
    await dbUserUpdate({ _id }, { isAdmin: !isAdmin })
    // 백업 서버 전송
    await fnUserUpdate({ _id }, { isAdmin: !isAdmin })
    logInfo(
      `사용자의 관리자 권한이 변경되었습니다. ${email} - ${!isAdmin}`,
      req.user.email,
      'user'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`사용자 권한 변경 오류 ${error}`, req.user.email, 'user')
    res.status(500).json({ result: false, error: error })
  }
})

router.delete('/', isAdmin, async (req, res) => {
  try {
    const r = await dbUserRemove(req.body._id)
    logWarn(
      `사용자 삭제 ${req.body.name}:${req.body.email}`,
      req.user.email,
      'user'
    )
    res.status(200).json({ result: true, data: r })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`사용자 삭제 오류 ${error}`, req.user.email, 'user')
  }
})

router.get('/backup', isAdmin, async (req, res) => {
  try {
    console.log(gStatus)
    if (
      gStatus.mode === 'Normal' &&
      gStatus.backupAddress &&
      gStatus.backupActive
    ) {
      console.log(await fnBackupUsers(req.user.email))
    } else {
      logWarn(`사용자 백업 오류 - 백업 설정 안됨`, req.user.email, 'user')
      return res
        .status(403)
        .json({ result: false, error: '백업 모드가 아닙니다.' })
    }
    return res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`사용자 백업 오류 ${error}`, req.user.email, 'user')
  }
})

module.exports = router
