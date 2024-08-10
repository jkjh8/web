// logger
const { logInfo, logError, logEvent } = require('@logger')
// db
const { dbPageUpdate, dbPageFindOne } = require('@db/page')
const { dbQsysUpdate, dbQsysFindOne } = require('@db/qsys')
const { dbBarixFindOne } = require('@db/barix')
// api
const { fnQsysCheckMediaFolder, fnQsysFileDelete } = require('@api/qsys/files')
const { fnBarixRelayOff } = require('@api/barix')
const {
  fnSendClientStatusAll,
  fnSendClientQsysData,
  fnSendClientPageMessage
  // fnSendQsysData
} = require('@api/qsys')
const { fnAmxRelayOff } = require('@api/amx')
const { fnSendDeviceMuticast } = require('@multicast')

module.exports = function (socket) {
  // IB02
  socket.on('qsys:connect', async (device) => {
    const { deviceId, name, ipaddress } = device
    // db에서 찾기
    const currentDevice = await dbQsysFindOne({ deviceId })
    // 이미 연결되어 있으면 무시
    if (currentDevice && currentDevice.connected) return

    // db에 연결 상태 갱신
    await dbQsysUpdate({ deviceId }, { connected: true })
    // client에 연결 상태 전송
    fnSendClientQsysData(deviceId, { connected: true })
    // QSYS 저장소 용량 확인
    fnQsysCheckMediaFolder(currentDevice)
    // 로그
    logInfo(`IB02 QSYS 연결 ${name} - ${ipaddress}: ${deviceId}`, 'SERVER')
    //5초후에 QSYS 데이터 가져오기 실행
    setTimeout(() => {
      // fnSendQsysData('zone:get:channels', deviceId)
      fnSendDeviceMuticast('zone:get:channels', deviceId)
      logInfo(
        `IB02 QSYS 데이터 가져오기 실행 ${name} - ${ipaddress}: ${deviceId}`,
        'SERVER'
      )
    }, 5000)
  })

  // IB03
  socket.on('qsys:disconnect', async (device) => {
    const { deviceId, name, ipaddress } = device
    // db에 연결 상태 갱신
    const currentDevice = dbQsysFindOne({ deviceId })
    // 이미 연결 해제되어 있으면 무시
    if (currentDevice && !currentDevice.connected) return

    // db에 업데이트
    await dbQsysUpdate({ deviceId }, { connected: false })
    // client에 연결 상태 전송
    fnSendClientQsysData(deviceId, { connected: false })
    // 로그
    logInfo(`IB03 QSYS 연결 해제 ${name} - ${ipaddress}: ${deviceId}`, 'SERVER')
  })
  //IB04
  socket.on('qsys:device', async (obj) => {
    const { deviceId, data } = obj
    fnSendClientQsysData(deviceId, { ...data })
    // db에 업데이트
    await dbQsysUpdate({ deviceId }, { ...data })
  })

  //IB05
  socket.on('qsys:get:tr', async (obj) => {
    try {
      const { deviceId, zone, value } = obj
      let id = null

      if (value) {
        // barix에 ipaddress가 있는지 확인
        const updated = await dbBarixFindOne({ ipaddress: value })
        if (updated) {
          // db에 Barix가 있으면 ID를 저장
          id = updated._id
        }
      }
      // db에 zone에 destination을 저장
      await dbQsysUpdate(
        { deviceId, 'ZoneStatus.Zone': zone },
        { 'ZoneStatus.$.destination': id }
      )
      // client에 전송
      await fnSendClientStatusAll()
    } catch (error) {
      logError(`IB05 QSYS 방송 구간 지정 ${error}`, 'SERVER')
    }
  })

  // IB06 page
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
      logError(`IB06 QSYS 방송 idx 갱신 오류 ${error}`, 'SERVER')
    }
  })

  // IB07 page 상태 리턴
  socket.on('qsys:page:status', async (obj) => {
    try {
      const { deviceId, params } = obj
      const { State, PageID } = params

      // 종료시
      if (State === 'done') {
        // 종료 메시지(연결된 사용자에게 전송)
        fnSendClientPageMessage({ deviceId, message: '방송 종료' })

        // PAGE 찾기
        const page = await dbPageFindOne({
          devices: { $elemMatch: { deviceId, PageID } }
        })
        // Page에서 device 찾기
        const currentDevice =
          page.devices[page.devices.findIndex((e) => e.deviceId === deviceId)]

        // 릴레이 1초 후에 끄기
        setTimeout(async () => {
          // amx relay off
          await fnAmxRelayOff(currentDevice)
          // barix relay off
          await fnBarixRelayOff(currentDevice)
        }, 1000)
        // 방송 종료 로그
        logEvent(
          `방송 종료:${page.name ?? ''} ${currentDevice.name ?? ''} ID:${
            page.idx ?? ''
          } - PAGEID:${PageID ?? ''}`,
          page.user,
          [currentDevice.name]
        )
        // delete file
        // if (!page.schedule && page.file) {
        //   fnQsysFileDelete({
        //     addr: 'live',
        //     ipaddress: currentDevice.ipaddress,
        //     file: page.file.base,
        //     deviceId: currentDevice.deviceId,
        //     user: page.user
        //   })
        // }
        // delete PageID
        return await dbQsysUpdate(
          { deviceId },
          { $pull: { PageStatus: { PageID } } }
        )
      }
      // Status update
      await dbQsysUpdate(
        { deviceId, 'PageStatus.PageID': PageID },
        { 'PageStatus.$': { ...params } }
      )
    } catch (error) {
      logError(`IB01 QSYS 브릿지 ${error}`, 'SERVER')
    }
  })
}
