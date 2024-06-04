const express = require('express')

const router = express.Router()

// Define your routes here
router.use('/schedule', require('./schedule'))

module.exports = router
