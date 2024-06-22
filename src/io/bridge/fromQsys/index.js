// logger
const { logInfo, logError, logEvent } = require('@logger')
// db
const { dbPageUpdate, dbPageFindOne } = require('@db/page')
const { dbQsysUpdate } = require('@db/qsys')
const { dbBarixFindOne } = require('@db/barix')
// api
const { fnQsysCheckMediaFolder } = require('@api/qsys/files')
const { fnBarixRelayOff } = require('@api/barix')
const {
  fnSendClientStatusAll,
  fnSendClientQsysData,
  fnSendClientPageMessage
} = require('@api/qsys')
const { fnAmxRelayOff } = require('@api/amx')

module.exports = function (socket) {
  socket.on('qsys:connect', async (device) => {
    const { deviceId, name, ipaddress } = device
    const r = await dbQsysUpdate({ deviceId }, { connected: true })
    fnSendClientQsysData(deviceId, { connected: true })
    fnQsysCheckMediaFolder(r)
    logInfo(`QSYS 연결 ${name} - ${ipaddress} - ${deviceId}`, 'qsys', 'connect')
  })

  socket.on('qsys:disconnect', async (device) => {
    const { deviceId, name, ipaddress } = device
    await dbQsysUpdate({ deviceId }, { connected: false })
    fnSendClientQsysData(deviceId, { connected: false })
    logInfo(
      `QSYS 연결 해제 ${name} - ${ipaddress} - ${deviceId}`,
      'qsys',
      'disconnect'
    )
  })

  socket.on('qsys:device', async (obj) => {
    const { deviceId, data } = obj
    await dbQsysUpdate({ deviceId }, { ...data })
    fnSendClientQsysData(deviceId, { ...data })
  })

  socket.on('qsys:rttr', async (obj) => {
    const { deviceId, zone, value } = obj
    let id = null

    if (value) {
      const r = await dbBarixFindOne({ ipaddress: value })
      console.log(r)
      if (r) {
        id = r._id
      }
    }
    await dbQsysUpdate(
      { deviceId, 'ZoneStatus.Zone': zone },
      { 'ZoneStatus.$.destination': id }
    )
    await fnSendClientStatusAll()
  })

  // page
  socket.on('qsys:page:id', async (obj) => {
    try {
      const { deviceId, idx, PageID } = obj
      // qsys에 pageID 갱신
      await dbQsysUpdate(
        { deviceId, 'PageStatus.idx': idx },
        { $set: { 'PageStatus.$.PageID': PageID } }
      )
      // page에 pageID 갱신
      await dbPageUpdate(
        { idx, 'devices.deviceId': deviceId },
        { $set: { 'devices.$.PageID': PageID } }
      )
    } catch (error) {
      logError(`QSYS 방송 idx 갱신 오류 ${error}`, 'qsys', 'page')
    }
  })

  // page 상태 리턴
  socket.on('qsys:page:status', async (obj) => {
    try {
      const { deviceId, params } = obj
      // 종료시
      if (params.State === 'done') {
        // 종료 메시지(연결된 사용자에게 전송)
        fnSendClientPageMessage({ deviceId, message: '방송 종료' })

        // PAGE 찾기
        const page = await dbPageFindOne({
          devices: { $elemMatch: { deviceId: deviceId, PageID: params.PageID } }
        })
        // Page에서 device 찾기
        const currentDevice =
          page.devices[page.devices.findIndex((e) => e.deviceId === deviceId)]
        // amx relay off
        await fnAmxRelayOff(currentDevice)
        // barix relay off
        await fnBarixRelayOff(currentDevice.barix)
        // 방송 종료 로고
        logEvent(
          `방송 종료 ${currentDevice.name} ID:${page.idx} - PAGEID:${params.PageID}`,
          page.user,
          'page',
          [currentDevice.name]
        )
        // delete PageID
        return await dbQsysUpdate(
          { deviceId },
          { $pull: { PageStatus: { PageID: params.PageID } } }
        )
      }
      // Status update
      await dbQsysUpdate(
        {
          deviceId,
          'PageStatus.PageID': params.PageID
        },
        { $set: { 'PageStatus.$': { ...params } } }
      )
    } catch (error) {
      logError(`QSYS PAGE 상태 갱신오류 ${error}`, 'qsys', 'page')
    }
  })
}
