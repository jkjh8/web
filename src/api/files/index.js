const fs = require('fs')
const path = require('path')

const fnGFolder = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.resolve(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory
      ? [...files, { label: file, path: name, children: fnGFolder(name) }]
      : files
  }, [])

const fnCMFolder = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }
}

const fnGFolders = (email) => {
  const { globalFolder, mediaFolder } = gStatus
  const gFolders = fnGFolder(globalFolder)
  const userFolder = path.resolve(mediaFolder, email)
  fnCMFolder(userFolder)
  const uFolders = fnGFolder(userFolder)
  return {
    folders: [
      { label: '공용폴더', path: globalFolder, children: gFolders },
      { label: '사용자폴더', path: userFolder, children: uFolders }
    ],
    globalFolder,
    userFolder
  }
}

const fnGFiles = (folder) => {
  console.log('folder', folder)
  const files = fs.readdirSync(folder)
  const fileWith = []
  for (let file of files) {
    const fullpath = path.resolve(folder, file)
    const stat = fs.statSync(fullpath)
    fileWith.push({
      fullpath,
      path: fullpath.replace(gStatus.mediaFolder, ''),
      type: stat.isDirectory() ? 'folder' : 'file',
      ...stat,
      ...path.parse(fullpath)
    })
  }
  return fileWith
}

const fnGFSize = (folder) => {
  let size = 0
  const files = fs.readdirSync(folder)
  for (let file of files) {
    const fullpath = path.join(folder, file)
    const stat = fs.statSync(fullpath)
    size += stat.isDirectory() ? fnGFSize(fullpath) : stat.size
  }
  return size
}

const fnRTemp = () => {
  const files = fs.readdirSync(gStatus.tempFolder)
  for (let file of files) {
    const filepath = path.join(gStatus.tempFolder, file)
    const stat = fs.statSync(filepath)
    if (stat.isDirectory()) {
      fs.rmdirSync(filepath, { recursive: true })
    } else {
      fs.unlinkSync(filepath)
    }
  }
}

const fnRFAF = (list) => {
  for (let file of list) {
    if (fs.existsSync(file.fullpath)) {
      if (file.type === 'folder') {
        fs.rmdirSync(file.fullpath, { recursive: true })
      } else {
        fs.unlinkSync(file.fullpath)
      }
    }
  }
}

module.exports = {
  fnGFolder,
  fnCMFolder,
  fnGFolders,
  fnGFiles,
  fnGFSize,
  fnRTemp,
  fnRFAF
}
