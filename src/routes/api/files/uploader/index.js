const multer = require('multer')
const { logInfo, logError, logDebug } = require('@logger')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { folder } = req.headers
    console.log(file.fieldname.toString('utf8'))
    cb(null, decodeURIComponent(folder))
  },
  filename: (req, file, cb) => {
    logInfo(
      `파일 업로드: ${file.fieldname.toString('utf8')}`,
      'server',
      'files'
    )
    cb(null, file.fieldname.toString('utf8'))
  }
})

module.exports = multer({ storage })
