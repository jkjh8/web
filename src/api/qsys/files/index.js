const axios = require('axios')
const https = require('https')
const { fnSendPageMessage } = require('@io/client/api')
const fs = require('fs')
const FormData = require('form-data')
const { logInfo, logError, logEvent } = require('@logger')
const { dbSchFind, dbSchFindOne } = require('@db/schedule')
const { dbSchUpdate } = require('@db/schedule')
const { fnGetStrage } = require('..')

// https 자체 인증서 우회
const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

// QF01 메시지 주소 생성
const fnMakeAddr = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media/Messages`
}

// QF02 qsys에 기본 폴더 생성
const fnQsysCheckMediaFolder = async (device) => {
  try {
    await api.post(fnMakeAddr(device.ipaddress), { name: 'live' })
  } catch (error) {
    //
  }

  try {
    await api.post(fnMakeAddr(device.ipaddress), {
      name: 'schedule'
    })
  } catch (error) {
    //
  }
}

// QF03 파일 업로드
const fnQsysFileUpload = async (args) => {
  const { file, ipaddress, addr, deviceId, socket, user } = args
  try {
    const form = new FormData()
    // 스트림 만들기
    form.append('media', fs.createReadStream(file))
    // 파일 업로드
    const { data } = await api.post(`${fnMakeAddr(ipaddress)}/${addr}`, form, {
      headers: { ...form.getHeaders() }
    })
    // 파일 업로드 후 스토리지 정보 갱신
    await fnGetStrage(ipaddress)
    // 파일 업로드 완료 메시지 전송
    if (socket) {
      fnSendPageMessage(socket, deviceId, `파일 업로드 완료`)
    }
    return { deviceId, data }
  } catch (error) {
    if (error.response && error.response.data) {
      logError(
        `QF03 Q-SYS 파일 업로드 : ${deviceId} ${file.base} ${
          error.response.data.error.message ?? ''
        }`,
        user
      )
      if (socket) {
        fnSendPageMessage(
          socket,
          deviceId,
          `파일 업로드 오류: ${error.response.data.error.message ?? ''}`
        )
      }
    }
    return { deviceId, error }
  }
}

// QF04 파일 삭제
const fnQsysFileDelete = async (args) => {
  const { addr, ipaddress, file, deviceId, user } = args
  try {
    await api.delete(`${fnMakeAddr(ipaddress)}/${addr}/${file}`)
    // 파일 삭제 후 스토리지 정보 갱신
    await fnGetStrage(ipaddress)
  } catch (error) {
    logError(`QF04 Q-SYS 파일 삭제 : ${deviceId} ${file}`, user)
  }
}

// QF05 스케줄 파일 동기화
const fnQsysSyncFileSchedule = async (idx, user) => {
  const schedule = await dbSchFindOne({ idx })
  const { devices, file } = schedule
  try {
    const promises = devices.map(async (device) => {
      const { deviceId, ipaddress } = device
      try {
        await api.post(`${fnMakeAddr(ipaddress)}/schedule`, {
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
            `QF05 Q-SYS 스케줄 동기화(폴더생성) ${deviceId} ${idx}`,
            user ?? 'server'
          )
        }
      }
      try {
        await fnQsysFileUpload({
          file: file.fullpath,
          ipaddress,
          addr: `schedule/${idx}`,
          deviceId,
          user
        })
      } catch (error) {
        logError(
          `QF05 Q-SYS 스케줄 동기화(파일) ${deviceId} ${idx} ${file.base}`,
          user ?? 'server'
        )
      }

      await fnGetStrage(ipaddress)
    })
    await Promise.all(promises)
    await dbSchUpdate({ idx }, { $set: { sync: true } })
    return
  } catch (error) {
    logError(`OF05 Q-SYS 스케줄 동기화`, 'server')
  }
}

// QF06 스케줄 폴더 확인 및 사용하지 않는 폴더 삭제
const fnQsysCheckScheduleFolder = async (device, schedules) => {
  try {
    if (!schedules) {
      schedules = await dbSchFind({})
    }
    const { data } = await api.get(`${fnMakeAddr(device.ipaddress)}/schedule`)
    //  data의 name중 schedules의 idx와 같은 것이 없는 것을 찾아서 삭제
    data.forEach(async (d) => {
      const find = schedules.find((s) => s.idx === d.name)
      if (!find) {
        await api.delete(`${fnMakeAddr(device.ipaddress)}/schedule/${d.name}`)
      }
    })
  } catch (error) {
    logError(`OF06 Q-SYS 스케줄 정리`, 'server')
  }
}

module.exports = {
  api,
  fnMakeAddr,
  fnQsysCheckMediaFolder,
  fnQsysFileUpload,
  fnQsysFileDelete,
  fnQsysSyncFileSchedule,
  fnQsysCheckScheduleFolder
}
