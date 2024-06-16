const express = require('express')
const {
  dbUserMake,
  dbUserFind,
  dbUserUpdate,
  dbUserRemove
} = require('@api/user')

const router = express.Router()

router.put('/all', async (req, res) => {
  try {
    const { users } = req.body
    // 데이터베이스에서 모든 사용자 조회
    const allUsers = await dbUserFind({})

    // users 배열에 없는 이메일을 가진 사용자 찾기
    const usersToDelete = allUsers.filter(
      (dbUser) => !users.some((user) => user.email === dbUser.email)
    )

    // 찾은 사용자 삭제
    for (const userToDelete of usersToDelete) {
      await dbUserRemove(userToDelete._id)
    }

    // users 배열에 있는 사용자 업데이트
    for (const user of users) {
      await dbUserUpdate({ email: user.email }, user)
    }

    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
  }
})

router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, user: await dbUserMake({ ...req.body }) })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`사용자 백업 오류 ${error.response.message}`, 'server', 'user')
  }
})

router.put('/', async (req, res) => {
  try {
    const { key, value } = req.body
    res
      .status(200)
      .json({ result: true, value: await dbUserFind({ key }, { ...value }) })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`사용자 백업 오류 ${error.response.message}`, 'server', 'user')
  }
})

router.delete('/', async (req, res) => {
  try {
    const { id } = req.body
    res.status(200).json({ result: true, value: await dbUserRemove(id) })
  } catch (error) {
    res.status(500).json({ result: false, error: error })
    logError(`사용자 백업 오류 ${error.response.message}`, 'server', 'user')
  }
})

module.exports = router
