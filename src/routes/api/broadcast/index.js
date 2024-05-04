const express = require('express')
const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { dbUserFindOne } = require('@db/user')
const { dbPageFindOne } = require('@db/page')
const io = require('@io')
const { fnFileUpload, fnFileDelete } = require('@api/qsys/files')
const { fnSendPageMessage } = require('@io/client/api')
const router = express.Router()

router.use('/live', require('./live'))

const fnGetSocketId = async (email) => {
  const r = await dbUserFindOne({ email })
  return r.socketId
}

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

router.post('/file', async (req, res) => {
  try {
    const { addr, devices } = req.body
    const socketId = await fnGetSocketId(req.user.email)
    fnSendPageMessage(socketId, 'all', '파일 업로드 시작')

    // 각 디바이스에 업로드
    const promises = devices.map(async (item) => {
      await fnFileUpload(
        item.file.fullpath,
        item.ipaddress,
        addr,
        item.deviceId,
        socketId
      )
    })
    await Promise.all(promises)
    // 완료 리턴
    res.status(200).json({ result: true })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: false, error })
  }
})

router.delete('/file', async (req, res) => {
  try {
    const { addr, devices } = req.body
    const promises = devices.map(async (item) => {
      await fnFileDelete(item.file.base, item.ipaddress, addr, item.deviceId)
    })
    await Promise.all(promises)
    res.status(200).json({ result: true })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
