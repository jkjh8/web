const express = require('express')

const router = express.Router()

router.use('/qsys', require('./qsys'))
router.use('/barix', require('./barix'))

module.exports = router
