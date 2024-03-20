const { dbSetupFind, dbSetupUpdate } = require('@db/setup')
const { logInfo, logError, logDebug } = require('@logger')
const { fnStartBarix, fnRestartBarix } = require('@api/barix')
const { gStatus } = require('../../defaultVal')

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
      }
    }
    logDebug(
      '서버 기본 세팅 데이터가 업데이트 되었습니다(from DB)',
      'server',
      'server'
    )
  } catch (error) {
    logError(
      `서버 초기값 갱신 오류(from DB) ${JSON.stringify(error)}`,
      'server',
      'sever'
    )
  }
}
