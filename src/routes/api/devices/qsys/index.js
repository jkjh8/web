const express = require('express')
const { logInfo, logWarn, logError, logEvent } = require('@logger')
const {
  dbQsysMake,
  dbQsysFind,
  dbQsysFindAll,
  dbQsysBulkWrite,
  dbQsysUpdateBackup,
  dbQsysExists,
  dbQsysRemove,
  dbQsysFindOne,
  dbQsysUpdateOne
} = require('@db/qsys')

const {
  fnSendAllStatusAll,
  fnSendQsys,
  fnCheckPageStatus
} = require('@api/qsys')
const { fnGetBarixInfo } = require('@api/barix')

const { fnSendSocket } = require('@api/client')
const { dbQsys } = require('../../../../db/qsys')

const router = express.Router()

// RQ01 - Qsys 장치 관리
router.get('/', async (req, res) => {
  const { email, isAdmin, zones } = req.user
  const filter =
    !isAdmin && zones && zones.length ? { deviceId: { $in: zones } } : {}
  try {
    const devices = await dbQsysFindAll(filter)
    res.status(200).json({ result: true, devices })
  } catch (error) {
    logError(`RQ01 Q-SYS 장치 검색 - ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

// RQ02 - Qsys 장치 추가
router.post('/', async (req, res) => {
  const { email } = req.user
  try {
    const { name, ipaddress, deviceId, channels } = req.body
    const ZoneStatus = []
    for (let i = 0; i < channels; i++) {
      ZoneStatus.push({
        Zone: i + 1,
        Active: false,
        gain: 0,
        mute: false
      })
    }

    // 데이터베이스 추가
    const data = await dbQsysMake({ ...req.body })
    // 전체 데이터 송신
    await fnSendAllStatusAll()
    res.status(200).json({ result: true, data })
    // 로그
    logInfo(
      `RQ02 Q-SYS 장치 추가 - ${name} - ${ipaddress} - ${deviceId}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ02 Q-SYS 장치 추가 - ${error}`, email)
  }
})

// RQ03 - Qsys 장치 수정
router.put('/edit', async (req, res) => {
  const { email } = req.user
  try {
    const { deviceId, ipaddress, name, amx, channels } = req.body
    const current = await dbQsysFindOne({ deviceId })
    // 채널 수 확인
    if (channels !== current.ZoneStatus.length) {
      //채널이 작을때
      if (channels < current.ZoneStatus.length) {
        current.ZoneStatus = current.ZoneStatus.splice(0, channels)
      }
      //채널이 클때
      if (channels > current.ZoneStatus.length) {
        for (let i = current.ZoneStatus.length; i < channels; i++) {
          current.ZoneStatus.push({
            Zone: i + 1,
            Active: false,
            destination: null,
            gain: 0,
            mute: false
          })
        }
      }
    }
    // 데이터베이스 업데이트
    const data = await dbQsysUpdateBackup(
      { deviceId },
      { ipaddress, name, amx, ZoneStatus: current.ZoneStatus }
    )
    // 전체 데이터 송신
    await fnSendAllStatusAll()
    res.status(200).json({ result: true, data })
    // 로그
    logInfo(
      `RQ03 Q-SYS 장치 수정 - ${name} - ${ipaddress} - ${deviceId}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ03 Q-SYS 장치 수정 - ${error}`, email)
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
    logInfo(
      `RQ04 Q-SYS 장치 제거 - ${name} - ${ipaddress} - ${deviceId}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ04 Q-SYS 장치 제거 - ${error}`, email)
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
    // 데이터 베이스 업데이트
    const result = await dbQsysUpdateBackup(
      {
        'deviceId': deviceId,
        'ZoneStatus.Zone': zone
      },
      { 'ZoneStatus.$.destination': destination }
    )
    fnSendQsys('qsys:device:str', {
      deviceId,
      zone,
      destination,
      ipaddress,
      port
    })
    fnSendSocket('qsys:device', JSON.stringify(result))
    // 5초후 바릭스 데이터 수집 요청
    setTimeout(() => fnGetBarixInfo(ipaddress), 5000)

    // 데이터 베이스 업데이트 및 송신
    res.status(200).json({ result: true, device: result })
    // 로그
    logInfo(
      `RQ06 Q-SYS 방송구간 업데이트 - ${zone} - ${destination} - ${ipaddress} - ${deviceId} `,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ06 Q-SYS 방송구간 업데이트 - ${error}`, email)
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
    logError(`RQ07 Q-SYS 방송 지역 검색 - ${error}`, email)
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
    logError(`RQ08 Q-SYS 방송 지역 검색 - ${error}`, email)
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
      `RQ09 Q-SYS 방송구간 이름변경 - ${zone} - ${name} - ${deviceId}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ09 Q-SYS 방송구간 이름변경 - ${error}`, email)
  }
})

