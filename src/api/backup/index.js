const axios = require('axios')
const https = require('https')
const { logError } = require('@logger')

const backupServer = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

function check() {
  console.log('check')
}

// BK01 백업
function fnBackupRequest(addr, data, method) {
  console.log('fnBackupRequest', addr, data, method)
  return new Promise(async (resolve, reject) => {
    try {
      if (gStatus.mode !== 'Backup') {
        if (gStatus.backupActive) {
          if (gStatus.backupAddress) {
            const res = await backupServer.request({
              url: `http://${gStatus.backupAddress}${addr}`,
              method: method,
              data: data,
              headers: {
                backupId: gStatus.backupId
              }
            })
            resolve(res.data)
          } else {
            reject(new Error('백업 서버 주소가 설정되지 않았습니다.'))
          }
        }
      }
    } catch (error) {
      reject(error)
    }
  })
}

// BK02 백업 서버 인증
const isBackup = (req, res, next) => {
  if (req.headers && req.headers.backupid) {
    if (req.headers.backupid === gStatus.backupId) {
      next()
    } else {
      res.status(401).json({ result: false, message: 'Unauthorized' })
    }
  } else {
    res.status(401).json({ result: false, message: 'Unauthorized' })
  }
}

module.exports = {
  check,
  fnBackupRequest,
  isBackup
}
