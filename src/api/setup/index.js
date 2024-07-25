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
        case 'bridge':
          gStatus.bridge.lastupdate = item.updatedAt
          break
        case 'relayOnTime':
          gStatus.relayOnTime = item.valueNum
          break
        case 'scheduler':
          if (item.auto) {
            gStatus.scheduler.auto = item.auto
          }
          if (item.active) {
            gStatus.scheduler.active = item.active
          }
          if (item.main && item.main.lastupdate) {
            gStatus.scheduler.main.lastupdate = item.lastupdate
          }
          if (item.backup && item.backup.lastupdate) {
            gStatus.scheduler.backup.lastupdate = item.lastupdate
          }
          break
        case 'ttsMode':
          gStatus.ttsMode = item.value
          break
        case 'voiceWareVoice':
          gStatus.voiceWareVoice = item.value
          break
      }
    }
    logInfo('SU02 서버 기본 세팅 데이터가 업데이트(from DB)', 'server')
  } catch (error) {
    logError(
      `SU02 서버 기본 세팅 데이터가 업데이트(from DB) ${JSON.stringify(error)}`,
      'server'
    )
  }
}
