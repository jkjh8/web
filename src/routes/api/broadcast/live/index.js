const express = require('express')
// logger
const { logInfo, logError, logEvent } = require('@logger')
// db
const { dbQsysFindOne } = require('@db/qsys')
const { dbUserUpdate } = require('@db/user')
// api
const { fnWaitRelayOnTime } = require('@api/broadcast')
const { fnSendQsysData } = require('@api/qsys')
const { fnBarixesRelayOn } = require('@api/barix')
const { fnSetLive } = require('@api/qsys/broadcast')
const uniqueId = require('@api/utils/uniqueId')
const { fnGetSocketId } = require('@api/user/socket')
const { fnAmxesRelayOn } = require('@api/amx')
const { fnSendPageMessage } = require('@api/client')
// io

const router = express.Router()

// BL01 실시간 방송 시작
router.put('/', async (req, res) => {
  const { email } = req.user
  try {
    // 변수
    const { devices, zones } = req.body

    const idx = uniqueId(16)

    //////////////// 릴레이 구동 ////////////////
    // amx 릴레이 구동
    await fnAmxesRelayOn(devices)
    // Barix 릴레이 구동
    await fnBarixesRelayOn(devices)
    // 로그
    logEvent(`실시간 방송 릴레이 구동 완료 ID:${idx}`, email, zones)

    ////////////////  동작 대기 ////////////////
    await fnWaitRelayOnTime()

    //////////////// 방송 시작 ////////////////
    // qsys page 시작
    fnSendQsysData('qsys:page:live', await fnSetLive(idx, req.body, email))
    // 방송 송출 로그
    logEvent(`실시간 방송 송출 시작 ID:${idx}`, email, zones)

    // 방송 메시지 송출(연결된 사용자에게만)
    const socketId = await fnGetSocketId(email)
    fnSendPageMessage(socketId, 'all', '실시간 방송 시작')

    //////////////// 리턴 ////////////////
    res.status(200).json({ result: true, idx })

    // 사용자 사용회수 증가
    await dbUserUpdate({ email }, { $inc: { numberOfPaging: 1 } })
  } catch (error) {
    logError(`BL01 실시간 방송 ${error}`, email, zones)
    res.status(500).json({ result: false, error })
  }
})

// BL02 메세지 방송 시작
router.put('/message', async (req, res) => {
  const { email } = req.user
  try {
    // 변수
    const { Mode, devices, file, zones } = req.body
    const idx = uniqueId(16)

    //////////////// 릴레이 구동 ////////////////
    // amx 릴레이 구동
    await fnAmxesRelayOn(devices)
    // Barix 릴레이 구동
    await fnBarixesRelayOn(devices)

    ////////////////  동작 대기 ////////////////
    await fnWaitRelayOnTime()

    //////////////// 방송 시작 ////////////////
    fnSendQsysData(
      'qsys:page:message',
      await fnSetLive(idx, req.body, user.email)
    )
    logEvent(
      `메시지 방송 시작 모드:${Mode} 파일:${file.base} ID:${idx}`,
      email,
      zones
    )
    //////////////// 리턴 ////////////////
    res.status(200).json({ result: true, idx })

    // 사용자 사용회수 증가
    await dbUserUpdate({ email }, { $inc: { numberOfPaging: 1 } })
  } catch (error) {
    logError(`BL02 메시지 방송 ${error}`, email, zones)
    res.status(500).json({ result: false, error })
  }
})

// BL03 메시지 파일 삭제 만들어야함.
router.delete('/message', async (req, res) => {
  try {
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BL04 메시지 삭제 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// BL04 방송 중지
router.get('/stop', async (req, res) => {
  try {
    const { deviceId } = req.params
    const r = await dbQsysFindOne({ deviceId })
    for (let item of r.pageId) {
      fnSendQsysData('qsys:page:sstop', {
        deviceId,
        PageID: item.PageID,
        idx: item.idx
      })
    }
    logEvent(`방송 중지`, req.user.email, [r.name])
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BL04 방송 중지 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// BL05 방송 취소
router.get('/cancel', async (req, res) => {
  try {
    const { deviceId } = req.params
    const r = await dbQsysFindOne({ deviceId })
    for (let item of r.pageId) {
      fnSendQsysData('qsys:page:cancel', {
        deviceId,
        PageID: item.PageID,
        idx: item.idx
      })
    }
    logEvent(`방송 취소`, req.user.email, [r.name])
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BL05 방송 취소 오류 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
