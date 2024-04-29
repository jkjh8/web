const express = require('express')

const router = express.Router()

router.use('/live', require('./live'))

module.exports = router
