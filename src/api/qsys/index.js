const axios = require('axios')
const io = require('@io')
const { logInfo, logError } = require('@logger')
const { dbQsysFindAll, dbQsysFind } = require('@db/qsys')
const { dbQsysUpdate, dbQsysFindOne } = require('../../db/qsys')

// Q01 qsys 저장소 정보 수집
const fnGetStrage = async (ipaddress) => {
  try {
    const { data } = await axios.get(
      `http://${ipaddress}/api/v0/cores/self/media?meta=storage`,
      { timeout: 5000 }
    )
    await dbQsysUpdate({ ipaddress }, { storage: data.meta.storage })
  } catch (error) {
    logError(`Q01 QSYS 저장소 정보 수집 ${error}`, 'server')
    throw error
  }
}

// Q02 전체 QSYS 저장소 정보 수집
const getAllDeviceStorage = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnGetStrage(device.ipaddress)
    })
  } catch (error) {
    logError(`Q02 전체 QSYS 저장소 정보 수집 ${error}`, 'server')
    throw error
  }
}

// Q03 Q-SYS 전체 데이터를 Socket으로 전송
const fnSendSocketStatusAll = async (socket) => {
  try {
    const qsys = await dbQsysFindAll()
    socket.emit('qsys:devices', qsys)
  } catch (error) {
    logError(`Q03 QSYS 데이터 소켓 송신 ${error}`, 'server')
  }
}

// Q04 Q-SYS 단일 데이터를 Client로 전송
const fnSendClientQsysData = async (deviceId, obj) => {
  try {
    io.client.emit('qsys:device', { deviceId, data: obj })
  } catch (error) {
    logError(`Q04 QSYS 단일 데이터 Client 송신 ${error}`, 'server', 'qsys')
  }
}

// Q05 Q-SYS 전체 데이터를 다수 호출시에도 1초에 1번만 전송
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
    io.client.emit('qsys:devices', data)
    sendClientStatusAll = setTimeout(async () => {
      if (timeoutSendClientStatusAll) {
        timeoutSendClientStatusAll = false
        io.client.emit('qsys:devices', await dbQsysFindAll())
      }
      sendClientStatusAll = null
    }, 1000)
  } catch (error) {
    logError(`Q05 QSYS 데이터 Client 송신 ${error}`, 'server')
  }
}

// Q05 Bridge로 전송
const fnSendQsysData = async (key, obj) => {
  try {
    io.bridge.emit(key, obj)
  } catch (error) {
    logError(`Q06 QSYS Bridge 전송 ${error}`, 'server')
  }
}

// Q07 전체 데이터 송신
const fnSendAllStatusAll = async () => {
  try {
    const data = await dbQsysFindAll()
    io.bridge.emit('qsys:devices', data)
    io.client.emit('qsys:devices', data)
  } catch (error) {
    logError(`Q07 QSYS 데이터 전체 송신 ${error}`, 'server')
  }
}

// Q08 Page Message 전송
const fnSendClientPageMessage = async (obj) => {
  try {
    io.client.emit('qsys:page:message', obj)
  } catch (error) {
    logError(`Q08 QSYS Page Message 전송 ${error}`, 'server')
  }
}

// Q09 Qsys db에서 ZoneStatus에 active가 활성화 된 채널이 하나도 없을 경우 PageStatus를 모두 삭제
const fnCheckPageStatus = async (deviceId) => {
  try {
    const device = await dbQsysFindOne({ deviceId })
    const active = device.ZoneStatus.filter((e) => e.active === true)
    if (active.length === 0) {
      await dbQsysUpdate({ deviceId }, { PageStatus: [] })
    }
  } catch (error) {
    logError(`Q09 QSYS Page Status 삭제 ${error}`, 'server')
  }
}

// Q10 Qsys전체를 가져와서 fnCheckPageStatus를 호출
const fnCheckPageStatusAll = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnCheckPageStatus(device.deviceId)
    })
  } catch (error) {
    logError(`Q10 QSYS 전체 Page Status 삭제 오류 ${error}`, 'server')
  }
}

module.exports = {
  fnGetStrage,
  getAllDeviceStorage,
  fnSendClientQsysData,
  fnSendSocketStatusAll,
  fnSendClientStatusAll,
  fnSendAllStatusAll,
  fnSendQsysData,
  fnSendClientPageMessage,
  fnCheckPageStatus,
  fnCheckPageStatusAll
}
