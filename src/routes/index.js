/** @format */

const path = require('path')
const express = require('express')
const { checkAddress } = require('../api/user')

const router = express.Router()

// use router
router.use('/api', checkAddress, require('./api'))
router.use('/backup', checkAddress, require('./backup'))

/* GET home page. */
router.get('/', checkAddress, function (req, res, next) {
  // 호출 주소 확인
  res.sendFile(path.resolve('public', 'spa', 'index.html'))
})

module.exports = router
