const path = require('path')
const express = require('express')
const { fnMakeFolder } = require('@api/files')
const { dbSetupFindOne } = require('@db/setup')
const { logError, logInfo } = require('@logger')
const { gStatus } = require('../../defaultVal')

module.exports = async (defaultFolder, app = null) => {
  try {
    // media 폴더 생성
    if (process.env.MEDIA_FOLDER) {
      gStatus.mediaFolder = path.normalize(process.env.MEDIA_FOLDER)
    } else {
      gStatus.mediaFolder = path.join(__dirname, 'media')
    }
    // global, temp, schedule 폴더 생성
    gStatus.globalFolder = path.join(gStatus.mediaFolder, 'global')
    gStatus.tempFolder = path.join(gStatus.mediaFolder, 'temp')
    gStatus.scheduleFolder = path.join(gStatus.mediaFolder, 'schdeule')

    fnMakeFolder(gStatus.mediaFolder)
    fnMakeFolder(gStatus.globalFolder)
    fnMakeFolder(gStatus.tempFolder)
    fnMakeFolder(gStatus.scheduleFolder)
    
    if (app) {
      app.use('/media', express.static(gStatus.mediaFolder))
    }
    logInfo(`서버 미디어 폴더가 활성화 되었습니다. Path = ${gStatus.mediaFolder}`, 'server', 'server')
  } catch (error) {
    logError(
      `미디어 폴더 생성 오류 ${JSON.stringify(error)}`,
      'server',
      'server'
    )
  }
}
