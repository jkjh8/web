const axios = require('axios')
const https = require('https')
const { fnSendPageMessage } = require('@io/client/api')
const fs = require('fs')
const FormData = require('form-data')
const { logInfo, logError, logEvent } = require('@logger')
const { dbSchFind, dbSchFindOne } = require('@db/schedule')
const { dbSchUpdate } = require('../../../db/schedule')

// https 자체 인증서 우회
const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

// 메시지 주소 생성
const fnQsysMakeMessageAddr = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media/Messages`
}

// qsys에 기본 폴더 생성
const fnQsysCheckMediaFolder = async (device) => {
  try {
    await api.post(fnQsysMakeMessageAddr(device.ipaddress), { name: 'live' })
  } catch (error) {
    //
  }

  try {
    await api.post(fnQsysMakeMessageAddr(device.ipaddress), {
      name: 'schedule'
    })
  } catch (error) {
    //
  }
}

// 파일 업로드
const fnQsysFileUpload = async (file, ipaddress, addr, deviceId, socket) => {
  try {
    const form = new FormData()
    form.append('media', fs.createReadStream(file))
    const r = await api.post(
      `${fnQsysMakeMessageAddr(ipaddress)}/${addr}`,
      form,
      {
        headers: { ...form.getHeaders() }
      }
    )
    if (socket) {
      fnSendPageMessage(socket, deviceId, `파일 업로드 완료`)
    }
    return { deviceId, data: r.data }
  } catch (error) {
    if (error.response && error.response.data) {
      logError(
        `Q-SYS 파일 업로드 실패: ${deviceId} ${file.base} ${
          error.response.data.error.message ?? ''
        }`,
        'server',
        'qsys'
      )
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

const fnQsysFileDelete = async (file, ipaddress, addr, deviceId) => {
  try {
    await api.delete(`${fnQsysMakeMessageAddr(ipaddress)}/${addr}/${file}`)
  } catch (error) {
    //
  }
}

const fnQsysSyncFileSchedule = async (idx) => {
  const schedule = await dbSchFindOne({ idx })
  const { devices, file, sync } = schedule
  try {
    if (sync) {
      const promises = devices.map(async (device) => {
        const { deviceId, ipaddress } = device
        try {
          await api.post(`${fnQsysMakeMessageAddr(ipaddress)}/schedule`, {
            name: idx
          })
        } catch (error) {
          if (
            error.response.data &&
            error.response.data.error.message === 'Directory already exists'
          ) {
            //
          } else {
            logError(
              `Q-SYS 개별 디바이스 스케줄 폴더 생성 오류 ${deviceId} ${idx}`,
              'server',
              'schedule'
            )
          }
        }
        try {
          await fnQsysFileUpload(
            file.fullpath,
            ipaddress,
            `schedule/${idx}`,
            deviceId
          )
        } catch (error) {
          logError(
            `Q-SYS 개별 디바이스 스케줄 파일 업로드 오류 ${deviceId} ${idx} ${file.base}`,
            'server',
            'schedule'
          )
        }
      })
      await Promise.all(promises)
      await dbSchUpdate({ idx }, { $set: { sync: true } })
    }
    return
  } catch (error) {
    logError(`Q-SYS 개별 디바이스 파일 업로드 오류`, 'server', 'schedule')
  }
}

// 스케줄 폴더 확인 및 사용하지 않는 폴더 삭제
const fnQsysCheckScheduleFolder = async (device, schedules) => {
  try {
    if (!schedules) {
      schedules = await dbSchFind({})
    }
    const { data } = await api.get(
      `${fnQsysMakeMessageAddr(device.ipaddress)}/schedule`
    )
    //  data의 name중 schedules의 idx와 같은 것이 없는 것을 찾아서 삭제
    data.forEach(async (d) => {
      const find = schedules.find((s) => s.idx === d.name)
      if (!find) {
        await api.delete(
          `${fnQsysMakeMessageAddr(device.ipaddress)}/schedule/${d.name}`
        )
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  api,
  fnQsysMakeMessageAddr,
  fnQsysCheckMediaFolder,
  fnQsysFileUpload,
  fnQsysFileDelete,
  fnQsysSyncFileSchedule,
  fnQsysCheckScheduleFolder
}
