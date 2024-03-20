const express = require('express')

const router = express.Router()

// use router
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/devices', require('./devices'))
router.use('/setup', require('./setup'))
router.use('/files', require('./files'))
router.use('/logs', require('./logs'))
module.exports = router
