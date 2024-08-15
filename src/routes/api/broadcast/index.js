const express = require('express')
const { logError, logEvent } = require('@logger')
// db
const { dbPageFindOne } = require('@db/page')
//api
const { fnSendPageMessage } = require('@api/client')
const { fnSendQsys } = require('@api/qsys')
const { fnQsysFileUpload, fnQsysFileDeleteAsync } = require('@api/qsys/files')
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
    fnSendQsys(
      'qsys:page:stop',
      page.devices.map((e) => {
        return { deviceId: e.deviceId, PageID: e.PageID, idx: e.idx }
      })
    )
    res.status(200).json({ result: true })
    // 로그
    logEvent(`방송 중지 ${req.query.idx}`, req.user.email, page.zones)
  } catch (error) {
    logError(`BR01 라이브 방송 중지 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// BR02 파일 업로드
router.post('/file', async (req, res) => {
  const { email } = req.user
  try {
    const { addr, devices } = req.body
    const socketId = await fnGetSocketId(email)
    fnSendPageMessage(socketId, 'all', '파일 업로드 시작')

    // 각 디바이스에 업로드
    await Promise.all(
      devices.map(async (item) => {
        try {
          await fnQsysFileUpload({
            file: item.file.fullpath,
            ipaddress: item.ipaddress,
            addr,
            deviceId: item.deviceId,
            socket: socketId,
            user: email
          })
        } catch (error) {
          logError(`BR02 파일 업로드 ${error}`, email)
        }
      })
    )
    // 완료 리턴
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`BR02 파일 업로드 ${error}`, email)
  }
})

// BR03 방송구간 중복확인
router.put('/active', async (req, res) => {
  const { email } = req.user
  try {
    const { devices } = req.body
    const socketId = await fnGetSocketId(email)
    fnSendPageMessage(socketId, 'all', '방송구간 중복 확인')
    const r = await fnCheckActive(devices, email)
    if (r && r.length) {
      fnSendPageMessage(socketId, 'all', '방송구간 중복')
    }
    res.status(200).json({ result: true, active: r })
  } catch (error) {
    logError(`BR03 방송구간 중복확인 ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// BR04 파일 삭제
router.delete('/file', async (req, res) => {
  const { email } = req.user
  try {
    const { addr, devices } = req.body
    const promises = devices.map(async (item) => {
      await fnQsysFileDeleteAsync({
        file: item.file.base,
        ipaddress: item.ipaddress,
        addr,
        deviceId: item.deviceId,
        user: email
      })
    })
    await Promise.all(promises)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BR04 QSYS 방송 파일 삭제 ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
