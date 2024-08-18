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
    logError(`Q01 전체 Q-SYS 저장소 정보수집 - ${error}`, 'SERVER')
    throw error
  }
}

// Q06 전체 데이터 송신
const fnSendAllStatusAll = async () => {
  try {
    const data = await dbQsysFindAll()
    fnSendQsys('qsys:devices', JSON.stringify(data))
    fnSendSocket('qsys:devices', JSON.stringify(data))
  } catch (error) {
    logError(`Q06 Q-SYS 데이터 전체송신 - ${error}`, 'SERVER')
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
    logError(`Q08 Q-SYS PAGESTATUS 삭제 - ${error}`, 'SERVER')
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
    logError(`Q09 Q-SYS 전체 PAGESTATUS 삭제 - ${error}`, 'SERVER')
  }
}

//Q10 SendQsys
const fnSendQsys = async (key, value) => {
  try {
    io.qsys.emit(key, value)
  } catch (error) {
    logError(`Q10 Q-SYS SOCKET - ${error}`, 'SERVER')
  }
}

module.exports = {
  getAllDeviceStorage,
  fnSendAllStatusAll,
  fnCheckPageStatus,
  fnCheckPageStatusAll,
  fnSendQsys
}
