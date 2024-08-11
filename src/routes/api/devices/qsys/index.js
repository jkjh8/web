const express = require('express')
const { logInfo, logWarn, logError } = require('@logger')
const {
  dbQsysMake,
  dbQsysFind,
  dbQsysFindAll,
  dbQsysBulkWrite,
  dbQsysUpdateBackup,
  dbQsysExists,
  dbQsysRemove
} = require('@db/qsys')

const { fnSendAllStatusAll, fnSendQsysData } = require('@api/qsys')
const { fnSendDeviceMuticast } = require('@multicast')
const { fnGetBarixInfo } = require('@api/barix')

const router = express.Router()

// RQ01 - Qsys 장치 관리
router.get('/', async (req, res) => {
  const { email } = req.user
  try {
    res.status(200).json({ result: true, devices: await dbQsysFindAll() })
  } catch (error) {
    logError(`RQ01 Qsys 장치 검색 오류 ${error}`, email)
  }
})

// RQ02 - Qsys 장치 추가
router.post('/', async (req, res) => {
  const { email } = req.user
  try {
    const { name, ipaddress, deviceId } = req.body
    // 데이터베이스 추가
    const data = await dbQsysMake({ ...req.body })
    // 전체 데이터 송신
    await fnSendAllStatusAll()
    res.status(200).json({ result: true, data })
    // 로그
    logInfo(`RQ02 QSYS 장치 추가 ${name}:${ipaddress}-${deviceId}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`QSYS 장치 추가 오류: ${error}`, email)
  }
})

// RQ03 - Qsys 장치 수정
router.put('/edit', async (req, res) => {
  const { email } = req.user
  try {
    const { deviceId, ipaddress, name, amx } = req.body
    // 데이터베이스 업데이트
    const data = await dbQsysUpdateBackup(
      { deviceId },
      { ipaddress, name, amx }
    )
    // 전체 데이터 송신
    await fnSendAllStatusAll()
    res.status(200).json({ result: true, data })
    // 로그
    logInfo(`RQ03 QSYS 장치 수정 ${name}:${ipaddress}-${deviceId}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ03 QSYS 장치 수정 ${error}`, email)
  }
})

// RQ04 - Qsys 장치 제거
router.delete('/', async (req, res) => {
  const { email } = req.user
  try {
    const { _id, name, ipaddress, deviceId } = req.body
    res.status(200).json({ result: true, data: await dbQsysRemove(_id) })
    // 전체 데이터 송신
    await fnSendAllStatusAll()
    // 로그
    logInfo(`RQ04 QSYS 장치 제거 ${name}:${ipaddress}-${deviceId}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ04 QSYS 장치 제거 ${error}`, email)
  }
})

// RQ05 - Qsys 장치 존재 확인
router.get('/exists', async (req, res) => {
  try {
    res.status(200).json({ result: await dbQsysExists({ ...req.query.value }) })
  } catch (error) {
    res.status(500).json({ result: false, error })
  }
})

// RQ06 방송구간 바릭스 세팅
router.put('/zoneupdate', async (req, res) => {
  const { email } = req.user
  try {
    const { deviceId, zone, destination, ipaddress, port } = req.body
    // 스트림 구간 설정
    fnSendDeviceMuticast('qsys:device:str', {
      deviceId,
      zone,
      destination,
      ipaddress,
      port
    })
    // fnSendQsysData('qsys:device:str', {
    //   deviceId,
    //   zone,
    //   destination,
    //   ipaddress,
    //   port
    // })
    // 5초후 바릭스 데이터 수집 요청
    setTimeout(() => fnGetBarixInfo(ipaddress), 5000)
    // 데이터 베이스 업데이트 및 송신
    res.status(200).json({
      result: true,
      data: await dbQsysUpdateBackup(
        { 'deviceId': deviceId, 'ZoneStatus.Zone': zone },
        { 'ZoneStatus.$.destination': destination }
      )
    })
    // 로그
    logInfo(
      `RQ06 QSYS 데이터 업데이트 ${deviceId} ${zone} ${destination} ${ipaddress}`,
      email
    )
    // await fnSendAllStatusAll()
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ06 QSYS 데이터 업데이트 ${error}`, email)
  }
})

// RQ07 - 스트림 구간 중복 확인
router.get('/existszone', async (req, res) => {
  const { email } = req.user
  try {
    const { id } = req.query
    res.status(200).json({
      result: true,
      value: await dbQsysFind({
        ZoneStatus: { $elemMatch: { destination: id } }
      })
    })
  } catch (error) {
    res.status(500).json({ status: false, error })
    // 로그
    logError(`RQ07 QSYS 방송 지역 검색 ${error}`, email)
  }
})

