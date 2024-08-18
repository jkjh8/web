const multer = require('multer')
const { logInfo, logError } = require('@logger')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { folder } = req.headers
    cb(null, decodeURIComponent(folder))
  },
  filename: (req, file, cb) => {
    logInfo(
      `파일 업로드 - ${file.fieldname.toString('utf8')}`,
      req.user.email,
      'files'
    )
    cb(null, file.fieldname.toString('utf8'))
  }
})

module.exports = multer({ storage })
