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
async function fnBackupRequest(addr, data, method) {
  try {
    if (gStatus.mode !== 'Backup') {
      if (gStatus.backupActive) {
        if (gStatus.backupAddress) {
          const res = await backupServer.request({
            url: `${gStatus.backupServer}/${addr}`,
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
    logError(`BK01 백업 요청 ${error}`, 'SERVER')
  }
}

// BK02 백업 서버 인증
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

module.exports = {
  check,
  fnBackupRequest,
  isBackup
}
