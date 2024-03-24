const express = require('express')
const { logInfo, logDebug, logError } = require('@logger')
const { fnSADs, fnSCDs, fnSQD, fnSSQD, fnSBData } = require('@api/qsys')
const {
  dbQsysMake,
  dbQsysFind,
  dbQsysFindAll,
  dbQsysUpdate,
  dbQsysExists,
  dbQsysRemove
} = require('@db/qsys')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ result: true, devices: await dbQsysFindAll() })
  } catch (error) {
    logError(`Qsys 장치 검색 오류 ${error}`, 'server', 'qsys')
  }
})

router.post('/', async (req, res) => {
  try {
    await dbQsysMake({ ...req.body })
    await fnSADs()
    logDebug(
      `QSYS 장치 추가 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'qsys'
    )
    res.status(200).json({ result: true })
    // add event log
  } catch (error) {
    logError(`QSYS 장치 추가 오류: ${error}`, req.user.email, 'qsys')
    res.status(500).json({ result: false, error })
  }
})

router.delete('/', async (req, res) => {
  try {
    const r = await dbQsysRemove(req.body._id)
    await fnSADs()
    logDebug(
      `QSYS 장치 제거 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'qsys'
    )
    res.status(200).json({ result: true, data: r })
  } catch (error) {
    logError(`QSYS 장치 제거 오류: ${error}`, 'server', 'qsys')
    res.status(500).json({ result: false, error })
  }
})

router.get('/exists', async (req, res) => {
  try {
    res.status(200).json({ result: await dbQsysExists({ ...req.query.value }) })
  } catch (error) {
    res.status(500).json({ result: false, error })
  }
})

// 방송구간 바릭스 세팅
router.put('/zoneupdate', async (req, res) => {
  try {
    const { id, deviceId, zone, destination, ipaddress } = req.body
    const r = await dbQsysUpdate(
      { '_id': id, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.destination': destination }
    )

    // set zone
    fnSBData('qsys:tr', { deviceId, zone, destination, ipaddress })
    // share data all
    res.status(200).json({ result: true, value: r })
  } catch (error) {
    logError(`QSYS 데이터 업데이트 ${error}`, 'qsys', 'event')
    res.status(500).json({ result: false, error })
  }
})

router.get('/existszone', async (req, res) => {
  try {
    const { id } = req.query
    const r = await dbQsysFind({
      ZoneStatus: { $elemMatch: { destination: id } }
    })
    res.status(200).json({
      result: true,
      value: r
    })
  } catch (error) {
    logError(`QSYS 방송 지역 검색 ${error}`)
    res.status(500).json({ status: false, error })
  }
})

router.put('/modifiedzonename', async (req, res) => {
  try {
    const { deviceId, zone, name } = req.body
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.name': name }
    )
    res.status(200).json({ result: true, devices: await dbQsysFindAll() })
    logDebug(
      `QSYS 장치ID: ${deviceId} 방송구간 이름변경 ${zone}: ${name}, 사용자: ${req.user.email}`,
      'q-sys',
      'data'
    )
  } catch (error) {
    logError(`QSYS 방송구간 이름변경 오류: ${error}`)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
