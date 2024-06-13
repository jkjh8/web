const express = require('express')
const { logInfo, logError, logEvent } = require('@logger')
const { dbQsysFindOne } = require('@db/qsys')
const { fnBarixRelayOn } = require('@api/barix')
const { fnSetLive } = require('@api/qsys/broadcast')
const uniqueId = require('@api/utils/uniqueId')
const { fnGetSocketId } = require('@api/user/socket')
const { fnSendPageMessage } = require('@io/client/api')
const io = require('@io')
const router = express.Router()

// barix 구동 만들어야 함

router.put('/', async (req, res) => {
  try {
    const idx = uniqueId(16)
    // Barix 릴레이 구동
    for (let zone of req.body.devices) {
      await fnBarixRelayOn(zone.barix)
    }
    // qsys page 시작
    io.bridge.emit(
      'qsys:page:live',
      await fnSetLive(idx, req.body, req.user.email)
    )
    // 방송 메시지 송출
    const socketId = await fnGetSocketId(req.user.email)
    fnSendPageMessage(socketId, 'all', '실시간 방송 시작')
    // 로그
    logEvent(`실시간 방송 시작 ${idx}`, req.user.email, 'page', req.body.zones)
    res.status(200).json({ result: true, idx })
  } catch (error) {
    logError(`실시간 방송 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

router.put('/message', async (req, res) => {
  try {
    const idx = uniqueId(16)
    // Barix 릴레이 구동
    for (let zone of req.body.devices) {
      await fnBarixRelayOn(zone.barix)
    }
    // qsys page 시작
    io.bridge.emit(
      'qsys:page:message',
      await fnSetLive(idx, req.body, req.user.email)
    )
    logEvent(
      `메시지 방송 시작 ${req.body.file.base} ${idx}`,
      req.user.email,
      'page',
      req.body.zones
    )
    res.status(200).json({ result: true, idx })
  } catch (error) {
    logError(`메시지 방송 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

// 메시지 파일 삭제 만들어야함.
router.delete('/message', async (req, res) => {
  try {
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`메시지 삭제 오류  ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

router.get('/stop', async (req, res) => {
  try {
    const { deviceId } = req.params
    const r = await dbQsysFindOne({ deviceId })
    for (let item of r.pageId) {
      io.bridge.emit('qsys:page:sstop', {
        deviceId,
        PageID: item.PageID,
        idx: item.idx
      })
    }
    logEvent(`방송 중지`, req.user.email, 'live', [r.name])
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`방송 중지 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

router.get('/cancel', async (req, res) => {
  try {
    const { deviceId } = req.params
    const r = await dbQsysFindOne({ deviceId })
    for (let item of r.pageId) {
      io.bridge.emit('qsys:page:cancel', {
        deviceId,
        PageID: item.PageID,
        idx: item.idx
      })
    }
    logEvent(`방송 취소`, req.user.email, 'live', [r.name])
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`방송 취소 오류 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
