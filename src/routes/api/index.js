const express = require('express')
const { isLoggedIn } = require('@api/user')
const router = express.Router()

// use router
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/devices', isLoggedIn, require('./devices'))
router.use('/setup', isLoggedIn, require('./setup'))
router.use('/files', isLoggedIn, require('./files'))
router.use('/logs', isLoggedIn, require('./logs'))
router.use('/broadcast', isLoggedIn, require('./broadcast'))
router.use('/amx', require('./amx'))

module.exports = router
