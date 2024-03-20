const path = require('path')
const { Worker } = require('worker_threads')
const { dbBarixFind, dbBarixUpdate } = require('@db/barix')
const { logError, logDebug } = require('@logger')

let barixInterval = null

const fnGetBarixInfo = (ipaddr) => {
  const worker = new Worker(path.join(__dirname, 'barixWorker.js'), {
    workerData: ipaddr
  })
  worker.on('message', async (data) => {
    await dbBarixUpdate({ ipaddress: ipaddr }, { ...data })
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
  const devices = await dbBarixFind()
  devices.forEach((element) => {
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

module.exports = { fnGetBarixInfo, fnGetBarixes, fnStartBarix, fnRestartBarix }
