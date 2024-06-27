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
const fnBackupRequest = async (addr, data, method) => {
  try {
    if (gStatus.mode !== 'Backup') {
      if (gStatus.backupActive) {
        if (gStatus.backupAddress) {
          const res = await backupServer.request({
            url: addr,
            method: method,
            data: data,
            headers: {
              backupId: gStatus.backupId
            }
          })
          return res.data
        } else {
          logError('백업 서버 주소가 설정되지 않았습니다.', 'SERVER')
        }
      }
    }
  } catch (error) {
    return error
  }
}

// const fnBackupPost = async (addr, data) => {
//   return fnBackupRequest(addr, data, 'POST')
// }

// const fnBackupPut = async (addr, data) => {
//   return fnBackupRequest(addr, data, 'PUT')
// }

const isBackup = (req, res, next) => {
  if (req.headers && req.headers.backupId) {
    if (req.headers.backupId === gStatus.backupId) {
      next()
    } else {
      res.status(401).json({ result: false, message: 'Unauthorized' })
    }
  } else {
    res.status(401).json({ result: false, message: 'Unauthorized' })
  }
}

module.exports = { isBackup, backupServer, fnCheckBackup, fnBackupRequest }
