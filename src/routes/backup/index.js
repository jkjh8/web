const express = require('express')
const router = express.Router()
const { isBackup } = require('@api/backup')

router.use('/qsys', isBackup, require('./qsys'))
router.use('/barix', isBackup, require('./barix'))
router.use('/user', isBackup, require('./user'))
router.use('/schedules', isBackup, require('./schedules'))

module.exports = router
