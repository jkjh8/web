const express = require('express')
const { isAdmin } = require('@api/user')
const { logDebug, logError } = require('@logger')

const { fnGFSize, fnRTemp } = require('@api/files')

const router = express.Router()

router.delete('/', isAdmin, (req, res) => {
  try {
    fnRTemp()
    logDebug(`임시 폴더 비우기 완료`, req.user.email, 'files')
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`임시 폴더 비우기 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.get('/size', (req, res) => {
  try {
    let size = 0
    size = fnGFSize(gStatus.tempFolder)
    res.status(200).json({ result: true, size })
  } catch (error) {
    logError(`임시 폴더 비우기 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
