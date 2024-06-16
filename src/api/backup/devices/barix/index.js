const { backupServer, fnCheckBackup } = require('@api/backup')
const { logInfo, logError } = require('@logger')

const fnMake = async (device) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.post(`${gStatus.backupAddress}/backup/devices/barix`, {
      ...device
    })
  } catch (error) {
    logError(`Barix 백업 오류 ${error}`, 'server', 'barix')
  }
}

const fnBarixUpdate = async (key, value) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.put(`${gStatus.backupAddress}/backup/devices/barix`, {
      key,
      value
    })
  } catch (error) {
    logError(`Barix 백업 오류 ${error}`, 'server', 'barix')
  }
}

const fnDelete = async (id) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.delete(`${gStatus.backupAddress}/backup/devices/barix`, {
      data: { id }
    })
  } catch (error) {
    logError(`Barix 백업 오류 ${error}`, 'server', 'barix')
  }
}

module.exports = {
  fnMake,
  fnBarixUpdate,
  fnDelete
}
