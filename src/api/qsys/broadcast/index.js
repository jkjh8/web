const { dbPageMake } = require('@db/page')
const { dbQsysFind, dbQsysUpdate } = require('@db/qsys')
const { logInfo, logError, logEvent } = require('@logger')
const Page = require('@db/models/page')

// live 송출 명령 만들기
const fnSetLive = async (idx, obj, user) => {
  try {
    const { _id, ...rest } = obj
    const { devices } = rest
    // page 생성
    await dbPageMake({ ...rest, user, idx })
    // qsys에 pageStatus 추가
    const arr = await Promise.all(
      devices.map(async (item) => {
        const { deviceId, params } = item
        await dbQsysUpdate({ deviceId }, { $push: { PageStatus: { idx } } })
        console.log(params)
        return { idx, deviceId, params }
      })
    )
    return arr
  } catch (error) {
    logError(`방송 송출 오류 ${error}`, user, 'broadcast')
  }
}

// 중복된 방송구간 확인
const fnCheckActive = async (arr) => {
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
    logError(`방송구간 중복 확인 오류 ${error}`, 'server', 'broadcast')
  }
}

// 동작중이지 않은 Qsys PageID 삭제
const fnClearQsysPageID = async () => {
  try {
    const qsys = await dbQsysFind()
    for (const item of qsys) {
      const { deviceId, ZoneStatus } = item
      const hasActive = ZoneStatus.some((zone) => zone.Active)
      if (!hasActive) {
        await dbQsysUpdate({ deviceId }, { $pull: { PageStatus: {} } })
      }
    }
    logInfo(
      `방송 송출 페이지 삭제 완료`,
      req.user?.email ?? 'server',
      'broadcast'
    )
  } catch (error) {
    logError(
      `방송 송출 페이지 삭제 오류 ${error}`,
      req.user?.email ?? 'server',
      'broadcast'
    )
  }
}

// page에서 한시간이 지난 문서 삭제
const fnDeleteOldPage = async () => {
  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
    await Page.deleteMany({ updatedAt: { $lt: oneHourAgo } })
    logInfo(
      '마지막 업데이트가 한시간이 지난 문서 삭제 완료',
      'server',
      'broadcast'
    )
  } catch (error) {
    logError(`문서 삭제 오류 ${error}`, 'server', 'broadcast')
  }
}

module.exports = {
  fnSetLive,
  fnCheckActive,
  fnClearQsysPageID,
  fnDeleteOldPage
}
