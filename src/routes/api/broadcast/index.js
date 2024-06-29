const express = require('express')
const { logInfo, logError, logEvent } = require('@logger')
// db
const { dbUserFindOne } = require('@db/user')
const { dbPageFindOne } = require('@db/page')
const { dbQsysFind } = require('@db/qsys')
//api
const { fnSendPageMessage } = require('@api/client')
const { fnSendQsysData } = require('@api/qsys')
const { fnQsysFileUpload, fnQsysFileDelete } = require('@api/qsys/files')
const { fnGetSocketId } = require('@api/user/socket')
const { fnCheckActive } = require('@api/qsys/broadcast')

const router = express.Router()

router.use('/live', require('./live'))
router.use('/tts', require('./tts'))
router.use('/schedule', require('./schedule'))

//BR01 방송 중지
router.get('/stop', async (req, res) => {
  try {
    const page = await dbPageFindOne({ idx: req.query.idx })
    fnSendQsysData(
      'qsys:page:stop',
      page.devices.map((e) => {
        return { deviceId: e.deviceId, PageID: e.PageID, idx: e.idx }
      })
    )
    res.status(200).json({ result: true })
    // 로그
    logEvent(`방송 중지 ${req.query.idx}`, req.user.email, 'page', page.zones)
  } catch (error) {
    logError(`BR01 라이브 방송 중지 ${error}`, req.user.email, 'live')
    res.status(500).json({ result: false, error })
  }
})

// BR02 파일 업로드
router.post('/file', async (req, res) => {
  try {
    const { addr, devices } = req.body
    const socketId = await fnGetSocketId(req.user.email)
    fnSendPageMessage(socketId, 'all', '파일 업로드 시작')

    // 각 디바이스에 업로드
    const promises = devices.map(async (item) => {
      await fnQsysFileUpload({
        file: item.file.fullpath,
        ipaddress: item.ipaddress,
        addr,
        deviceId: item.deviceId,
        socket: socketId,
        user: req.user.email
      })
    })
    await Promise.all(promises)
    // 완료 리턴
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BR02 파일 업로드 ${error}`, req.user.email)
  }
})

// BR03 방송구간 중복확인
router.put('/active', async (req, res) => {
  try {
    const { devices } = req.body
    const socketId = await fnGetSocketId(req.user.email)
    fnSendPageMessage(socketId, 'all', '방송구간 중복 확인')
    const r = await fnCheckActive(devices, req.user.email)
    if (r && r.length) {
      fnSendPageMessage(socketId, 'all', '방송구간 중복')
    }
    res.status(200).json({ result: true, active: r })
  } catch (error) {
    logError(`BR03 방송구간 중복확인 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// BR04 파일 삭제
router.delete('/file', async (req, res) => {
  try {
    const { addr, devices } = req.body
    const promises = devices.map(async (item) => {
      await fnQsysFileDelete({
        file: item.file.base,
        ipaddress: item.ipaddress,
        addr,
        deviceId: item.deviceId,
        user: req.user.email
      })
    })
    await Promise.all(promises)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BR04 QSYS 방송 파일 삭제 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
