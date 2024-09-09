const express = require('express')
const { isAdmin } = require('@api/user')
const { logInfo, logError } = require('@logger')
const { gStatus } = require('@src/defaultVal.js')

const { fnGetFileSize, fnRTemp } = require('@api/files')

const router = express.Router()

// RF01 - 임시 폴더 비우기
router.delete('/', isAdmin, (req, res) => {
  const { email } = req.user
  try {
    fnRTemp()
    logInfo(`RF01 임시 폴더 비우기 완료`, email)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`임시 폴더 비우기 - ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// RF02 - 임시 폴더 크기 확인
router.get('/size', (req, res) => {
  const { email } = req.user
  try {
    res
      .status(200)
      .json({ result: true, size: fnGetFileSize(gStatus.tempFolder) ?? 0 })
  } catch (error) {
    logError(`RF02 임시 폴더 크기 확인 - ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
