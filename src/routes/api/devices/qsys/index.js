const express = require('express')
const { logInfo, logError } = require('@logger')
const { fnSADs, fnSCDs, fnSQD, fnSSQD, fnSBData } = require('@api/qsys')
const {
  dbQsysMake,
  dbQsysFind,
  dbQsysFindOne,
  dbQsysFindAll,
  dbQsysBulkWrite,
  dbQsysUpdate,
  dbQsysExists,
  dbQsysRemove
} = require('@db/qsys')

const { fnGetBarixInfo } = require('@api/barix')

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
    logInfo(
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

router.put('/edit', async (req, res) => {
  try {
    const { deviceId, ipaddress, name } = req.body
    const r = await dbQsysUpdate(
      { deviceId: deviceId },
      { $set: { ipaddress, name } }
    )
    await fnSADs()
    logInfo(
      `QSYS 장치 수정 ${req.body.name}:${req.body.ipaddress}-${req.body.deviceId}`,
      req.user.email,
      'qsys'
    )
    res.status(200).json({ result: true, data: r })
  } catch (error) {
    logError(`QSYS 장치 수정 오류: ${error}`, req.user.email, 'qsys')
    res.status(500).json({ result: false, error })
  }
})

router.delete('/', async (req, res) => {
  try {
    const r = await dbQsysRemove(req.body._id)
    await fnSADs()
    logInfo(
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
    const { deviceId, zone, destination, ipaddress } = req.body
    const r = await dbQsysUpdate(
      { 'deviceId': deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.destination': destination }
    )

    // set zone
    fnSBData('qsys:device:gtr', { deviceId, zone, destination, ipaddress })
    // get barix data
    fnGetBarixInfo(ipaddress)
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

router.get('/existszones', async (req, res) => {
  try {
    const { id, deviceId } = req.query
    const r = await dbQsysFind({
      ZoneStatus: { $elemMatch: { destination: id } },
      deviceId: { $ne: deviceId }
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
    logInfo(
      `QSYS 장치ID: ${deviceId} 방송구간 이름변경 ${zone}: ${name}, 사용자: ${req.user.email}`,
      'q-sys',
      'data'
    )
  } catch (error) {
    logError(`QSYS 방송구간 이름변경 오류: ${error}`)
    res.status(500).json({ result: false, error })
  }
})

router.get('/gtrs', (req, res) => {
  try {
    const { deviceId } = req.query
    fnSBData('qsys:device:gtrs', { deviceId })
    res.status(200).json({ result: true })
  } catch (error) {
    logError(
      `Qsys 오디오 전송채널 재수집 오류 ${error}`,
      req.user.email,
      'qsys'
    )
    res.status(500).json({ result: false, error })
  }
})

router.put('/strs', (req, res) => {
  try {
    const device = req.body.device
    console.log(device)

    fnSBData('qsys:device:strs', { device })
    logInfo(
      `Qsys 오디오 전송 채널 재설정 ${device.name}, ${device.ipaddress}`,
      req.user.email,
      'qsys'
    )
    res.status(200).json({ result: true })
  } catch (error) {
    logError(
      `Qsys 오디오 전송채널 재설정 오류 ${error}`,
      req.user.email,
      'qsys'
    )
    res.status(500).json({ result: false, error })
  }
})

router.get('/cancel', (req, res) => {
  try {
    if (req.user.isAdmin) {
      const { name, ipaddress, deviceId, pageId } = req.query.device

      fnSBData(`qsys:page:cancelAll`, deviceId)
      logInfo(
        `Qsys ${name} ${deviceId} ${ipaddress} 방송 취소`,
        req.user.email,
        'qsys'
      )
      return res.status(200).json({ result: true })
    }
    res.status(401).json({ result: false, message: 'Invaild Auth' })
  } catch (error) {
    logError(`Qsys 방송 취소 오류`, req.user.email, 'qsys')
    res.status(500).json(error)
  }
})

router.put('/updatenames', async (req, res) => {
  try {
    const zones = []
    const { deviceId, arr } = req.body
    // 대량 데이터 베이스 업데이트 생성
    let promises = arr.map((item) => {
      zones.push({
        updateOne: {
          filter: { 'deviceId': deviceId, 'ZoneStatus.Zone': item.Zone },
          update: {
            $set: {
              'ZoneStatus.$.name': item.name,
              'ZoneStatus.$.destination':
                item.destination && item.destination !== ''
                  ? item.destination
                  : null
            }
          }
        }
      })
    })
    await Promise.all(promises)
    // 대량 업데이트
    await dbQsysBulkWrite(zones)
    // 리턴
    res.status(200).json({ result: true })
    // 전체 데이터 송신
    await fnSADs()
    // 큐시스 미디어 스트림 업데이트
    await fnSBData('qsys:device:strs', { deviceId })
    // barix get info
    arr.forEach((item) => {
      if (item.destination && item.destination.ipaddress) {
        fnGetBarixInfo(item.destination.ipaddress)
      }
    })
    // 로그 기록
    logInfo(
      `QSYS 장치ID: ${deviceId} 방송구간 이름 및 Barix 업데이트`,
      req.user.email,
      'qsys'
    )
  } catch (error) {
    logError(
      `QSYS 방송구간 이름 업데이트 오류 ${error}`,
      req.user.email,
      'qsys'
    )
    res.status(500).json(error)
  }
})

module.exports = router
