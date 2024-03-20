const express = require('express')
const path = require('path')
const fs = require('fs')
const { isAdmin } = require('@api/user')
const { logDebug, logError } = require('@logger')

const uploader = require('./uploader')
const {
  fnGFolder,
  fnCMFolder,
  fnGFolders,
  fnGFiles,
  fnGFSize,
  fnRTemp,
  fnRFAF
} = require('@api/files')

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const { folder } = req.query
    res.status(200).json({ files: fnGFiles(folder) })
  } catch (error) {
    logError(`파일 검색 오류: ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.post('/', uploader.any(), (req, res) => {
  try {
    res.status(200).json({
      result: 'OK'
    })
  } catch (error) {
    logError(`파일 업로드 오류: ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})
// folders
router.get('/dir', (req, res) => {
  try {
    const { email } = req.user
    res.status(200).json(fnGFolders(email))
  } catch (error) {
    logError(`폴더 검색 오류 : ${error}`, req.user.email, 'files')
  }
})

router.post('/newfolder', (req, res) => {
  try {
    const { folder, name } = req.body
    const newFolder = path.join(folder, name)
    fnCMFolder(newFolder)
    logInfo(
      `새폴더: ${newFolder.replace(gStatus.mediaFolder, '')}, ${
        req.user.email
      }`,
      req.user.email,
      'files'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`새폴더 오류: ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.delete('/', (req, res) => {
  try {
    const { files } = req.body
    fnRFAF(files)
    logInfo(
      `파일(폴더) 삭제: ${files.map((item) => item.base)}, ${req.user.email}`,
      req.user.email,
      'files'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`파일(폴더) 삭제 오류: ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
