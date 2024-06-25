const path = require('path')
const { Worker } = require('worker_threads')
const { dbBarixFind, dbBarixUpdate, dbBarixFindOne } = require('@db/barix')
const { logError, logDebug } = require('@logger')
const axios = require('axios')

let barixInterval = null

//b01
const fnGetBarixInfo = async (ipaddress) => {
  try {
    const worker = new Worker(path.join(__dirname, 'barixWorker.js'), {
      workerData: ipaddress
    })

    worker.on('message', async (data) => {
      if (data.status) {
        await dbBarixUpdate(
          { ipaddress },
          { ...data, active: true, reconnect: 0 }
        )
      } else {
        // 장비 상태가 false일 경우 reconnect 증가
        const device = await dbBarixFindOne({ ipaddress })
        // db 연결 해지 재접속 업데이트
        await dbBarixUpdate(
          { ipaddress },
          { status: false, reconnect: device.reconnect + 1 }
        )
        // 로그
        logError(`B01 Barix 정보 수집 ${ipaddress}`, 'server')
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
  } catch (error) {
    logError(`B02 Barix DB 정보 조회 ${error}`, 'server')
  }
  devices.forEach(async (element) => {
    try {
      fnGetBarixInfo(element.ipaddress)
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
          await axios.get(`http://${ipaddress}/rc.cgi?R=0`)
        } catch (error) {
          logError(`B04 Barix 릴레이 끄기 ${error}`, 'server')
        }
      })
    )
  } catch (error) {
    logError(`Barix 릴레이 끄기 ${error}`, 'server')
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
          await axios.get(`http://${ipaddress}/rc.cgi?R=1`)
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

module.exports = {
  fnGetBarixInfo,
  fnGetBarixes,
  fnStartBarix,
  fnRestartBarix,
  fnBarixRelayOn,
  fnBarixRelayOff,
  fnBarixesRelayOn,
  fnBarixesRelayOff
}