// RQ08 - 스트림 구간 중복 확인(복수)
router.get('/existszones', async (req, res) => {
  const { email } = req.user
  try {
    const { id, deviceId } = req.query
    res.status(200).json({
      result: true,
      value: await dbQsysFind({
        ZoneStatus: { $elemMatch: { destination: id } },
        deviceId: { $ne: deviceId }
      })
    })
  } catch (error) {
    res.status(500).json({ status: false, error })
    // 로그
    logError(`RQ08 QSYS 방송 지역 검색 ${error}`, email)
  }
})

// RQ09 - 방송구간 이름 변경
router.put('/modifiedzonename', async (req, res) => {
  const { email } = req.user
  try {
    const { deviceId, zone, name } = req.body
    // 데이터 베이스 업데이트
    await dbQsysUpdateBackup(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.name': name }
    )
    // 송신
    res.status(200).json({ result: true, devices: await dbQsysFindAll() })
    // 로그
    logInfo(
      `RQ09 QSYS 장치ID: ${deviceId} 방송구간 이름변경 ${zone}: ${name}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ09 QSYS 방송구간 이름변경: ${error}`, email)
  }
})

// RQ10 - 스트림 채널 정보 수집
router.get('/gtrs', (req, res) => {
  const { email } = req.user
  try {
    const { deviceId } = req.query
    // fnSendQsysData('qsys:device:gtrs', { deviceId })
    fnSendDeviceMuticast('qsys:device:gtrs', { deviceId })
    res.status(200).json({ result: true })
    // 로그
    logInfo(`RQ10 QSYS 장치ID: ${deviceId} 스트림 채널 정보 수집`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`QSYS 스트림 채널 재수집 오류 ${error}`, email)
  }
})

// RQ11 - 스트림 채널 재설정
router.put('/strs', (req, res) => {
  const { email } = req.user
  try {
    const { device } = req.body
    // fnSendQsysData('qsys:device:strs', { device })
    fnSendDeviceMuticast('qsys:device:strs', { device })
    res.status(200).json({ result: true })
    // 로그
    logInfo(
      `RQ11 QSYS 스트림 재설정 ${device.name}, ${device.ipaddress}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ11 QSYS 스트림 재설정 ${error}`, email)
  }
})

// RQ12 - 방송 취소
router.get('/cancel', (req, res) => {
  const { email, isAdmin } = req.user
  try {
    if (isAdmin) {
      const { name, ipaddress, deviceId, pageId } = req.query.device

      // fnSendQsysData(`qsys:page:cancelAll`, deviceId)
      fnSendDeviceMuticast(`qsys:page:cancelAll`, deviceId)
      logWarn(`Qsys ${name} ${deviceId} ${ipaddress} 방송 취소`, email)
      return res.status(200).json({ result: true })
    }
    res.status(401).json({ result: false, message: 'Invaild Auth' })
  } catch (error) {
    res.status(500).json(error)
    // 로그
    logError(`RQ12 Qsys 방송 취소 ${error}`, email)
  }
})

// RQ13 - 정보 업데이트(복수)
router.put('/updatenames', async (req, res) => {
  const { email } = req.user
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
    await fnSendAllStatusAll()
    // 큐시스 미디어 스트림 업데이트
    // await fnSendQsysData('qsys:device:strs', { ...req.body })
    fnSendDeviceMuticast('qsys:device:strs', { ...req.body })
    // barix get info
    arr.forEach((item) => {
      if (item.destination && item.destination.ipaddress) {
        fnGetBarixInfo(item.destination.ipaddress)
      }
    })
    // 로그 기록
    logInfo(`RQ13 QSYS 방송구간 이름 및 스트림 업데이트 ID: ${deviceId}`, email)
  } catch (error) {
    res.status(500).json(error)
    // 로그
    logError(`RQ13 QSYS 방송구간 이름 및 스트림업데이트 ${error}`, email)
  }
})

// RQ14 - 볼륨조정
router.put('/volume', async (req, res) => {
  const { email } = req.user
  try {
    const { deviceId, zone, volume, name } = req.body
    // 데이터베이스 업데이트
    await dbQsysUpdateBackup(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.volume': volume }
    )
    fnSendDeviceMuticast('qsys:volume', req.body)
    // 로그
    logInfo(`IC02 볼륨 ${name}-${deviceId} ${zone}: ${value}`, email)
    // 송신
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ14 QSYS 볼륨조정 ${error}`, email)
  }
})

module.exports = router
