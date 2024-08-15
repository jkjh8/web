const { logInfo, logWarn, logError, logEvent } = require('@logger')

const { dbQsysUpdate, dbQsysUpdateOne, dbQsysFindAll } = require('@db/qsys')
const { dbPageUpdateOne } = require('@db/page')
const { fnSendSocket } = require('@api/client')
const { fnQsysCheckMediaFolder } = require('@api/qsys/files')
const { fnAmxRelayOff } = require('@api/amx')
const { fnBarixRelayOff } = require('@api/barix')

module.exports = async (socketio) => {
  // IQ01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    // const user = socket.request.user
    logInfo(`IQ01 Socket Qsys 연결 ID:${process.env.INSTANCE_ID}`, 'SERVER')
    // IQ02 연결 해제
    socket.on('disconnect', (reason) => {
      logWarn(
        `IQ2 Socket Qsys 연결해제 ID:${process.env.INSTANCE_ID}`,
        'SERVER'
      )
    })

    // IQ03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(`IQ03 Socket Qsys 연결 ID:${process.env.INSTANCE_ID} - ${error}`)
    })

    // evnets
    // IQ04 QSYS 연결
    socket.on('qsys:connect', (device) => {
      const { deviceId, name, ipaddress } = device
      fnSendSocket('qsys:device', { deviceId, data: { connected: true } })
      fnQsysCheckMediaFolder({ deviceId, name, ipaddress })
      logInfo(`IQ04 QSYS 연결 ${name} - ${ipaddress}: ${deviceId}`, 'SERVER')
    })
    // IQ05 QSYS 연결 해제
    socket.on('qsys:disconnect', (device) => {
      const { deviceId, name, ipaddress } = device
      fnSendSocket('qsys:device', { deviceId, data: { connected: false } })
      logWarn(
        `IQ05 QSYS 연결 해제 ${name} - ${ipaddress}: ${deviceId}`,
        'SERVER'
      )
    })
    // IQ06 QSYS ZoneStatus
    socket.on('ZoneStatus', async (obj) => {
      try {
        const { deviceId, ZoneStatus } = obj
        await dbQsysUpdate({ deviceId }, { ZoneStatus })

        fnSendSocket('qsys:ZoneStatus', { deviceId, ZoneStatus })
      } catch (error) {
        logError(`IQ06 QSYS ZoneStatus 에러: ${error}`)
      }
    })
    // IQ07 QSYS device
    socket.on('device', (obj) => {
      const { deviceId, data } = obj
      fnSendSocket('qsys:device', { deviceId, data })
    })
    // IQ08 QSYS deviceAll
    socket.on('deviceAll', async () => {
      fnSendSocket('qsys:devices', {})
      socket.emit('qsys:devices', await dbQsysFindAll())
    })
    // IQ09 QSYS page:message
    socket.on('page:message', (obj) => {
      const { deviceId, message } = obj
      fnSendSocket('qsys:page:message', { deviceId, message })
    })
    // IQ10 QSYS EngineStatus
    socket.on('EngineStatus', async (obj) => {
      const { deviceId, EngineStatus } = obj
      await dbQsysUpdate({ deviceId }, { EngineStatus })
      fnSendSocket('qsys:device', { deviceId, EngineStatus })
    })
    // IQ11 QSYS ZoneStatusConfigure
    socket.on('ZoneStatusConfigure', async (obj) => {
      const { deviceId, ZoneStatusConfigure } = obj
      await dbQsysUpdate({ deviceId }, { ZoneStatusConfigure })
      fnSendSocket('qsys:device', { deviceId, ZoneStatusConfigure })
    })
    // IQ12 QSYS page
    socket.on('page:pageId', async (obj) => {
      const { deviceId, idx, PageID } = obj
      await dbQsysUpdateOne(
        { deviceId, 'PageStatus.idx': idx },
        { 'PageStatus.$.PageID': PageID }
      )
      await dbPageUpdateOne(
        { idx, 'devices.deviceId': deviceId },
        { 'devices.$.PageID': PageID }
      )
    })
    // IQ13 QSYS page:status
    socket.on('page:status', async (obj) => {
      const { deviceId, ...params } = obj
      const { PageID, Status } = params

      if (Status === 'done') {
        const currentPage = dbPageFindOne({
          devices: { $elemMatch: { deviceId, PageID } }
        })
        const currentDevice =
          currentPage.devices[
            currentPage.devices.findIndex((item) => item.deviceId === deviceId)
          ]
        setTimeout(async () => {
          setTimeout(async () => {
            await fnAmxRelayOff(currentDevice)
            await fnBarixRelayOff(currentDevice)
          }, 1000)
        })
        await dbQsysUpdate({ deviceId }, { $pull: { PageStatus: { PageID } } })
        fnSendSocket('page:message', {
          deviceId,
          message: '방송 종료'
        })
        logEvent(
          `방송 종료: ${currentPage.name ?? ''} ${
            currentDevice.name ?? ''
          } idx: ${currentPage.idx ?? ''} -PAGEID: ${PageID ?? ''}`,
          currentPage.user,
          [currentDevice.name]
        )
      } else {
        dbQsysUpdate(
          { deviceId, 'PageStatus.PageID': PageID },
          { 'PageStatus.$': { ...params } }
        )
      }
    })
    socket.emit('qsys:devices', await dbQsysFindAll())
    logInfo(`IQ01 Socket Qsys 시작`, 'server')
  })
}
