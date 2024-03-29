const express = require('express')
const { logInfo, logDebug, logError } = require('@logger')
const { dbUserFind, dbUserUpdate, dbUserRemove } = require('@db/user')
const { isAdmin } = require('@api/user')

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

router.put('/', async (req, res) => {
  try {
    const { user, update } = req.body
    await dbUserUpdate({ _id: user._id }, update)
    logDebug(
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

router.put('/admin', async (req, res) => {
  try {
    const { _id, isAdmin } = req.body.user
    await dbUserUpdate({ _id }, { isAdmin: !isAdmin })
    logDebug(
      `사용자의 관리자 권한이 변경되었습니다. ${
        req.body.user.email
      } - ${!isAdmin}`,
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
    logEvent(
      `사용자 삭제 ${req.body.name}:${req.body.email}`,
      req.user.email,
      'user'
    )
    res.status(200).json({ result: true, data: r })
  } catch (error) {
    logError(`사용자 삭제 오류 ${error}`, req.user.email, 'user')
  }
})

module.exports = router
