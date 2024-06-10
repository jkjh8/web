const fs = require('fs')
const path = require('path')

const fnGetFolder = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.resolve(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory
      ? [...files, { label: file, path: name, children: fnGetFolder(name) }]
      : files
  }, [])

const fnMakeFolder = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }
}

const fnGetFolders = (email) => {
  const { globalFolder, mediaFolder } = gStatus
  // 공용폴더
  const gFolders = fnGetFolder(globalFolder)
  // 사용자폴더
  const userFolder = path.resolve(mediaFolder, email)
  // 폴더 없으면 만들기
  fnMakeFolder(userFolder)
  const uFolders = fnGetFolder(userFolder)
  return {
    folders: [
      { label: '공용폴더', path: globalFolder, children: gFolders },
      { label: '사용자폴더', path: userFolder, children: uFolders }
    ],
    globalFolder,
    userFolder
  }
}

const fnGetFiles = (folder) => {
  const files = fs.readdirSync(folder)
  return files.map((file) => {
    const fullpath = path.resolve(folder, file)
    return fnGetFile(fullpath)
  })
}

const fnGetFile = (fullpath) => {
  const stat = fs.statSync(fullpath)
  return {
    fullpath,
    path: fullpath.replace(gStatus.mediaFolder, ''),
    type: stat.isDirectory() ? 'folder' : 'file',
    ...stat,
    ...path.parse(fullpath)
  }
}

const fnGetFileSize = (folder) => {
  let size = 0
  const files = fs.readdirSync(folder)
  for (let file of files) {
    const fullpath = path.join(folder, file)
    const stat = fs.statSync(fullpath)
    size += stat.isDirectory() ? fnGetFileSize(fullpath) : stat.size
  }
  return size
}

const fnRTemp = () => {
  const files = fs.readdirSync(gStatus.tempFolder)
  files.forEach((file) => {
    const filepath = path.join(gStatus.tempFolder, file)
    const stat = fs.statSync(filepath)
    if (stat.isDirectory()) {
      fs.rmdirSync(filepath, { recursive: true })
    } else {
      fs.unlinkSync(filepath)
    }
  })
}

const fnRFAF = (list) => {
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
}

module.exports = {
  fnGetFolder,
  fnMakeFolder,
  fnGetFolders,
  fnGetFiles,
  fnGetFile,
  fnGetFileSize,
  fnRTemp,
  fnRFAF
}
