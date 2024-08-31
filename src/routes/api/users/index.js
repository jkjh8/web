const express = require('express')
const { logInfo, logWarn, logError } = require('@logger')
const { dbUserFind, dbUserUpdate, dbUserRemove } = require('@db/user')
const { isAdmin } = require('@api/user')
const { fnRemoveUserFolder } = require('@api/files')

const router = express.Router()

//RU01 사용자 목록을 조회하는 라우트입니다.
router.get('/', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    res
      .status(200)
      .json({ result: true, users: await dbUserFind({}, { userPassword: 0 }) })
  } catch (err) {
    res.status(500).json({ result: false, error: err })
    // 로그
    logError(`RU01 사용자 데이터`, email)
  }
})

//RU02 사용자  변경하는 라우트입니다.
router.put('/', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    const { user, update } = req.body
    await dbUserUpdate({ _id: user._id }, update)
    res.status(200).json({ result: true })
    logInfo(`RU02 사용자 권한이 변경 ${user.email} ${update}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    // 로그
    logError(`RU02 사용자 권한 변경 - ${error}`, email)
  }
})

//RU03 사용자를 삭제하는 라우트입니다.
router.put('/admin', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    const { _id, email, isAdmin } = req.body
    await dbUserUpdate({ _id }, { isAdmin: !isAdmin })
    res.status(200).json({ result: true })
    logInfo(`RU03 관리자 권한 변경 - ${email} - ${!isAdmin}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RU03 관리자 권한 변경 - ${error}`, email)
  }
})

// RU04 사용자를 삭제하는 라우트입니다.
router.delete('/', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    const { _id, name } = req.body
    fnRemoveUserFolder(req.body.email)
    await dbUserRemove(_id)
    logWarn(`RU04 사용자 삭제 - ${name} - ${req.body.email}`, email)
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // console.log(error)
    logError(`RU04 사용자 삭제 - ${error}`, email)
  }
})

// RU05 사용자 이메일을 변경하는 라우트
router.put('/email', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    const { id, oldEmail, newEmail } = req.body
    await dbUserUpdate({ _id: id }, { email: newEmail })

    res.status(200).json({ result: true })
    logInfo(`RU05 사용자 이메일 변경 - ${oldEmail} -> ${newEmail}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RU05 사용자 이메일 변경 - ${error}`, email)
  }
})

module.exports = router
