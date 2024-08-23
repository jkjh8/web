const express = require('express')
const router = express.Router()
const fs = require('fs')

const multer = require('multer')
const { logInfo, logError } = require('@logger')

// BF01 파일 목록 조회
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = decodeURIComponent(req.headers.folder)
    const exists = fs.existsSync(folder)
    if (!exists) {
      fs.mkdirSync(folder, { recursive: true })
    }
    cb(null, decodeURIComponent(folder))
  },
  filename: (req, file, cb) => {
    logInfo(
      `BF01 파일 업로드(백업): ${file.originalname.toString('utf8')}`,
      'SERVER'
    )
    cb(null, file.originalname.toString('utf8'))
  }
})

// BF02 파일 업로드
router.post('/', (req, res) => {
  multer({ storage }).any()(req, res, (error) => {
    if (error) {
      logError(`BF02 파일 업로드 - ${JSON.stringify(error)}`, 'backup')
      return res.status(500).json({ result: false, error })
    }
    res.status(200).json({ result: true })
    // 로그
    logInfo(
      `BF02 파일 업로드 완료 - ${decodeURIComponent(req.headers.folder).replace(
        gStatus.mediaFolder,
        ''
      )}`,
      'SERVER'
    )
    // 업로드 된 파일을 백업 서버로도 전송
    // fnBackupRequest('/backup/files', req.files, 'POST', email)
  })
})

// BF03 파일 삭제
router.delete('/', (req, res) => {
  try {
    const { list } = req.body
    for (let file of list) {
      if (fs.existsSync(file.fullpath)) {
        const stat = fs.statSync(file.fullpath)
        if (stat.isDirectory()) {
          fnRFAF(fnGetFiles(file.fullpath))
          fs.rmdirSync(file.fullpath)
        } else {
          fs.unlinkSync(file.fullpath)
        }
      }
    }
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BF03 파일 삭제 - ${JSON.stringify(error)}`, 'SERVER')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
