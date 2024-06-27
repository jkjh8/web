const express = require('express')
const { logError } = require('@logger')
const { dbUserMake, dbUserUpdate, dbUserRemove } = require('@api/user')

const router = express.Router()
// BU01  post
router.post('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbUserMake({ ...req.body }) })
  } catch (error) {
    logError(`BU01 사용자 정보 동기화 ${error}`, 'SERVER')
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
    logError(`BU02 사용자 정보 동기화 ${error}`, 'SERVER')
  }
})

// BU03 delete
router.delete('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ result: true, data: await dbUserRemove(req.body.id) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BU03 사용자 정보 동기화 ${error}`, 'SERVER')
  }
})
