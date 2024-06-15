const express = require('express')
const axios = require('axios')
const path = require('node:path')
const fs = require('node:fs')
const uniqueId = require('@api/utils/uniqueId.js')
//io
const io = require('@io')
//db
const {
  dbSchMake,
  dbSchFind,
  dbSchFindOne,
  dbSchUpdate,
  dbSchRemoveById
} = require('@db/schedule')
const { dbPageMake } = require('@db/page')
const { dbQsysFind, dbQsysUpdate, dbQsysPageUpdate } = require('@db/qsys')
//api
const { fnMakeFolder, fnGetFile } = require('@api/files')
const { fnCleanQsysScheduleFolder } = require('@api/schedule')
const { logError, logWarn, logInfo } = require('@logger')

const {
  fnQsysFileDelete,
  fnQsysSyncFileSchedule,
  fnQsysCheckScheduleFolder
} = require('@api/qsys/files')
const { fnMakePageFromSchedule } = require('@api/schedule')
const { fnSendScheduleToAPP } = require('@api/schedule')

const router = express.Router()

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
    logError(`스케줄 찾기 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

router.put('/', async (req, res) => {
  try {
    const { idx, devices, name, file } = req.body
    // page 명령 만들기
    const page = await fnMakePageFromSchedule(req.body)
    // 방송구간 중복 확인
    const exists = await fnCheckActive(devices)
    if (exists && exists.length) {
      logWarn(
        `스케줄 방송 구간 중복`,
        req.user.email,
        'schedule',
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
    // 방송 송출
    io.bridge.emit('qsys:page:message', page)
    // 로그기록
    logInfo(
      `스케줄 방송 시작 ${name} - ${idx} - ${file.base}`,
      req.user.email,
      'schedule',
      zones
    )
  } catch (error) {
    logError(`스케줄 동작 오류 ${error}`, req.user.email, 'schedule')
  }
})

// 스케줄 수정 추가 해야함. 수정 추가시 스케줄 파일 확인해서 변경 혹은 재업로드 로직 필요.

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
    pageMode === 'file'
      ? fs.copyFileSync(file.fullpath, currentFilePath)
      : fs.renameSync(file.fullpath, currentFilePath)
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
  } catch (error) {
    logError(`스케줄 추가 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

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
    logError(`스케줄 중복 확인 오류 ${error}`, req.user.email, 'schedule')
  }
})

router.delete('/', async (req, res) => {
  const { schedule } = req.body
  try {
    fs.rmSync(path.join(gStatus.scheduleFolder, schedule.idx), {
      recursive: true
    })
    const { idx } = schedule
    schedule.devices.forEach(async (device) => {
      const { deviceId, ipaddress } = device
      await fnQsysFileDelete(idx, ipaddress, 'schedule', deviceId)
    })
  } catch (error) {
    //
  }
  try {
    await dbSchRemoveById(schedule._id)
    logWarn(`스케줄 삭제 ${schedule.name}`, req.user.email, 'schedule')
    res.status(200).json({ result: true })
    await fnSendScheduleToAPP()
  } catch (error) {
    logError(`스케줄 삭제 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

// 스케줄 및 파일 동기화
router.get('/sync', async (req, res) => {
  try {
    await fnQsysSyncFileSchedule(req.query.idx)
    res.status(200).json({ result: true })
    logInfo(
      `스케줄 파일 동기화 완료 ${req.query.idx}`,
      req.user.email,
      'schedule'
    )
  } catch (error) {
    logError(`스케줄 파일 동기화 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

// 스케줄 폴더 정리
router.get('/clean', async (req, res) => {
  try {
    await fnCleanQsysScheduleFolder()
    res.status(200).json({ result: true })
    logInfo(`스케줄 폴더 정리`, req.user.email, 'schedule')
  } catch (error) {
    res.status(500).json({ result: false, error })
    logError(`스케줄 폴더 정리 오류 ${error}`, req.user.email, 'schedule')
  }
})

module.exports = router
