const axios = require('axios')
const https = require('https')
const { fnSendPageMessage } = require('@api/client')
const fs = require('fs')
const FormData = require('form-data')
const { logError } = require('@logger')
const { dbSchFind, dbSchFindOne } = require('@db/schedule')
const { dbSchUpdate } = require('@db/schedule')
const { fnGetStrage } = require('..')

// 환경변수로 node에서 허가되지 않은 인증TLS통신을 거부하지 않겠다고 설정
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// https 자체 인증서 우회
// const api = axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false
//   })
// })

// QF01 메시지 주소 생성
const fnMakeAddr = (ipaddr) => {
  return `http://${ipaddr}/api/v0/cores/self/media/Messages`
}

// QF02 qsys에 기본 폴더 생성
const fnQsysCheckMediaFolder = async (device) => {
  const url = `http://${device.ipaddress}/api/v0/cores/self/media/Messages`
  axios
    .post(url, {
      method: 'POST'
    })
    .then((res) => {
      logInfo(`QF02 Q-SYS 기본 폴더 생성 LIVE`, 'server')
    })
    .catch((err) => {
      console.log(err)
    })
  axios
    .post(url, {
      name: 'schedule'
    })
    .then((res) => {
      logInfo(`QF02 Q-SYS 기본 폴더 생성 SCHEDULE`, 'server')
    })
    .catch((err) => {
      console.log(err)
    })
}

// QF03 파일 업로드
const fnQsysFileUpload = async (args) => {
  const { file, ipaddress, addr, deviceId, socket, user } = args
  try {
    const form = new FormData()
    // 스트림 만들기
    form.append('media', fs.createReadStream(file))
    // 파일 업로드
    const { data } = await axios.post(
      `${fnMakeAddr(ipaddress)}/${addr}`,
      form,
      {
        headers: { ...form.getHeaders() }
      }
    )
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
    throw error
  }
}

// QF04 파일 삭제
const fnQsysFileDelete = async (args) => {
  const { addr, ipaddress, file, deviceId, user } = args
  try {
    await axios.delete(`${fnMakeAddr(ipaddress)}/${addr}/${file}`)
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
      // 폴더 생성
      await fnQsysMakeFolderForSchedule(idx, deviceId, ipaddress)
      await fnQsysFileUpload({
        file: file.fullpath,
        ipaddress,
        addr: `schedule/${idx}`,
        deviceId,
        user
      })
      await fnGetStrage(ipaddress)
    })
    await Promise.all(promises)
    return await dbSchUpdate({ idx }, { $set: { sync: true } })
  } catch (error) {
    logError(`OF05 Q-SYS 스케줄 동기화`, 'server')
  }
}

// QF05-1 스케줄 파일 동기화
const fnQsysMakeFolderForSchedule = async (idx, deviceId, ipaddress) => {
  try {
    await axios.post(`${fnMakeAddr(ipaddress)}/schedule`, { name: idx })
  } catch (error) {
    if (
      error.response.data &&
      error.response.data.error.message === 'Directory already exists'
    ) {
      // Do nothing if the directory already exists
    } else {
      throw error // Rethrow the error if it's not a "Directory already exists" error
    }
  }
}

// QF06 스케줄 폴더 확인 및 사용하지 않는 폴더 삭제
const fnQsysCheckScheduleFolder = async (device, schedules) => {
  try {
    if (!schedules) {
      schedules = await dbSchFind({})
    }
    const { data } = await axios.get(`${fnMakeAddr(device.ipaddress)}/schedule`)
    //  data의 name중 schedules의 idx와 같은 것이 없는 것을 찾아서 삭제
    data.forEach(async (d) => {
      const find = schedules.find((s) => s.idx === d.name)
      if (!find) {
        await axios.delete(`${fnMakeAddr(device.ipaddress)}/schedule/${d.name}`)
      }
    })
  } catch (error) {
    logError(`OF06 Q-SYS 스케줄 정리`, 'server')
  }
}

const fnQsysDeleteFolder = async (deviceId, ipaddress, folder) => {
  try {
    return await axios.delete(`${fnMakeAddr(ipaddress)}/${folder}`)
  } catch (error) {
    logError(`OF08 Q-SYS 폴더 삭제`, 'server')
  }
}

module.exports = {
  fnMakeAddr,
  fnQsysCheckMediaFolder,
  fnQsysFileUpload,
  fnQsysFileDelete,
  fnQsysSyncFileSchedule,
  fnQsysCheckScheduleFolder,
  fnQsysDeleteFolder
}
