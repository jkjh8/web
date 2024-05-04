const axios = require('axios')
const https = require('https')
const { fnSendPageMessage } = require('@io/client/api')
const fs = require('fs')
const FormData = require('form-data')
const { logInfo, logDebug, logError, logEvent } = require('@logger')

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

const fnMakeAddr = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media/Messages`
}

const fnCheckMediaFolder = async (device) => {
  try {
    await api.post(fnMakeAddr(device.ipaddress), { name: 'live' })
  } catch (error) {
    //
  }

  try {
    await api.post(fnMakeAddr(device.ipaddress), { name: 'schedule' })
  } catch (error) {
    //
  }
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
    console.log(error)
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

const fnFileDelete = async (file, ipaddress, addr, deviceId) => {
  try {
    await api.delete(`${fnMakeAddr(ipaddress)}/${addr}/${file}`)
  } catch (error) {
    //
  }
}

module.exports = {
  api,
  fnMakeAddr,
  fnCheckMediaFolder,
  fnFileUpload,
  fnFileDelete
}
