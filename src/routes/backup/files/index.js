const express = require('express')
const router = express.Router()

const multer = require('multer')
const { logInfo, logError } = require('@logger')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { folder } = req.headers
    cb(null, decodeURIComponent(folder))
  },
  filename: (req, file, cb) => {
    logInfo(
      `파일 업로드(백업): ${file.fieldname.toString('utf8')}`,
      req.user.email,
      'files'
    )
    cb(null, file.fieldname.toString('utf8'))
  }
})

router.post('/', (req, res) => {
  multer({ storage }).any()(req, res, (error) => {
    if (error) {
      logError(`RF05 파일 업로드 ${error}`, email)
      return res.status(500).json({ result: false, error })
    }
    res.status(200).json({ result: true })
    // 로그
    logInfo(
      `RF05 파일 업로드 완료 ${decodeURIComponent(req.headers.folder).replace(
        gStatus.mediaFolder,
        ''
      )}`,
      email
    )
    // 업로드 된 파일을 백업 서버로도 전송
    // fnBackupRequest('/backup/files', req.files, 'POST', email)
  })
})

module.exports = router
