const express = require('express')
const moment = require('moment')
const { dbSetupUpdate } = require('@db/setup')
const { logError } = require('@logger')
const { fnSendSocket } = require('@api/client')
// api
const { fnSendMessagePM2 } = require('@api/pm2')

const router = express.Router()

// RB01
router.get('/polling', async (req, res) => {
  try {
    gStatus.barix = moment().format('YYYY-MM-DD HH:mm:ss')
    fnSendMessagePM2({ type: 'setup', data: { barix: gStatus.barix } })
    await dbSetupUpdate({ key: 'barix' }, { value: gStatus.barix })
    fnSendSocket('setup:status', { barix: gStatus.barix })
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
