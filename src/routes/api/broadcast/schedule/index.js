const express = require('express')
const axios = require('axios')
const path = require('node:path')
const fs = require('node:fs')
const makeId = require('@api/utils/uniqueId.js')
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
const { dbQsysUpdate } = require('@db/qsys')
//api
const { fnCMFolder, fnGFile } = require('@api/files')
const { logError, logWarn, logInfo } = require('@logger')
const { fnSyncFileSchedule } = require('@api/qsys/files')
const { fnFileDelete } = require('@api/qsys/files')
const { fnMakePageFromSchedule } = require('@api/schedule')

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
    const { idx, devices, name, file, Preamble, user, zones } = req.body
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
    // page db 업데이트
    await dbPageMake({
      user,
      idx,
      Mode: 'message',
      Priority,
      Preamble,
      Station: 1,
      file,
      devices: page
    })
    let promises = devices.map(async (item) => {
      await dbQsysUpdate(
        { deviceId: item.deviceId },
        { $push: { PageStatus: { idx } } }
      )
    })
    await Promise.all(promises)
    io.bridge.emit('qsys:page:message', page)
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

router.post('/', async (req, res) => {
  try {
    const user = req.user.email
    const { mode, file } = req.body
    const idx = makeId(16)
    fnCMFolder(path.join(gStatus.scheduleFolder, idx))
    const currentFilePath = path.join(gStatus.scheduleFolder, idx, file.base)
    // 스케줄 파일 복사
    mode === '파일'
      ? fs.copyFileSync(file.fullpath, currentFilePath)
      : fs.renameSync(file.fullpath, currentFilePath)
    const newFile = fnGFile(currentFilePath)

    res.status(200).json({
      result: await dbSchMake({
        ...req.body,
        idx,
        user,
        file: newFile
      }),
      idx,
      file: newFile
    })
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
      await fnFileDelete(idx, ipaddress, 'schedule', deviceId)
    })
  } catch (error) {
    //
  }
  try {
    await dbSchRemoveById(schedule._id)
    logWarn(`스케줄 삭제 ${schedule.name}`, req.user.email, 'schedule')
    res.status(200).json({ result: true })
  } catch (error) {
    logError(`스케줄 삭제 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

router.get('/sync', async (req, res) => {
  try {
    await fnSyncFileSchedule(req.query.idx)
  } catch (error) {
    logError(`스케줄 동기화 오류 ${error}`, req.user.email, 'schedule')
    res.status(500).json({ result: false, error })
  }
})

module.exports = router