// RQ10 - 스트림 채널 정보 수집
router.get('/gtrs', (req, res) => {
  const { email } = req.user
  try {
    const { deviceId } = req.query
    fnSendQsys('qsys:device:gtrs', { deviceId })
    // fnSendDeviceMuticast('qsys:device:gtrs', { deviceId })
    res.status(200).json({ result: true })
    // 로그
    logInfo(`RQ10 Q-SYS 스트림 채널 정보 수집 - ${deviceId}`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`Q-SYS 스트림 채널 재수집 - ${error}`, email)
  }
})

// RQ11 - 스트림 채널 재설정
router.put('/strs', (req, res) => {
  const { email } = req.user
  try {
    const { device } = req.body
    fnSendQsys('qsys:device:strs', { device })
    // fnSendDeviceMuticast('qsys:device:strs', { device })
    res.status(200).json({ result: true })
    // 로그
    logInfo(
      `RQ11 Q-SYS 스트림 재설정 - ${device.name} - ${device.ipaddress}`,
      email
    )
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ11 Q-SYS 스트림 재설정 - ${error}`, email)
  }
})

// RQ12 - 방송 취소
router.get('/cancel', (req, res) => {
  const { email, isAdmin, zones } = req.user
  const device = req.query.device
  try {
    if (isAdmin || zones.includes(device.deviceId)) {
      const { name, ipaddress, deviceId, pageId } = device

      fnSendQsys(`qsys:page:cancelAll`, deviceId)
      // fnSendDeviceMuticast(`qsys:page:cancelAll`, deviceId)
      logWarn(
        `RQ12 Q-SYS ${name} - ${deviceId} - ${ipaddress} 방송 취소`,
        email
      )
      logEvent(`방송 취소: ${name}`, email, [name], [deviceId])
      return res.status(200).json({ result: true })
    }
    res.status(401).json({ result: false, message: 'Invaild Auth' })
  } catch (error) {
    res.status(500).json(error)
    // 로그
    logError(`RQ12 Q-SYS 방송 취소 - ${error}`, email)
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
    fnSendQsys('qsys:device:strs', { ...req.body })
    // fnSendDeviceMuticast('qsys:device:strs', { ...req.body })
    // barix get info
    arr.forEach((item) => {
      if (item.destination && item.destination.ipaddress) {
        fnGetBarixInfo(item.destination.ipaddress)
      }
    })
    // 로그 기록
    logInfo(`RQ13 Q-SYS 방송구간 이름 및 스트림 업데이트 - ${deviceId}`, email)
  } catch (error) {
    res.status(500).json(error)
    // 로그
    logError(`RQ13 Q-SYS 방송구간 이름 및 스트림 업데이트 - ${error}`, email)
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
    // fnSendDeviceMuticast('qsys:volume', req.body)
    fnSendQsys('qsys:volume', req.body)
    // 로그
    logInfo(
      `IC02 Q-SYS 볼륨 - ${name} - ${zone} - ${value} -${deviceId}`,
      email
    )
    // 송신
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ14 Q-SYS 볼륨조정 - ${error}`, email)
  }
})

// RQ15 - 방송구간 전체 전송
router.get('/all', async (req, res) => {
  const { email } = req.user
  try {
    await fnSendAllStatusAll()
    res.status(200).json({ result: true })
    // 로그
    logInfo(`RQ15 Q-SYS 전체 송신`, email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    // 로그
    logError(`RQ15 Q-SYS 전체 송신 - ${error}`, email)
  }
})

//RQ16 - PGAE 리셋
router.put('/pagereset', async (req, res) => {
  const { email } = req.user
  try {
    fnCheckPageStatus(req.body.deviceId)
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`RQ16 Q-SYS PAGE 리셋 - ${error}`, email)
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
