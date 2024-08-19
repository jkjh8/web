const express = require('express')
const router = express.Router()
const { logError } = require('@logger')
const { gStatus } = require('../../../defaultVal')

// RB01
router.get('/polling', (req, res) => {
  try {
    gStatus.barix = new Date().toLocaleString()
    res.status(200).json({
      result: true,
      polling: gStatus.interval
    })
  } catch (error) {
    logError(`RB01 Polling 조회 실패 - ${error}`, 'SERVER')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
