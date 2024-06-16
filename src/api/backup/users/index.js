const { dbUserFind } = require('@db/models/user')
const { backupServer, fnCheckBackup } = require('@api/backup')
const { logInfo, logError } = require('@logger')

const fnBackupUsers = async () => {
  try {
    if (fnCheckBackup() === false) return
    const users = await dbUserFind({})
    await backupServer.put(`${gStatus.backupAddress}/backup/users/all`, {
      users
    })
  } catch (error) {
    logError(`사용자 백업 오류 ${error}`, 'server', 'user')
    throw new Error(error)
  }
}

const fnMake = async (user) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.post(`${gStatus.backupAddress}/backup/user`, { ...user })
  } catch (error) {
    logError(`사용자 백업 오류 ${error}`, 'server', 'user')
  }
}

const fnUserUpdate = async (key, value) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.put(`${gStatus.backupAddress}/backup/user`, {
      key,
      value
    })
  } catch (error) {
    logError(`사용자 백업 오류 ${error}`, 'server', 'user')
  }
}

const fnDelete = async (id) => {
  if (fnCheckBackup() === false) return
  try {
    await backupServer.delete(`${gStatus.backupAddress}/backup/user`, {
      data: { id }
    })
  } catch (error) {
    logError(`사용자 백업 오류 ${error}`, 'server', 'user')
  }
}

module.exports = { fnBackupUsers, fnMake, fnUserUpdate, fnDelete }
