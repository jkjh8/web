const axios = require('axios')
const https = require('https')
const { logError } = require('@logger')

// BK01 백업
function fnBackupRequest(addr, data, method) {
  if (gStatus.mode !== 'Backup') {
    if (gStatus.backupActive) {
      if (gStatus.backupAddress) {
        axios({
          url: `http://${gStatus.backupAddress}${addr}`,
          method: method,
          data: data,
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
          timeout: 5000,
          headers: {
            backupid: gStatus.backupId
          }
        })
          .then((res) => {
            return res.data
          })
          .catch((error) => {
            return error
          })
      } else {
        return new Error('백업 서버 주소가 설정되지 않았습니다.')
      }
    }
  }
}

// BK02 백업 서버 인증
const isBackup = (req, res, next) => {
  if (req.headers && req.headers.backupid) {
    if (req.headers.backupid === gStatus.backupId) {
      return next()
    } else {
      return res.status(401).json({ result: false, message: 'Unauthorized' })
    }
  } else {
    return res.status(401).json({ result: false, message: 'Unauthorized' })
  }
}

module.exports = {
  fnBackupRequest,
  isBackup
}
