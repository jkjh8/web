const express = require('express')

const router = express.Router()

// use router
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/devices', require('./devices'))

module.exports = router
