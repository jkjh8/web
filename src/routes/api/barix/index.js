const express = require('express')
const { dbBarixFind } = require('@db/barix')
const { logInfo, logError } = require('@logger')
const { gStatus } = require('../../../defaultVal')

const router = express.Router()

//BR01 바릭스 전체 조회
router.get('/', async (req, res) => {
  try {
    res
      .status(200)
      .json({ barix: await dbBarixFind({}), polling: gStatus.interval })
  } catch (error) {
    logError(`BR01 바릭스 조회: ${error}`, 'SERVER')
    res.status(500).json({ result: false })
  }
})

// BR02 바릭스 업데이트
router.put('/', async (req, res) => {
  try {
    const { ipaddress, ...data } = req.body
    await dbBarixUpdate({ ipaddress }, { ...data })
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`BR02 바릭스 업데이트: ${error}`, 'SERVER')
    res.status(500).json({ result: false })
  }
})

module.exports = router
