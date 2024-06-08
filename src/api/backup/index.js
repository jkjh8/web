const axios = require('axios')
const https = require('https')
const { logInfo, logError } = require('@logger')
const { dbUserFind, dbUserUpdate, dbUserRemove } = require('@db/user')

const backupServer = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

const fnBackupUsers = async (user = 'server') => {
  try {
    const users = await dbUserFind({})
    await backupServer.put(`${gStatus.backupAddress}/api/users`, { users })
    logInfo(`사용자 백업 완료`, user, 'user')
  } catch (error) {
    logError(`사용자 백업 오류 ${error}`, user, 'user')
    throw new Error(error)
  }
}

module.exports = { backupServer, fnBackupUsers }
