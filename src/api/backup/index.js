const axios = require('axios')
const https = require('https')
const fs = require('fs')
const FormData = require('form-data')

const { logError } = require('@logger')
const { gStatus } = require('../../defaultVal')
const { fnGetFileFolderAll } = require('@api/files')

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

// BK03 백업에 업로드
const fnBackupUploader = (file, folder) => {
  if (gStatus.mode === 'Backup') return
  if (gStatus.backupFile === false) return
  if (gStatus.backupActive === false) return
  if (gStatus.backupAddress) {
    const form = new FormData()
    form.append('media', fs.createReadStream(file))
    axios
      .post(`http://${gStatus.backupAddress}/backup/files`, form, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: { ...form.getHeaders(), folder, backupid: gStatus.backupId }
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        logError(`BK03 백업 파일 업로드`)
      })
  }
}

// BK04 백업에 파일 삭제
const fnBackupFileFolderDelete = (list) => {
  if (gStatus.mode === 'Backup') return
  if (gStatus.backupFile === false) return
  if (gStatus.backupActive === false) return
  if (gStatus.backupAddress) {
    axios
      .delete(`http://${gStatus.backupAddress}/backup/files`, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: { backupid: gStatus.backupId },
        data: { list }
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => {
        logError(`BK04 백업 파일 삭제`)
      })
  }
}

// BK05 전체 파일 백업 서버로 복사
const fnBackupFilesNow = async () => {
  return new Promise((resolve, reject) => {
    try {
      const list = fnGetFileFolderAll(gStatus.mediaFolder)
      for (const item of list) {
        if (!item.isDirectory) {
          fnBackupUploader(item.path, item.folder)
        }
      }
      resolve()
    } catch (error) {
      reject(new Error(error))
    }
  })
}

module.exports = {
  fnBackupRequest,
  isBackup,
  fnBackupUploader,
  fnBackupFileFolderDelete,
  fnBackupFilesNow
}
