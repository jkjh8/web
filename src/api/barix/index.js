const path = require('path')
const axios = require('axios')
const { Worker } = require('worker_threads')
const { logError, logDebug } = require('@logger')
// db
const { dbBarixFind, dbBarixUpdate, dbBarixFindOne } = require('@db/barix')
const { dbQsys, dbQsysFindOne, fnSendQsys } = require('@db/qsys')
// api

let barixInterval = null

//b01
const fnGetBarixInfo = async (device) => {
  try {
    const worker = new Worker(path.join(__dirname, 'barixWorker.js'), {
      workerData: device.ipaddress
    })

    // 워커로부터 메시지를 받았을 때
    worker.on('message', async (data) => {
      // 장치로 부터 상태 확인
      if (data.status) {
        await dbBarixUpdate(
          { ipaddress: device.ipaddress },
          { ...data, status: true, reconnect: 0 }
        )
        // 상태 변경이 있을 때만 로그 기록
        if (device.status === false) {
          logInfo(`B01 BARIX 연결 - ${ipaddress}`, 'SERVER')
        }
      } else {
        // 장비 상태가 false일 경우 reconnect 증가
        // db 연결 해지 재접속 업데이트
        await dbBarixUpdate(
          { ipaddress: device.ipaddress },
          { status: false, reconnect: device.reconnect + 1 }
        )
        // 상태 변경이 있을 때만 로그 기록
        if (device.status === true) {
          logError(`B01 BARIX 연결 - ${ipaddress}`, 'SERVER')
        }
      }
      worker.terminate()
    })
    // 발생시
    worker.on('error', async (error) => {
      logError(`B01 BARIX 정보 수집 - ${error}`, 'SERVER')
      worker.terminate()
    })

    worker.on('exit', (code) => {
      if (!code === 1) {
        // 비정상 종료시
        logDebug(`B01 BARIX 비정상 종료 - ${code}`, 'SERVER')
      }
    })
  } catch (error) {
    logError(`B01 BARIX 정보 수집 - ${error}`, 'SERVER')
  }
}

//B02 모든 barix 정보 수집
const fnGetBarixes = async () => {
  let devices = []
  try {
    devices = await dbBarixFind()
    for (let device of devices) {
      fnGetBarixInfo(device)
    }
  } catch (error) {
    logError(`B02 BARIX DB 정보 조회 - ${error}`, 'SERVER')
  }

  devices.forEach(async (element) => {
    try {
      fnGetBarixInfo(element)
    } catch (error) {
      logError(`B02 BARIX 정보 수집 - ${error}`, 'SERVER')
    }
  })
}

//B04 릴레이 제어
// rc.cgi?{c}={value}
const fnBarixRelayOff = async (device) => {
  try {
    const currentDevice = await dbQsysFindOne({ deviceId: device.deviceId })
    const ZoneStatus = currentDevice.ZoneStatus

    for (let i = 0; i < device.barix.length; i++) {
      if (device.barix[i] === null) return
      if (ZoneStatus[i].Active) return
      let ipaddress
      if (device.barix[i].ipaddress) {
        ipaddress = device.barix[i].ipaddress
      } else {
        const barix = await dbBarixFindOne({ _id: device.barix[i] })
        ipaddress = barix.ipaddress
      }
      // 릴레이 끄기
      try {
        await axios.get(`http://${ipaddress}/rc.cgi?R=0`, { timeout: 5000 })
      } catch (error) {
        logError(`B04 BARIX 릴레이 끄기 - ${error}`, 'SERVER')
      }
    }
  } catch (error) {
    logError(`B04 BARIX 릴레이 끄기 - ${error}`, 'SERVER')
  }
}

const fnBarixRelayOn = async (arr) => {
  try {
    await Promise.all(
      arr.map(async (device) => {
        if (!device) return
        let ipaddress
        // ipaddress 찾기
        if (device.ipaddress) {
          ipaddress = device.ipaddress
        } else {
          const barix = await dbBarixFindOne({ _id: device })
          ipaddress = barix.ipaddress
        }
        try {
          await axios.get(`http://${ipaddress}/rc.cgi?R=1`, { timeout: 5000 })
        } catch (error) {
          logError(`B04 BARIX 릴레이 켜기 - ${error}`, 'SERVER')
        }
      })
    )
  } catch (error) {
    logError(`B04 BARIX 릴레이 켜기 - ${error}`, 'SERVER')
  }
}

//B05 릴레이 제어 전체 Qsys 리스트
const fnBarixesRelayOn = async (devices) => {
  try {
    return await Promise.all(devices.map((zone) => fnBarixRelayOn(zone.barix)))
  } catch (error) {
    logError(`B05 BARIX 릴레이 켜기 - ${error}`, 'SERVER')
  }
}

const fnBarixesRelayOff = async (devices) => {
  try {
    return await Promise.all(devices.map((zone) => fnBarixRelayOff(zone.barix)))
  } catch (error) {
    logError(`B05 BARIX 릴레이 끄기 - ${error}`, 'SERVER')
  }
}

//B07 바릭스 채널 변경에 따른 Qsys 채널 재설정
const fnBarixChangeQsys = async (obj) => {
  try {
    const { _id, ipaddress, port } = obj
    const device = await dbQsys.findOne({ 'ZoneStatus.destination': _id })
    if (device) {
      const { deviceId, ZoneStatus } = device
      const idx = ZoneStatus.findIndex((item) => item.destination == _id)
      fnSendQsys('qsys:device:str', {
        deviceId,
        zone: idx + 1,
        destination: _id,
        ipaddress,
        port
      })
    }
  } catch (error) {
    logError(`B07 BARIX 채널 변경 - ${error}`, 'SERVER')
  }
}

module.exports = {
  fnGetBarixInfo,
  fnGetBarixes,
  fnBarixRelayOn,
  fnBarixRelayOff,
  fnBarixesRelayOn,
  fnBarixesRelayOff,
  fnBarixChangeQsys
}
