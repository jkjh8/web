const axios = require('axios')
const io = require('@io')
const { logInfo, logError } = require('@logger')
const { dbQsysFindAll, dbQsysFind } = require('@db/qsys')
const { dbQsysUpdate, dbQsysFindOne } = require('../../db/qsys')

// qsys 저장소 정보 수집
const fnGetStrage = async (ipaddress) => {
  try {
    const { data } = await axios.get(
      `http://${ipaddress}/api/v0/cores/self/media?meta=storage`
    )
    await dbQsysUpdate({ ipaddress }, { storage: data.meta.storage })
  } catch (error) {
    logError(`QSYS 저장소 정보 수집 오류 ${error}`, 'server', 'qsys')
  }
}

// 전체 QSYS 저장소 정보 수집
const getAllDeviceStorage = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnGetStrage(device.ipaddress)
    })
  } catch (error) {
    logError(`전체 QSYS 저장소 정보 수집 오류 ${error}`, 'server', 'qsys')
  }
}

// Q-SYS 전체 데이터를 Socket으로 전송
const fnSendSocketStatusAll = async (socket) => {
  try {
    const qsys = await dbQsysFindAll()
    socket.emit('qsys:devices', qsys)
  } catch (error) {
    logError(`QSYS 데이터 소켓 송신 오류 ${error}`, 'server', 'qsys')
  }
}

// Q-SYS 단일 데이터를 Client로 전송
const fnSendClientQsysData = async (deviceId, obj) => {
  try {
    io.client.emit('qsys:device', { deviceId, data: obj })
  } catch (error) {
    logError(`QSYS 단일 데이터 Client 송신 오류 ${error}`, 'server', 'qsys')
  }
}

// Q-SYS 전체 데이터를 다수 호출시에도 1초에 1번만 전송
let sendClientStatusAll = null
const timeoutSendClientStatusAll = false
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
    logError(`QSYS 데이터 Client 송신 오류 ${error}`, 'server', 'qsys')
  }
}

// Bridge로 전송
const fnSendQsysData = async (key, obj) => {
  try {
    io.bridge.emit(key, obj)
  } catch (error) {
    logError(`Bridge 전송 오류 ${error}`, 'server', 'bridge')
  }
}

// 전체 데이터 송신
const fnSendAllStatusAll = async () => {
  try {
    const data = await dbQsysFindAll()
    io.bridge.emit('qsys:devices', data)
    io.client.emit('qsys:devices', data)
  } catch (error) {
    logError(`QSYS 데이터 전체 송신 오류 ${error}`, 'server', 'qsys')
  }
}

// Page Message 전송
const fnSendClientPageMessage = async (obj) => {
  try {
    io.client.emit('qsys:page:message', obj)
  } catch (error) {
    logError(`QSYS Page message 전송 오류 ${error}`, 'server', 'qsys')
  }
}

// Qsys db에서 ZoneStatus에 active가 활성화 된 채널이 하나도 없을 경우 PageStatus를 모두 삭제
const fnCheckPageStatus = async (deviceId) => {
  try {
    const device = await dbQsysFindOne({ deviceId })
    const active = device.ZoneStatus.filter((e) => e.active === true)
    if (active.length === 0) {
      await dbQsysUpdate({ deviceId }, { PageStatus: [] })
    }
  } catch (error) {
    logError(`QSYS Page Status 삭제 오류 ${error}`, 'server', 'qsys')
  }
}

// Qsys전체를 가져와서 fnCheckPageStatus를 호출
const fnCheckPageStatusAll = async () => {
  try {
    const qsys = await dbQsysFind()
    qsys.forEach(async (device) => {
      await fnCheckPageStatus(device.deviceId)
    })
  } catch (error) {
    logError(`QSYS 전체 Page Status 삭제 오류 ${error}`, 'server', 'qsys')
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
  fnCheckPageStatus
}
