const express = require('express')
const moment = require('moment')
const { logInfo, logError, logEvent } = require('@logger')
// db
const { dbSchFindToday, dbSchFind } = require('@db/schedule')
const { dbSetupUpdate } = require('@db/setup')
const { dbUserUpdate } = require('@db/user')

const { fnSendGlobalStatus } = require('@api/client')

const {
  fnCleanQsysScheduleFolder,
  fnCleanScheduleFolder,
  fnInTimeScheduleRun,
  fnCleanQsysScheduleTypeOnce
} = require('@api/schedule')
const { fnRTemp } = require('@api/files')
const { fnCheckPageStatusAll } = require('@api/qsys')
const { fnQsysDeleteLiveAll } = require('@api/qsys/files')

const router = express.Router()

// SC01
router.get('/', async (req, res) => {
  try {
    const scheduleToday = await dbSchFindToday()
    res.status(200).json({
      result: true,
      schedules: scheduleToday,
      mode: gStatus.mode,
      active: gStatus.activeMode,
      auto: gStatus.scheduler.auto,
      relayOnTime: gStatus.relayOnTime
    })
  } catch (error) {
    logError(`SC01 스케줄러 조회 실패 - ${JSON.stringify(error)}`, 'SERVER')
    res.status(500).json({
      result: false,
      mode: gStatus.mode,
      message: '스케줄러 조회 실패'
    })
  }
})

// SC02 스케줄러 체크
router.get('/check', async (req, res) => {
  try {
    const { mode } = req.query
    gStatus.scheduler[mode] = moment().format('YYYY-MM-DD HH:mm:ss')
    await dbSetupUpdate({ key: 'scheduler' }, { ...gStatus.scheduler })
    await dbSetupUpdate(
      { key: 'scheduler' },
      { valueObj: { ...gStatus.scheduler } }
    )

    res.status(200).json({
      mode: gStatus.mode,
      active: gStatus.activeMode,
      auto: gStatus.scheduler.auto,
      relayOnTime: gStatus.relayOnTime
    })
    fnSendGlobalStatus()
  } catch (error) {
    res.status(500).send('FAIL')
    logError(`SC02 스케줄러 체크 - ${JSON.stringify(error)}`, 'SERVER')
  }
})

// SC03 스케줄러 변경
router.put('/mode', (req, res) => {
  try {
    const { mode } = req.body
    gStatus.activeMode = mode
    dbSetupUpdate({ key: 'activeMode' }, { value: mode })
    res.status(200).json({ result: true, mode })
    logInfo(`SC03 스케줄러 모드 변경 - ${mode}`, 'SCHEDULER')
  } catch (error) {
    res.status(500).send('FAIL')
    logError(`SC03 스케줄러 모드 변경 - ${JSON.stringify(error)}`, 'SERVER')
  }
})
// SC04 스케줄 이벤트
router.put('/', async (req, res) => {
  const { schedule } = req.body
  console.log(schedule)
  const { name, user, zones, file, idx, active } = schedule
  try {
    if (active == false) {
      logWarning(`비활성화된 스케줄 - ${name ?? ''} - ${idx}`, user, zones)
      return
    }
    // 스케줄 방송 시작
    await fnInTimeScheduleRun(schedule)
    // 사용자 방송 횟수 추가
    await dbUserUpdate({ email: user }, { $inc: { numberOfScheduleCall: 1 } })
    // 로그 기록
    logEvent(
      `스케줄방송 시작: ${name ?? ''} - ${file.base} - ${idx}`,
      user,
      zones
    )
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false })
    logError(`SC04 스케줄방송 시작 - ${JSON.stringify(error)}`, user, zones)
  }
})

// SC05 스케줄러 폴더 정리
router.get('/clean', async (req, res) => {
  try {
    if (gStatus.mode === 'Normal') {
      // qsys page 초기화
      fnCheckPageStatusAll()
      //qsys 스케줄 폴더 비우기
      fnCleanQsysScheduleFolder()
      // qsys 스케줄 타입이 once인 폴더 비우기
      fnCleanQsysScheduleTypeOnce()
      // qsys 라이브 폴더 비우기
      fnQsysDeleteLiveAll()
    }
    //스케줄 폴더 비우기
    fnCleanScheduleFolder()
    //temp 폴더 비우기
    fnRTemp()
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: false })
    logError(`SC05 스케줄러 폴더 정리 - ${JSON.stringify(error)}`, 'SERVER')
  }
})

// relayOnTime
router.get('/relay', (req, res) => {
  try {
    const { relayOnTime } = gStatus
    res.status(200).json({ result: true, relayOnTime })
  } catch (error) {
    res.status(500).json({ result: false })
    logError(`SC06 relayOnTime 조회 - ${JSON.stringify(error)}`, 'SERVER')
  }
})

module.exports = router
