const express = require('express')
const Hangul = require('hangul-js')
const Logs = require('@db/models/logs')
const { isLoggedIn, isAdmin } = require('@api/user')
const { logError, logWarn } = require('@logger')

const router = express.Router()

//RL01 - 로그 목록
router.get('/', isLoggedIn, async (req, res, next) => {
  const { email } = req.user
  try {
    let sort = {}
    let { pagination, filter, level, start, end, devices } = JSON.parse(
      req.query.options
    )
    console.log('logLevel', level)

    let { rowsPerPage, page, sortBy, descending } = pagination
    sort[sortBy] = descending ? -1 : 1

    const searchOptions = []
    if (level && level.length) {
      searchOptions.push({ levelNum: { $in: level } })
    }
    if (start) {
      searchOptions.push({
        createdAt: { $gte: new Date(`${start} 00:00:00`) }
      })
    }
    if (end) {
      searchOptions.push({
        createdAt: { $lte: new Date(`${end} 23:59:59`) }
      })
    }
    if (devices) {
      searchOptions.push({ zones: { $in: devices } })
    }
    if (filter) {
      // filter에서 글자에서 \가 있으면 삭제
      filter = filter.replace(/\\/g, '')
      searchOptions.push({
        search: new RegExp(Hangul.disassembleToString(filter), 'i', 'g')
      })
    }
    // get count
    const count = await Logs.countDocuments(
      searchOptions.length ? { $and: searchOptions } : {}
    )
    // get docs
    const current = await Logs.find(
      searchOptions.length ? { $and: searchOptions } : {}
    )
      .limit(rowsPerPage)
      .skip((page - 1) * rowsPerPage)
      .sort({ ...sort })
    // return
    res.status(200).json({
      result: true,
      current,
      pagination: {
        ...pagination,
        rowsNumber: count
      }
    })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RL01 로그 데이터 가져오기 - ${error}`, email)
  }
})

// RL02 - 로그 데이터 전체 삭제
router.delete('/all', isAdmin, async (req, res) => {
  const { email } = req.user
  try {
    await Logs.deleteMany({})
    res.status(200).json({ result: true })
    logWarn(`RL02 로그 데이터 전체 삭제`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`RL02 로그 데이터 전체 삭제 - ${error}`, email)
  }
})

module.exports = router
