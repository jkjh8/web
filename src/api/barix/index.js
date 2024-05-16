const path = require('path')
const { Worker } = require('worker_threads')
const { dbBarixFind, dbBarixUpdate, dbBarixFindOne } = require('@db/barix')
const { logError, logDebug } = require('@logger')
const axios = require('axios')
let barixInterval = null

const fnGetBarixInfo = (ipaddress) => {
  const worker = new Worker(path.join(__dirname, 'barixWorker.js'), {
    workerData: ipaddress
  })
  worker.on('message', async (data) => {
    if (data.status) {
      await dbBarixUpdate({ ipaddress }, { ...data })
    } else {
      const r = await dbBarixUpdate({ ipaddress }, { status: false })
      if (r.status) {
        logError(`Barix 정보 수집 오류 ${ipaddress}`, 'server', 'barix')
      }
    }
    worker.terminate()
  })
  worker.on('error', async (err) => {
    logError(`Barix 정보 수집 오류 ${JSON.stringify(err)}`, 'server', 'barix')
    worker.terminate()
  })
  worker.on('exit', (code) => {
    if (!code === 1) {
      logDebug(`Barix 비정상 종료 ${code}`, 'server', 'barix')
    }
  })
}

const fnGetBarixes = async () => {
  let devices = []
  try {
    devices = await dbBarixFind()
  } catch (error) {
    logError(
      `Barix DB 정보 조회 오류 ${JSON.stringify(error)}`,
      'server',
      'barix'
    )
  }
  devices.forEach(async (element) => {
    try {
      fnGetBarixInfo(element.ipaddress)
    } catch (error) {
      logError(
        `Barixes 정보 수집 오류 ${JSON.stringify(error)}`,
        'server',
        'barix'
      )
    }
  })
}

const fnStartBarix = () => {
  barixInterval = setInterval(async () => {
    try {
      await fnGetBarixes()
    } catch (error) {
      logError(
        `Barix 정보 시작 오류 ${JSON.stringify(error)}`,
        'server',
        'barix'
      )
    }
  }, gStatus.interval * 1000)
}

const fnRestartBarix = () => {
  clearInterval(barixInterval)
  fnStartBarix()
}

// rc.cgi?{c}={value}
const fnBarixRelayOn = async (arr) => {
  let promises = arr.map(async (device) => {
    if (!device) return
    try {
      await axios.get(`http://${device.ipaddress}/rc.cgi?R=1`)
    } catch (error) {
      logError(
        `Barix Relay On 오류 ${error.cause ?? error.cause}`,
        'server',
        'barix'
      )
    }
  })
  await Promise.all(promises)
}

const fnBarixRelayOff = async (arr) => {
  let promises = arr.map(async (device) => {
    if (!device) return
    try {
      await axios.get(`http://${device.ipaddress}/rc.cgi?R=0`)
    } catch (error) {
      logError(
        `Barix Relay Off 오류 ${error.cause ?? error.cause}`,
        'server',
        'barix'
      )
    }
  })
  await Promise.all(promises)
}

module.exports = {
  fnGetBarixInfo,
  fnGetBarixes,
  fnStartBarix,
  fnRestartBarix,
  fnBarixRelayOn,
  fnBarixRelayOff
}
