const { logError } = require('@logger')
const {
  dbQsysFindAll,
  dbQsysFind,
  dbQsysUpdate,
  dbQsysFindOne
} = require('@db/qsys')
const { fnGetStrage } = require('./files')
const { fnSendSocket } = require('@api/client')
const io = require('@io')

// Q01 전체 QSYS 저장소 정보 수집
const getAllDeviceStorage = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnGetStrage(device.ipaddress)
    })
  } catch (error) {
    logError(`Q01 전체 QSYS 저장소 정보 수집 ${error}`, 'SERVER')
    throw error
  }
}

// Q02 Q-SYS 전체 데이터를 Socket으로 전송
const fnSendSocketStatusAll = async (socket) => {
  try {
    const qsys = await dbQsysFindAll()
    socket.emit('qsys:devices', qsys)
  } catch (error) {
    logError(`Q02 QSYS 데이터 소켓 송신 ${error}`, 'SERVER')
  }
}

// Q03 Q-SYS 단일 데이터를 Client로 전송
const fnSendClientQsysData = async (deviceId, obj) => {
  try {
    fnSendSocket('qsys:device', { deviceId, data: obj })
  } catch (error) {
    logError(`Q03 QSYS 단일 데이터 Client 송신 ${error}`, 'SERVER', 'qsys')
  }
}

const fnSendClientZoneStatus = async (deviceId, ZoneStatus) => {
  try {
    fnSendSocket('qsys:ZoneStatus', { deviceId, ZoneStatus })
  } catch (error) {
    logError(`Q03 QSYS 단일 지역 데이터 Client 송신 ${error}`, 'SERVER', 'qsys')
  }
}

// Q04 Q-SYS 전체 데이터를 다수 호출시에도 1초에 1번만 전송
let sendClientStatusAll = null
let timeoutSendClientStatusAll = false
const fnSendClientStatusAll = async () => {
  try {
    // io로 data 전송, 1초이내에 호출이 있으면 1초에 1번만 전송
    if (sendClientStatusAll) {
      timeoutSendClientStatusAll = true
      return
    }

    const data = await dbQsysFindAll()
    fnSendSocket('qsys:devices', data)
    sendClientStatusAll = setTimeout(async () => {
      if (timeoutSendClientStatusAll) {
        timeoutSendClientStatusAll = false
        fnSendSocket('qsys:devices', await dbQsysFindAll())
      }
      sendClientStatusAll = null
    }, 1000)
  } catch (error) {
    logError(`Q04 QSYS 데이터 Client 송신 ${error}`, 'SERVER')
  }
}

// Q06 전체 데이터 송신
const fnSendAllStatusAll = async () => {
  try {
    const data = await dbQsysFindAll()
    fnSendQsys('qsys:devices', data)
    fnSendSocket('qsys:devices', data)
  } catch (error) {
    logError(`Q06 QSYS 데이터 전체 송신 ${error}`, 'SERVER')
  }
}

// Q07 Page Message 전송
const fnSendClientPageMessage = async (obj) => {
  try {
    fnSendSocket('qsys:page:message', obj)
  } catch (error) {
    logError(`Q07 QSYS Page Message 전송 ${error}`, 'SERVER')
  }
}

// Q08 Qsys db에서 ZoneStatus에 active가 활성화 된 채널이 하나도 없을 경우 PageStatus를 모두 삭제
const fnCheckPageStatus = async (deviceId) => {
  try {
    const device = await dbQsysFindOne({ deviceId })
    const active = device.ZoneStatus.filter((e) => e.active === true)
    if (active.length === 0) {
      await dbQsysUpdate({ deviceId }, { PageStatus: [] })
    }
  } catch (error) {
    logError(`Q08 QSYS Page Status 삭제 ${error}`, 'SERVER')
  }
}

// Q09 Qsys전체를 가져와서 fnCheckPageStatus를 호출
const fnCheckPageStatusAll = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnCheckPageStatus(device.deviceId)
    })
  } catch (error) {
    logError(`Q09 QSYS 전체 Page Status 삭제 오류 ${error}`, 'SERVER')
  }
}

//Q10 SendQsys
const fnSendQsys = async (key, value) => {
  try {
    io.qsys.emit(key, value)
  } catch (error) {
    logError(`Q10 Qsys Socket ${error}`, 'SERVER')
  }
}

module.exports = {
  getAllDeviceStorage,
  fnSendClientQsysData,
  fnSendSocketStatusAll,
  fnSendClientStatusAll,
  fnSendAllStatusAll,
  fnSendClientPageMessage,
  fnCheckPageStatus,
  fnCheckPageStatusAll,
  fnSendClientZoneStatus,
  fnSendQsys
}
