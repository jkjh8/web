const path = require('path')
const express = require('express')
const { fnCMFolder } = require('@api/files')
const { dbSetupFindOne } = require('@db/setup')
const { logError, logDebug } = require('@logger')
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
    fnCMFolder(gStatus.mediaFolder)
    fnCMFolder(gStatus.globalFolder)
    fnCMFolder(gStatus.tempFolder)
    if (app) {
      app.use('/media', express.static(gStatus.mediaFolder))
    }
    logDebug(`서버 미디어 폴더가 활성화 되었습니다.`, 'server', 'server')
  } catch (error) {
    logError(
      `미디어 폴더 생성 오류 ${JSON.stringify(error)}`,
      'server',
      'server'
    )
  }
}
