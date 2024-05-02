const express = require('express')
const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { dbPageFindOne } = require('@db/page')
const io = require('@io')
const router = express.Router()

router.use('/live', require('./live'))

router.get('/stop', async (req, res) => {
  const page = await dbPageFindOne({ idx: req.query.idx })
  io.bridge.emit(
    'qsys:page:stop',
    page.devices.map((e) => {
      return { deviceId: e.deviceId, PageID: e.PageID, idx: e.idx }
    })
  )
  try {
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`라이브 방송 중지 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
