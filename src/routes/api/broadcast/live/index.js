const express = require('express')
// logger
const { logInfo, logError, logEvent } = require('@logger')
// db
const { dbQsysFindOne } = require('@db/qsys')
const { dbUserUpdate } = require('@db/user')
// api
const { fnWaitRelayOnTime } = require('@api/broadcast')
// const { fnSendQsysData } = require('@api/qsys')
const { fnSendQsys } = require('@api/qsys')
const { fnBarixesRelayOn } = require('@api/barix')
const { fnSetLive, fnSetZoneActive } = require('@api/qsys/broadcast')
const uniqueId = require('@api/utils/uniqueId')
const { fnGetSocketId } = require('@api/user/socket')
const { fnAmxesRelayOn } = require('@api/amx')
const { fnSendPageMessage } = require('@api/client')
// io

const router = express.Router()

// BL01 실시간 방송 시작
router.put('/', async (req, res) => {
  const { email } = req.user
  const { devices, zones, Priority } = req.body
  const socketId = await fnGetSocketId(email)
  try {
    // 변수

    const idx = uniqueId(16)

    //////////////// 릴레이 구동 ////////////////
    fnSendPageMessage(socketId, 'all', '방송 장비 기동 중')
    // amx 릴레이 구동
    await fnAmxesRelayOn(devices)
    // Barix 릴레이 구동
    await fnBarixesRelayOn(devices)
    // db에서 방송 중으로 변경
    devices.forEach(async (device) => {
      fnSetZoneActive(device.deviceId, device.params.Zones)
    })
    // 로그
    logEvent(`실시간 방송 릴레이 구동완료: ${idx}`, email, zones)

    ////////////////  동작 대기 ////////////////
    fnSendPageMessage(socketId, 'all', '방송 장비 기동 대기')
    await fnWaitRelayOnTime()

    //////////////// 방송 시작 ////////////////
    // qsys page 시작
    // fnSendQsysData('qsys:page:live', await fnSetLive(idx, req.body, email))
    // fnSendDeviceMuticast(
    //   'qsys:page:live',
    //   await fnSetLive(idx, req.body, email)
    // )
    fnSendQsys('qsys:page:live', await fnSetLive(idx, req.body, email))
    // 방송 송출 로그
    logEvent(
      `${Priority ? '긴급' : '일반'} 실시간 방송 시작: ${idx}`,
      email,
      zones
    )

    // 방송 메시지 송출(연결된 사용자에게만)
    fnSendPageMessage(socketId, 'all', '실시간 방송 시작')

    //////////////// 리턴 ////////////////
    res.status(200).json({ result: true, idx })

    // 사용자 사용회수 증가
    await dbUserUpdate({ email }, { $inc: { numberOfPaging: 1 } })
  } catch (error) {
    logError(
      `BL01 ${Priority ? '긴급' : '일반'} 실시간 방송 - ${error}`,
      email,
      zones
    )
    res.status(500).json({ result: false, error })
  }
})

// BL02 메세지 방송 시작
router.put('/message', async (req, res) => {
  const { email } = req.user
  const { Mode, devices, file, zones, Priority } = req.body
  const socketId = await fnGetSocketId(email)
  try {
    // 변수
    const idx = uniqueId(16)

    //////////////// 릴레이 구동 ////////////////
    fnSendPageMessage(socketId, 'all', '방송 장비 기동 중')
    // amx 릴레이 구동
    await fnAmxesRelayOn(devices)
    // Barix 릴레이 구동
    await fnBarixesRelayOn(devices)
    // db에서 방송 중으로 변경
    devices.forEach(async (device) => {
      fnSetZoneActive(device.deviceId, device.params.Zones)
    })
    // 로그
    logEvent(`메시지 방송 릴레이 구동완료: ${idx}`, email, zones)

    ////////////////  동작 대기 ////////////////
    fnSendPageMessage(socketId, 'all', '방송 장비 기동 대기')
    await fnWaitRelayOnTime()

    //////////////// 방송 시작 ////////////////
    // fnSendQsysData(
    //   'qsys:page:message',
    //   await fnSetLive(idx, req.body, user.email)
    // )
    // fnSendDeviceMuticast(
    //   'qsys:page:message',
    //   await fnSetLive(idx, req.body, user.email)
    // )
    fnSendQsys('qsys:page:message', await fnSetLive(idx, req.body, email))
    logEvent(
      `${Priority ? '긴급' : '일반'} 메세지 방송 시작: ${file.base} - ${idx}`,
      email,
      zones
    )
    //////////////// 리턴 ////////////////
    res.status(200).json({ result: true, idx })

    // 사용자 사용회수 증가
    await dbUserUpdate({ email }, { $inc: { numberOfPaging: 1 } })
  } catch (error) {
    logError(
      `BL02 ${Priority ? '긴급' : '일반'} 메시지 방송 - ${error}`,
      email,
      zones
    )
    res.status(500).json({ result: false, error })
  }
})

// BL03 메시지 파일 삭제 만들어야함.
router.delete('/message', async (req, res) => {
  try {
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BL04 메시지 삭제 - ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// BL04 방송 중지
router.get('/stop', async (req, res) => {
  try {
    const { deviceId } = req.params
    const r = await dbQsysFindOne({ deviceId })
    for (let item of r.pageId) {
      // fnSendDeviceMuticast('qsys:page:stop', {
      //   deviceId,
      //   PageID: item.PageID,
      //   idx
      // })
      fnSendQsys('qsys:page:sstop', {
        deviceId,
        PageID: item.PageID,
        idx: item.idx
      })
    }
    logEvent(`방송 중지`, req.user.email, [r.name])
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BL04 방송 중지 - ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// BL05 방송 취소
router.get('/cancel', async (req, res) => {
  try {
    const { deviceId } = req.params
    const r = await dbQsysFindOne({ deviceId })
    for (let item of r.pageId) {
      // fnSendDeviceMuticast('qsys:page:cancel', {
      //   deviceId,
      //   PageID: item.PageID,
      //   idx: item.idx
      // })
      fnSendQsys('qsys:page:cancel', {
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
