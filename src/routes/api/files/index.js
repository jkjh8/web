const express = require('express')
const path = require('path')
const fs = require('fs')
const { logInfo, logError } = require('@logger')

const ziper = require('./ziper')

const uploader = require('./uploader')
const {
  fnMakeFolder,
  fnGetFolders,
  fnGetFiles,
  fnGetFileSize,
  fnRFAF
} = require('@api/files')
const { fn } = require('moment')

const router = express.Router()

//RF04 - 파일 목록
router.get('/', (req, res) => {
  const { email } = req.user
  try {
    const { folder } = req.query
    res.status(200).json({ files: fnGetFiles(folder ?? gStatus.globalFolder) })
  } catch (error) {
    logError(`RF04 파일 검색 오류: ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// RF05 - 파일 업로드
router.post('/', (req, res) => {
  const { email } = req.user
  uploader.any()(req, res, (error) => {
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
  })
})

// RF06 폴더 가져오기
router.get('/dir', (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json(fnGetFolders(email))
  } catch (error) {
    logError(`RF06 폴더 검색 : ${error}`, email)
  }
})

// RF07 폴더 생성
router.post('/newfolder', (req, res) => {
  const { email } = req.user
  try {
    const { folder, name } = req.body
    const newFolder = path.join(folder, name)
    fnMakeFolder(newFolder)
    res.status(200).json({ result: true, folder: newFolder })
    // 로그
    logInfo(
      `RF07 폴더생성 ${newFolder.replace(gStatus.mediaFolder, '')}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RF07 폴더 생성: ${error}`, email)
  }
})

// RF08 파일(폴더) 삭제
router.delete('/', (req, res) => {
  const { email } = req.user
  try {
    const { files } = req.body
    fnRFAF(files)
    res.status(200).json({ result: true })
    // 로그
    logInfo(`RF08 파일(폴더) 삭제: ${files.map((item) => item.base)}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RF08 파일(폴더) 삭제 오류 ${error}`, email)
  }
})

// RF09 파일 다운로드(복수)
router.get('/downloads', async (req, res) => {
  const { email } = req.user
  try {
    res.download(await ziper(JSON.parse(req.query.files)))
  } catch (error) {
    logError(`RF09 파일 다운로드 ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// RF10 파일 다운로드(단일)
router.get('/download', async (req, res) => {
  const { email } = req.user
  try {
    const file = JSON.parse(req.query.file)
    res.download(file.fullpath)
  } catch (error) {
    logError(`RF10 파일 다운로드 ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// RF11 파일(폴더) 이름 변경
router.put('/rename', (req, res) => {
  const { email } = req.user
  try {
    const { oldFile, newName } = req.body
    fs.renameSync(
      oldFile.fullpath,
      path.join(oldFile.dir, newName + oldFile.ext)
    )
    res.status(200).json({ result: true })
    // 로그
    logInfo(`RF11 파일(폴더) 이름 변경: ${oldFile.name} -> ${newName}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RF11 파일(폴더) 이름 변경 오류 ${error}`, email)
  }
})

// RF12 파일(폴더) 크기 확인
router.get('/size', (req, res) => {
  const { email } = req.user
  try {
    const { fullpath } = req.query
    res.status(200).json({ result: true, size: fnGetFileSize(fullpath) ?? 0 })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RF12 파일(폴더) 크기 확인 오류 ${error}`, email)
  }
})

// RF13 파일 존재 확인
router.get('/exist', (req, res) => {
  const { email } = req.user
  try {
    const { data } = req.query
    const { folder, name } = JSON.parse(data)
    console.log(folder, name)
    res
      .status(200)
      .json({ result: true, exist: fs.existsSync(path.join(folder, name)) })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RF13 파일 존재 확인 오류 ${error}`, email)
  }
})

// RF14 파일 복사
router.put('/copy', (req, res) => {
  const { email } = req.user
  try {
    const { original, name, folder } = req.body
    fs.copyFileSync(original, path.join(folder, name))
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RF14 파일 복사 오류 ${error}`, email)
  }
})

router.use('/temp', require('./temp'))

module.exports = router
