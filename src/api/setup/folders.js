const path = require('path')
const express = require('express')
const { fnMakeFolder } = require('@api/files')
const { dbSetupFindOne } = require('@db/setup')
const { logError, logInfo } = require('@logger')
const { gStatus } = require('../../defaultVal')

module.exports = async (defaultFolder, app = null) => {
  try {
    if (defaultFolder) {
      gStatus.defaultFolder = defaultFolder
    } else {
      const r = await dbSetupFindOne({ key: 'defaultFolder' })
      if (r && r.value) {
        gStatus.defaultFolder = r.value
      } else {
        gStatus.defaultFolder = __dirname
      }
    }
    gStatus.mediaFolder = path.join(gStatus.defaultFolder, 'media')
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
    logInfo(`서버 미디어 폴더가 활성화 되었습니다.`, 'server', 'server')
  } catch (error) {
    logError(
      `미디어 폴더 생성 오류 ${JSON.stringify(error)}`,
      'server',
      'server'
    )
  }
}
