// logger
const { logInfo, logError } = require('@logger')
// db
const { dbPage, dbPageMake } = require('@db/page')
const {
  dbQsysFind,
  dbQsysUpdate,
  dbQsysUpdateBackup,
  dbQsysFindOne
} = require('@db/qsys')

const { fnSendClientQsysData } = require('@api/qsys')

// QB01 live 송출 명령 만들기
const fnSetLive = async (idx, obj, user) => {
  try {
    const { _id, createdAt, updatedAt, ...rest } = obj
    const { devices } = rest
    // page 생성
    await dbPageMake({ ...rest, user, idx })
    // qsys에 pageStatus 추가
    const arr = await Promise.all(
      devices.map(async (item) => {
        const { deviceId, params } = item
        await dbQsysUpdateBackup(
          { deviceId },
          { $push: { PageStatus: { idx } } }
        )
        return { idx, deviceId, params }
      })
    )
    return arr
  } catch (error) {
    logError(`QB01 방송 송출 ${error}`, user ?? 'server')
  }
}

// QB02 중복된 방송구간 확인
const fnCheckActive = async (arr, user) => {
  try {
    const qsys = await dbQsysFind()
    const active = []
    for (const item of arr) {
      const idx = qsys.findIndex((e) => e.deviceId === item.deviceId)
      const { ZoneStatus, deviceId, name, ipaddress } = qsys[idx]
      const Zones = item.Zones.filter((zone) => ZoneStatus[zone - 1].Active)
      if (Zones.length > 0) {
        active.push({ deviceId, ipaddress, name, Zones })
      }
    }
    return active
  } catch (error) {
    logError(`QB02 방송구간 중복 확인 오류 ${error}`, user ?? 'server')
  }
}

// QB03 동작중이지 않은 Qsys PageID 삭제
const fnClearQsysPageID = async (user) => {
  try {
    const qsys = await dbQsysFind()
    for (const item of qsys) {
      const { deviceId, ZoneStatus } = item
      const hasActive = ZoneStatus.some((zone) => zone.Active)
      if (!hasActive) {
        await dbQsysUpdate({ deviceId }, { $pull: { PageStatus: {} } })
      }
    }
    logInfo(`QB03 방송 송출 페이지 삭제 완료`, req.user?.email ?? 'server')
  } catch (error) {
    logError(`QB03 방송 송출 페이지 삭제 오류 ${error}`, user ?? 'server')
  }
}

// QB04 page에서 한시간이 지난 문서 삭제
const fnDeleteOldPage = async () => {
  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
    await dbPage.deleteMany({ updatedAt: { $lt: oneHourAgo } })
    logInfo('QB04 마지막 업데이트가 한시간이 지난 문서 삭제 완료', 'server')
  } catch (error) {
    logError(`QB04 페이지 완료 문서 삭제 ${error}`, 'server', 'broadcast')
  }
}

// QB04 Zone arr 배열의 리스트를 받아서 db의 ZoneStatus Active를 true로 변경
const fnSetZoneActive = async (deviceId, arr) => {
  try {
    const device = await dbQsysFindOne({ deviceId })
    const ZoneStatus = device.ZoneStatus
    for (let zone of arr) {
      ZoneStatus[zone - 1].Active = true
    }
    await dbQsysUpdate({ deviceId }, { ZoneStatus })
    fnSendClientQsysData(deviceId, { ZoneStatus })
  } catch (error) {
    logError(`QB04 QSYS Zone Active 변경 ${error}`, 'server')
  }
}

module.exports = {
  fnSetLive,
  fnCheckActive,
  fnClearQsysPageID,
  fnDeleteOldPage,
  fnSetZoneActive
}
