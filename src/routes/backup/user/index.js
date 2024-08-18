const express = require('express')
const { logInfo, logError } = require('@logger')
const { dbUser, dbUserMake, dbUserUpdate, dbUserRemove } = require('@db/user')
const { fnRemoveUserFolder } = require('@api/files')

const router = express.Router()
// BU01  post
router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbUserMake({ ...req.body }) })
  } catch (error) {
    logError(`BU01 사용자 정보 동기화 - ${error}`, 'SERVER')
  }
})

// BU02 update
router.put('/', async (req, res) => {
  try {
    const { key, value } = req.body
    res.status(200).json({
      result: true,
      data: await dbUserUpdate(key, value)
    })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BU02 사용자 정보 동기화 - ${error}`, 'SERVER')
  }
})

// BU03 delete
router.delete('/', async (req, res) => {
  try {
    const curr = dbUserFindOne({ _id: req.body.id })
    fnRemoveUserFolder(curr.email)
    res
      .status(200)
      .json({ result: true, data: await dbUserRemove(req.body.id) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BU03 사용자 정보 동기화 - ${error}`, 'SERVER')
  }
})

// BU04 대량 업데이트
router.post('/many', async (req, res) => {
  try {
    const { users } = req.body

    // users array를 받아서 개별로 db 문서 생성
    for (let i = 0; i < users.length; i++) {
      await dbUser.create(users[i])
    }
    res.status(200).json({ result: true })

    logInfo('BU04 사용자 정보 동기화 완료', 'SERVER')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BU04 사용자 정보 동기화 - ${error}`, 'SERVER')
  }
})

// BU05 사용자 정보 초기화
router.delete('/reset', async (req, res) => {
  try {
    await dbUser.deleteMany({})
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BU05 사용자 정보 초기화 - ${error}`, 'SERVER')
  }
})

module.exports = router
