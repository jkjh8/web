const axios = require('axios')
const https = require('https')

const backupServer = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

const fnCheckBackup = () => {
  const { mode, backupActive, backupAddress } = gStatus
  if (mode === 'Backup' && backupActive && backupAddress) {
    return true
  }
  return false
}

module.exports = { backupServer, fnCheckBackup }
