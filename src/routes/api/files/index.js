const express = require('express')
const path = require('path')
const fs = require('fs')
const { logInfo, logError } = require('@logger')

const ziper = require('./ziper')

const uploader = require('./uploader')
const {
  fnCMFolder,
  fnGFolders,
  fnGFiles,
  fnGFSize,
  fnRFAF
} = require('@api/files')
const { gStatus } = require('../../../defaultVal')

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const { folder } = req.query
    console.log(folder)
    res.status(200).json({ files: fnGFiles(folder ?? gStatus.globalFolder) })
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
    logError(`파일(폴더) 삭제 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.get('/downloads', async (req, res) => {
  try {
    res.download(await ziper(JSON.parse(req.query.files)))
  } catch (error) {
    logError(`Files 다운로드 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.get('/download', async (req, res) => {
  try {
    const file = JSON.parse(req.query.file)
    res.download(file.fullpath)
  } catch (error) {
    logError(`File 다운로드 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.put('/rename', (req, res) => {
  try {
    const { oldFile, newName } = req.body
    fs.renameSync(
      oldFile.fullpath,
      path.join(oldFile.dir, newName + oldFile.ext)
    )
    logInfo(
      `파일(폴더) 이름 변경: ${oldFile.name} -> ${newName}`,
      req.user.email,
      'files'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`파일(폴더) 이름 변경 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.get('/size', (req, res) => {
  try {
    const { fullpath } = req.query
    let size = 0
    size = fnGFSize(fullpath)
    res.status(200).json({ result: true, size })
  } catch (error) {
    logError(`파일(폴더) 크기 확인 오류 ${error}`, req.user.email, 'files')
    res.status(500).json({ result: false, error })
  }
})

router.use('/temp', require('./temp'))

module.exports = router
