/** @format */

const path = require('path')
const express = require('express')
const api = require('./api')

const router = express.Router()

// use router
router.use('/api', api)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve('public', 'spa', 'index.html'))
})

module.exports = router
