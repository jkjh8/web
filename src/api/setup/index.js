const { dbSetupFind } = require('@db/setup')
const { logInfo, logError } = require('@logger')
const { gStatus } = require('../../defaultVal')

// su02
module.exports = async function () {
  try {
    const docs = await dbSetupFind()
    for (let item of docs) {
      switch (item.key) {
        case 'ttsAddress':
          gStatus.ttsAddress = item.value
          break
        case 'interval':
          gStatus.interval = item.valueNum
          break
        case 'gainStep':
          gStatus.gainStep = item.valueNum
          break
        case 'mode':
          gStatus.mode = item.value
          break
        case 'backupId':
          gStatus.backupId = item.value
          break
        case 'backupAddress':
          gStatus.backupAddress = item.value
          break
        case 'voice':
          gStatus.voice = item.value
          break
        case 'backupActive':
          gStatus.backupActive = item.valueBoolean
          break
        case 'relayOnTime':
          gStatus.relayOnTime = item.valueNum
          break
        case 'schedulerMain':
          gStatus.schedulerMain = item.value
          break
        case 'schedulerBackup':
          gStatus.schedulerBackup = item.value
          break
        case 'schedulerAuto':
          gStatus.schedulerAuto = item.valueBoolean
          break
        case 'schedulerActive':
          gStatus.schedulerActive = item.value
          break
        case 'ttsMode':
          gStatus.ttsMode = item.value
          break
        case 'voiceWareVoice':
          gStatus.voiceWareVoice = item.value
          break
        case 'backupFile':
          gStatus.backupFile = item.valueBoolean
          break
        case 'activeMode':
          gStatus.activeMode = item.value
          break
        case 'qsys':
          gStatus.qsys = item.value
          break
        case 'qsysConnected':
          gStatus.qsysConnected = item.valueBoolean
          break
        case 'barix':
          gStatus.barix = item.value
          break
        case 'blockIp':
          gStatus.blockIp = item.valueBoolean
          break
      }
    }
    // logInfo('SU02 서버 기본 세팅 데이터 업데이트(from DB)', 'SERVER')
  } catch (error) {
    logError(`SU02 서버 기본 세팅 데이터 업데이트(from DB) ${error}`, 'SERVER')
  }
}
