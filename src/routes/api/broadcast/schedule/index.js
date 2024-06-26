const express = require('express')
const path = require('node:path')
const fs = require('node:fs')
// logger
const { logError, logWarn, logInfo } = require('@logger')
// db
const { dbPageMake } = require('@db/page')
const { fnCheckActive } = require('@api/schedule')
const { dbUserUpdate } = require('@db/user')
const { dbQsysPageUpdate } = require('@db/qsys')
const {
  dbSchMake,
  dbSchFind,
  dbSchUpdate,
  dbSchRemoveById
} = require('@db/schedule')
// api
const uniqueId = require('@api/utils/uniqueId.js')
const { fnSendQsysData } = require('@api/qsys')
const { fnMakeFolder, fnGetFile } = require('@api/files')
const { fnCleanQsysScheduleFolder } = require('@api/schedule')
const { fnBarixesRelayOn } = require('@api/barix')
const { fnAmxesRelayOn } = require('@api/amx')
const { fnQsysFileDelete, fnQsysSyncFileSchedule } = require('@api/qsys/files')
const { fnMakePageFromSchedule } = require('@api/schedule')
const { fnSendScheduleToAPP } = require('@api/schedule')

// router
const router = express.Router()

router.use('/app', require('./app'))

// SH01
router.get('/', async (req, res) => {
  try {
    const { isAdmin, zones } = req.user
    if (isAdmin) {
      res.status(200).json({ result: true, schedules: await dbSchFind() })
    } else {
      res.status(200).json({
        result: true,
        schedules: await dbSchFind({ 'devices.deviceId': { $in: zones } })
      })
    }
  } catch (error) {
    logError(`SH01 스케줄 찾기 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// SH02
router.put('/active', async (req, res) => {
  try {
    const { _id, name, idx, active } = req.body
    await dbSchUpdate({ _id }, { active })
    res.status(200).json({ result: true })
    if (active) {
      logInfo(`SH02 스케줄 활성화 ${name} - ${idx}`, req.user.email)
    } else {
      logWarn(`SH02스케줄 비활성화 ${name} - ${idx}`, req.user.email)
    }
  } catch (error) {
    logError(`SH02 스케줄 활성화 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// SH03
router.put('/', async (req, res) => {
  try {
    const { idx, devices, name, file } = req.body
    // page 명령 만들기
    const page = await fnMakePageFromSchedule(req.body)
    // 방송구간 중복 확인
    const exists = await fnCheckActive(devices)
    if (exists && exists.length) {
      logWarn(
        `SH03 스케줄 방송 구간 중복`,
        req.user.email,
        exists.map((e) => `${e.name}-${e.Zones.join(',')}`)
      )
    }
    // Page db 업데이트
    await dbPageMake({
      ...req.body,
      Mode: 'message',
      Station: 1,
      Priority: 3,
      devices: page
    })
    // Qsys db 업데이트
    await dbQsysPageUpdate(devices, idx)

    // 릴레이 구동
    await runRelays(devices)

    // 1초 대기
    await wait(1000)

    // 방송 시작
    startBroadcast(page, name, idx, file.base, req.user.email, zones)

    // 사용횟수 증가
    await increaseUserScheduleCall(req.user._id)
  } catch (error) {
    logError(`SH03 스케줄 동작 ${error}`, req.user.email)
  }
})

// SH04
router.post('/', async (req, res) => {
  try {
    const user = req.user.email
    const { pageMode, file, devices } = req.body
    // schedule idx 생성
    const idx = uniqueId(16)
    // 스케줄 폴더 생성
    fnMakeFolder(path.join(gStatus.scheduleFolder, idx))
    // 스케줄 파일 경로
    const currentFilePath = path.join(gStatus.scheduleFolder, idx, file.base)
    // 스케줄 파일 복사
    copyOrRenameFile(pageMode, file.fullpath, currentFilePath)
    // 스케줄 파일 정보
    const newFile = fnGetFile(currentFilePath)
    // 스케줄 db 추가
    const schedule = await dbSchMake({
      ...req.body,
      idx,
      user,
      file: newFile
    })

    res.status(200).json({
      result: schedule,
      idx,
      file: newFile
    })
    await fnSendScheduleToAPP()
    // 사용자 사용회수 증가
    await increaseUserSchedule(req.user.email)
  } catch (error) {
    logError(`SH04 스케줄 추가 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// SH05 스케줄 중복 확인
router.get('/exists', async (req, res) => {
  try {
    res.status(200).json({
      result: true,
      schedules: await dbSchFind({
        'time': req.query.time,
        'devices.deviceId': { $in: req.query.devices }
      })
    })
  } catch (error) {
    logError(`SH05 스케줄 중복 확인 ${error}`, req.user.email)
  }
})

// SH06 스케줄 삭제
router.delete('/', async (req, res) => {
  const { schedule } = req.body
  // 파일 삭제
  try {
    // 서버에서 삭제
    fs.rmSync(path.join(gStatus.scheduleFolder, schedule.idx), {
      recursive: true
    })
    // qsys에서 삭제
    const { idx } = schedule
    schedule.devices.forEach(async (device) => {
      const { deviceId, ipaddress } = device
      await fnQsysFileDelete({
        idx,
        ipaddress,
        addr: 'schedule',
        deviceId,
        user: req.user.email
      })
    })
  } catch (error) {
    //
  }
  // SH07 db 삭제
  try {
    await dbSchRemoveById(schedule._id)
    logWarn(`SH07 스케줄 삭제 ${schedule.name}`, req.user.email)
    res.status(200).json({ result: true })
    // 스케줄 APP으로 전송
    await fnSendScheduleToAPP()
  } catch (error) {
    logError(`SH07 스케줄 삭제 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// SH08 스케줄 및 파일 동기화
router.get('/sync', async (req, res) => {
  try {
    await fnQsysSyncFileSchedule(req.query.idx, req.user.email)
    res.status(200).json({ result: true })
    logInfo(`SH08 스케줄 파일 동기화 ${req.query.idx}`, req.user.email)
  } catch (error) {
    logError(`SH08 스케줄 파일 동기화 ${error}`, req.user.email)
    res.status(500).json({ result: false, error })
  }
})

// SH09 스케줄 폴더 정리
router.get('/clean', async (req, res) => {
  try {
    await fnCleanQsysScheduleFolder()
    res.status(200).json({ result: true })
    logInfo(`SH09 스케줄 폴더 정리`, req.user.email)
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`SH09 스케줄 폴더 정리 ${error}`, req.user.email)
  }
})

module.exports = router

// Helper functions

async function runRelays(devices) {
  // amx 릴레이 구동
  await fnAmxesRelayOn(devices)
  // Barix 릴레이 구동
  await fnBarixesRelayOn(devices)
  // 로그
  logEvent(`스케줄 방송 릴레이 구동 완료 ID:${idx}`, email, zones)
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function startBroadcast(page, name, idx, fileBase, email, zones) {
  // 방송 송출
  fnSendQsysData('qsys:page:message', page)
  // 로그기록
  logInfo(`스케줄 방송 송출 시작 ${name} - ${idx} - ${fileBase}`, email, zones)
}

async function increaseUserScheduleCall(userId) {
  await dbUserUpdate({ _id: userId }, { $inc: { numberOfScheduleCall: 1 } })
}

function copyOrRenameFile(pageMode, sourcePath, destinationPath) {
  if (pageMode === 'file') {
    fs.copyFileSync(sourcePath, destinationPath)
  } else {
    fs.renameSync(sourcePath, destinationPath)
  }
}

async function increaseUserSchedule(email) {
  await dbUserUpdate({ email: email }, { $inc: { numberOfSchedule: 1 } })
}
