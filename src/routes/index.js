/** @format */

const path = require('path')
const express = require('express')
const { checkAddress } = require('@api/user')
const { dbSetupUpdate } = require('@db/setup')
const { gStatus } = require('@src/defaultVal.js')
const { logInfo, logError } = require('../logger')
const { fnSendMessagePM2 } = require('@api/pm2')
const router = express.Router()

// use router
router.use('/api', checkAddress, require('./api'))
router.use('/backup', require('./backup'))
router.get('/address', async (req, res) => {
  try {
    const value = req.query.value
    await dbSetupUpdate({ key: 'blockIp' }, { valueBoolean: value === 'true' })
    gStatus.blockIp = value === 'true'
    fnSendMessagePM2({ type: 'setup', data: { blockIp: gStatus.blockIp } })
    logInfo(`blockIp: ${gStatus.blockIp}`, 'SERVER')
    res.send({ blockIp: gStatus.blockIp })
  } catch (error) {
    logError(error, 'SERVER')
  }
})

/* GET home page. */
router.get('/', checkAddress, function (req, res, next) {
  res.sendFile(path.resolve('public', 'spa', 'index.html'))
})

module.exports = router
