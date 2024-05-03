const express = require('express')
const fs = require('fs')
const FormData = require('form-data')
const { logInfo, logDebug, logError, logEvent } = require('@logger')
const { dbUserFindOne } = require('@db/user')
const { dbPageFindOne } = require('@db/page')
const io = require('@io')
const { api, fnMakeAddr } = require('@api/qsys/files')
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

module.exports = router

const fnSendPageMessage = (socket, deviceId, message) => {
  return io.client.to(socket).emit('qsys:page:message', { deviceId, message })
}

const fnGetSocketId = async (email) => {
  const r = await dbUserFindOne({ email })
  return r.socketId
}

const fnFileUpload = async (file, ipaddress, addr, deviceId, socket) => {
  try {
    const stream = fs.createReadStream(file)
    const form = new FormData()
    form.append('media', stream)
    const r = await api.post(`${fnMakeAddr(ipaddress)}/${addr}`, form, {
      headers: { ...form.getHeaders() }
    })
    fnSendPageMessage(socket, deviceId, `파일 업로드 완료`)
    return { deviceId, data: r.data }
  } catch (error) {
    if (error.response && error.response.data) {
      fnSendPageMessage(
        socket,
        deviceId,
        `파일 업로드 실패: ${error.response.data.error.message ?? ''}`
      )
    }
    return { deviceId, error }
  }
}
