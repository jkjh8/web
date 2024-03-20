const express = require('express')
const initSetup = require('@api/setup')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    await initSetup()
    res.status(200).json({ result: true, value: gStatus })
  } catch (error) {
    logError(`Setup값 갱신 오류 ${error}`, 'server', 'setup')
  }
})
router.use('/barix', require('./barix'))
router.use('/qsys', require('./qsys'))
router.use('/tts', require('./tts'))

module.exports = router
