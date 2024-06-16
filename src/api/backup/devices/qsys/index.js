const { backupServer, fnCheckBackup } = require('@api/backup')
const { logInfo, logError } = require('@logger')

const fnMake = async (device) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.post(`${gStatus.backupAddress}/backup/devices/qsys`, {
      ...device
    })
  } catch (error) {
    logError(`Qsys 백업 오류 ${error}`, 'server', 'qsys')
  }
}

const fnQsysUpdate = async (key, value) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.put(`${gStatus.backupAddress}/backup/devices/qsys`, {
      key,
      value
    })
  } catch (error) {
    logError(`Qsys 백업 오류 ${error}`, 'server', 'qsys')
  }
}

const fnDelete = async (id) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.delete(`${gStatus.backupAddress}/backup/devices/qsys`, {
      data: { id }
    })
  } catch (error) {
    logError(`Qsys 백업 오류 ${error}`, 'server', 'qsys')
  }
}

const fnQsysBulkWrite = async (arr) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.put(
      `${gStatus.backupAddress}/backup/devices/qsys/bulk`,
      {
        arr
      }
    )
  } catch (error) {
    logError(`Qsys 백업 오류 ${error}`, 'server', 'qsys')
  }
}

module.exports = {
  fnMake,
  fnQsysUpdate,
  fnDelete,
  fnQsysBulkWrite
}
