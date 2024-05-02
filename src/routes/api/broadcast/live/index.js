const express = require('express')
const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { fnSetLive } = require('@api/qsys/broadcast')
const uniqueId = require('@api/utils/uniqueId')
const io = require('@io')
const router = express.Router()

router.put('/', async (req, res) => {
  try {
    const idx = uniqueId(8)
    io.bridge.emit(
      'qsys:page:live',
      await fnSetLive(idx, req.body, req.user.email)
    )
    res.status(200).json({ result: true, idx })
  } catch (error) {
    logError(`라이브 방송 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

router.get('/cancel', (req, res) => {
  try {
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`라이브 방송 취소 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
