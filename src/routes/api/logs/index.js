const express = require('express')
const Hangul = require('hangul-js')
const Logs = require('@db/models/logs')
const { isLoggedIn } = require('@api/user')
const { logError } = require('@logger')

const router = express.Router()

//RL01 - 로그 목록
router.get('/', isLoggedIn, async (req, res, next) => {
  const { email } = req.user
  try {
    let sort = {}
    let { pagination, filter, level, options } = JSON.parse(req.query.options)
    let { rowsPerPage, page, sortBy, descending } = pagination
    sort[sortBy] = descending ? -1 : 1

    const searchOptions = []
    if (level && level !== 0) {
      searchOptions.push({ levelNum: { $gte: level } })
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
    logError(`RL01 로그 데이터 가져오기 ${error}`, email)
  }
})

module.exports = router
