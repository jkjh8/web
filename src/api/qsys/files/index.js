const axios = require('axios')
const https = require('https')
const { fnSendPageMessage } = require('@io/client/api')
const fs = require('fs')
const FormData = require('form-data')
const { logInfo, logError, logEvent } = require('@logger')
const { dbSchFindOne } = require('@db/schedule')
const { dbSchUpdate } = require('../../../db/schedule')

// https 자체 인증서 우회
const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

// 메시지 주소 생성
const fnMakeAddr = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media/Messages`
}

// qsys에 기본 폴더 생성
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

// 파일 업로드
const fnFileUpload = async (file, ipaddress, addr, deviceId, socket) => {
  try {
    const form = new FormData()
    form.append('media', fs.createReadStream(file))
    const r = await api.post(`${fnMakeAddr(ipaddress)}/${addr}`, form, {
      headers: { ...form.getHeaders() }
    })
    if (socket) {
      fnSendPageMessage(socket, deviceId, `파일 업로드 완료`)
    }
    return { deviceId, data: r.data }
  } catch (error) {
    if (error.response && error.response.data) {
      if (socket) {
        fnSendPageMessage(
          socket,
          deviceId,
          `파일 업로드 실패: ${error.response.data.error.message ?? ''}`
        )
      }
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

const fnSyncFileSchedule = async (idx) => {
  const schedule = await dbSchFindOne({ idx })
  const { devices, file, sync } = schedule
  try {
    if (!sync) {
      let promises = devices.map(async (device) => {
        const { deviceId, ipaddress } = device
        try {
          await api.post(`${fnMakeAddr(ipaddress)}/schedule`, { name: idx })
        } catch (error) {
          //
        }
        try {
          await fnFileUpload(
            file.fullpath,
            ipaddress,
            `schedule/${idx}`,
            deviceId
          )
        } catch (error) {
          throw error
        }
      })
      await Promise.all(promises)
      await dbSchUpdate({ idx }, { $set: { sync: true } })
    }
  } catch (error) {
    logError(`Q-SYS 개별 디바이스 파일 업로드 오류`, 'server', 'schedule')
  }
}

module.exports = {
  api,
  fnMakeAddr,
  fnCheckMediaFolder,
  fnFileUpload,
  fnFileDelete,
  fnSyncFileSchedule
}
