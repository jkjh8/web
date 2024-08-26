const axios = require('axios')
const https = require('https')
const { fnSendPageMessage } = require('@api/client')
const fs = require('fs')
const FormData = require('form-data')
const { logWarn, logError } = require('@logger')
const { dbSchFind, dbSchFindOne } = require('@db/schedule')
const { dbSchUpdate } = require('@db/schedule')
const { dbQsysFindOne, dbQsysFind, dbQsysUpdate } = require('../../../db/qsys')
const { fn } = require('moment')

// 환경변수로 node에서 허가되지 않은 인증TLS통신을 거부하지 않겠다고 설정
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// https 자체 인증서 우회
// const api = axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false
//   })
// })
const Agent = new https.Agent({ rejectUnauthorized: false })

// QF01 메시지 주소 생성
const fnMakeAddr = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media/Messages`
}

const fnMakeAddrDefault = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media`
}
// QF02 qsys에 기본 폴더 생성
const fnQsysCheckMediaFolder = async (device) => {
  try {
    fnMakeQsysMediaFolder(device, 'live')
    fnMakeQsysMediaFolder(device, 'schedule')
  } catch (error) {
    logError(
      `QF02 Q-SYS 기본폴더생성 ${device.name} - ${device.deviceId} - ${error}`,
      'SERVER'
    )
  }
}

// QF02-1 qsys에 폴더 생성
const fnMakeQsysMediaFolder = async (device, folder) => {
  try {
    await axios.post(
      `https://${device.ipaddress}/api/v0/cores/self/media/Messages`,
      { name: folder },
      { httpsAgent: Agent }
    )
  } catch (error) {
    if (error.response.data.error.message === 'Directory already exists') {
      return console.log(
        `${device.name} ${device.ipaddress} ${folder} Directory already exists`
      )
    }
    logError(
      `QF02-1 Q-SYS 기본폴더생성 ${device.name} - ${
        device.deviceId
      } - ${folder.toUpperCase()} - ${error.response.data.error.message}`,
      'SERVER'
    )
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
    const { data } = await axios.post(
      `${fnMakeAddr(ipaddress)}/${addr}`,
      form,
      {
        headers: { ...form.getHeaders() },
        httpsAgent: Agent
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
        `QF03 Q-SYS 파일업로드 - ${deviceId} - ${file.base} - ${
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
  axios
    .delete(`${fnMakeAddr(ipaddress)}/${addr}/${file}`, {
      httpsAgent: Agent
    })
    .then(async () => {
      await fnGetStrage(ipaddress)
    })
    .catch((error) => {
      logError(
        `QF04 Q-SYS 파일삭제 - ${deviceId} - ${file} - ${JSON.stringify(
          error
        )}`,
        user
      )
    })
}

// QF04-1 파일 삭제 비동기화
const fnQsysFileDeleteAsync = async (args) => {
  const { addr, ipaddress, file, deviceId, user } = args
  try {
    await axios.delete(`${fnMakeAddr(ipaddress)}/${addr}/${file}`, {
      httpsAgent: Agent
    })
    // 파일 삭제 후 스토리지 정보 갱신
    await fnGetStrage(ipaddress)
  } catch (error) {
    logError(
      `QF04-1 Q-SYS 파일삭제 - ${deviceId} - ${file} - ${JSON.stringify(
        error
      )}`,
      user
    )
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
    logError(`QF05 Q-SYS 스케줄 동기화 ${error}`, 'SERVER')
  }
}

// QF05-1 스케줄 파일 동기화
const fnQsysMakeFolderForSchedule = async (idx, deviceId, ipaddress) => {
  try {
    await axios.post(
      `${fnMakeAddr(ipaddress)}/schedule`,
      { name: idx },
      { httpsAgent: Agent }
    )
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
    const { data } = await axios.get(
      `${fnMakeAddr(device.ipaddress)}/schedule`,
      { httpsAgent: Agent }
    )
    //  data의 name중 schedules의 idx와 같은 것이 없는 것을 찾아서 삭제
    data.forEach(async (d) => {
      const find = schedules.find((s) => s.idx === d.name)
      if (!find) {
        await axios.delete(`${fnMakeAddr(device.ipaddress)}/schedule/${d.name}`)
      }
    })
  } catch (error) {
    logError(`QF06 Q-SYS 스케줄 정리 ${error}`, 'SERVER')
  }
}

// QF07 폴더 삭제
const fnQsysDeleteFolder = async (deviceId, ipaddress, folder) => {
  try {
    return await axios.delete(`${fnMakeAddr(ipaddress)}/${folder}`, {
      httpsAgent: Agent
    })
  } catch (error) {
    return new Error(error)
  }
}

// QF08 live 파일 삭제
const fnQsysDeleteLive = async (deviceId) => {
  try {
    const device = await dbQsysFindOne({ deviceId })
    const { ZoneStatus } = device
    // ZoneStatus 인장중 하나라도 active가 ture면 리턴
    const find = ZoneStatus.find((z) => z.active === true)
    if (find) return
    // 아니면 qsys의 messages/live 폴더의 파일 목록을 가져와서 하나씩 삭제
    const { data } = await axios.get(`${fnMakeAddr(device.ipaddress)}/live`, {
      httpsAgent: Agent
    })
    data.forEach(async (d) => {
      await axios.delete(`${fnMakeAddrDefault(device.ipaddress)}/${d.path}`, {
        httpsAgent: Agent
      })
    })
    logWarn(`QF08 Q-SYS LIVE 파일삭제 - ${device.name} - ${deviceId}`)
  } catch (error) {
    logError(`QF08 Q-SYS LIVE 파일삭제 - ${error}`, 'SERVER')
  }
}

// QF09 전체 큐시스 live 파일 삭제
const fnQsysDeleteLiveAll = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnQsysDeleteLive(device.deviceId)
    })
    logWarn(`QF09 Q-SYS Live 파일전체삭제`)
  } catch (error) {
    logError(`QF09 Q-SYS Live 파일전체삭제 - ${error}`, 'SERVER')
  }
}

// QF10 qsys 저장소 정보 수집
const fnGetStrage = async (ipaddress) => {
  axios
    .get(`https://${ipaddress}/api/v0/cores/self/media?meta=storage`, {
      httpsAgent: Agent
    })
    .then((res) => {
      dbQsysUpdate({ ipaddress }, { storage: res.data.meta.storage })
    })
    .catch((err) => {
      logError(`Q10 Q-SYS 저장소 정보수집 ${err}`, 'SERVER')
    })
}

module.exports = {
  fnMakeAddr,
  fnMakeAddrDefault,
  fnQsysCheckMediaFolder,
  fnQsysFileUpload,
  fnQsysFileDelete,
  fnQsysFileDeleteAsync,
  fnQsysSyncFileSchedule,
  fnQsysCheckScheduleFolder,
  fnQsysDeleteFolder,
  fnQsysDeleteLive,
  fnQsysDeleteLiveAll,
  fnGetStrage
}
