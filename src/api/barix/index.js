const path = require('path')
const axios = require('axios')
const { Worker } = require('worker_threads')
const { logError, logDebug } = require('@logger')
// db
const { dbBarixFind, dbBarixUpdate, dbBarixFindOne } = require('@db/barix')
const { dbQsys } = require('@db/qsys')
// api
const { fnSendQsysData } = require('@api/qsys')
// io
const io = require('@io')

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
          logInfo(`B01 Barix 연결 ${ipaddress}`, 'server')
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
          logError(`B01 Barix 연결 오류 ${ipaddress}`, 'server')
        }
      }
      worker.terminate()
    })
    // 발생시
    worker.on('error', async (error) => {
      logError(`B01 Barix 정보 수집 ${error}`, 'server')
      worker.terminate()
    })

    worker.on('exit', (code) => {
      if (!code === 1) {
        // 비정상 종료시
        logDebug(`B01 Barix 비정상 종료 ${code}`, 'server')
      }
    })
  } catch (error) {
    logError(`B01 Barix 정보 수집 ${error}`, 'server')
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
    logError(`B02 Barix DB 정보 조회 ${error}`, 'server')
  }

  devices.forEach(async (element) => {
    try {
      fnGetBarixInfo(element)
    } catch (error) {
      logError(`B02 Barix 정보 수집 ${error}`, 'server')
    }
  })
}

//B03 barix 정보 수집 시작
const fnStartBarix = () => {
  barixInterval = setInterval(async () => {
    try {
      await fnGetBarixes()
      await fnSendSocketBarixInfo()
    } catch (error) {
      logError(`B03 Barix 정보 시작 ${error}`, 'server')
    }
  }, gStatus.interval * 1000)
}

const fnRestartBarix = () => {
  clearInterval(barixInterval)
  fnStartBarix()
}

//B04 릴레이 제어
// rc.cgi?{c}={value}
const fnBarixRelayOff = async (arr) => {
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
        // 릴레이 끄기
        try {
          await axios.get(`http://${ipaddress}/rc.cgi?R=0`, { timeout: 5000 })
        } catch (error) {
          logError(`B04 Barix 릴레이 끄기 ${error}`, 'server')
        }
      })
    )
  } catch (error) {
    logError(`B04 Barix 릴레이 끄기 ${error}`, 'server')
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
          logError(`B04 Barix 릴레이 켜기 ${error}`, 'server')
        }
      })
    )
  } catch (error) {
    logError(`B04 Barix 릴레이 켜기 ${error}`, 'server')
  }
}

//B05 릴레이 제어 전체 Qsys 리스트
const fnBarixesRelayOn = async (devices) => {
  try {
    return await Promise.all(devices.map((zone) => fnBarixRelayOn(zone.barix)))
  } catch (error) {
    logError(`B05 Barix 릴레이 켜기 ${error}`, 'server')
  }
}

const fnBarixesRelayOff = async (devices) => {
  try {
    return await Promise.all(devices.map((zone) => fnBarixRelayOff(zone.barix)))
  } catch (error) {
    logError(`B05 Barix 릴레이 끄기 ${error}`, 'server')
  }
}

//B06 바릭스 정보 공유
const fnSendSocketBarixInfo = async () => {
  try {
    io.client.emit('barix:devices', await dbBarixFind())
  } catch (error) {
    logError(`B06 Barix 정보 공유 ${error}`, 'server')
  }
}

//B07 바릭스 채널 변경에 따른 Qsys 채널 재설정
const fnBarixChangeQsys = async (obj) => {
  const { _id, ipaddress, port } = obj
  dbQsys
    .findOne({ 'ZoneStatus.destination': _id })
    .then((device) => {
      if (device) {
        const { deviceId, ZoneStatus } = device
        const idx = ZoneStatus.findIndex((item) => item.destination == _id)
        fnSendQsysData('qsys:device:str', {
          deviceId,
          zone: idx + 1,
          destination: _id,
          ipaddress,
          port
        })
      }
    })
    .catch((error) => {
      logError(`B07 Barix 채널 변경 ${error}`, 'server')
    })
}

module.exports = {
  fnGetBarixInfo,
  fnGetBarixes,
  fnStartBarix,
  fnRestartBarix,
  fnBarixRelayOn,
  fnBarixRelayOff,
  fnBarixesRelayOn,
  fnBarixesRelayOff,
  fnSendSocketBarixInfo,
  fnBarixChangeQsys
}
