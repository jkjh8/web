const { logInfo, logWarn, logError, logEvent } = require('@logger')

const {
  dbQsysUpdate,
  dbQsysUpdateOne,
  dbQsysFindAll,
  dbQsysFindOne,
  dbQsysUpdateBackup
} = require('@db/qsys')
const { dbBarixFindOne } = require('@db/barix')
const { dbPageUpdateOne, dbPageFindOne } = require('@db/page')
const { fnSendSocket } = require('@api/client')
const { fnQsysCheckMediaFolder } = require('@api/qsys/files')
const { fnAmxRelayOff } = require('@api/amx')
const { fnBarixRelayOff } = require('@api/barix')
const { log } = require('winston')

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
        // ZoneStatus Array에서 Active, gain, mute 만 추출하여 소켓으로 전송
        fnSendSocket('qsys:ZoneStatus', {
          deviceId,
          ZoneStatus: ZoneStatus.map(({ Zone, Active, gain, mute }) => ({
            Zone,
            Active,
            gain,
            mute
          }))
        })
        // DB에서 deviceId로 해당 값을 찾은 후 ZoneStatus Array 중 Active, Gain, Mute 만 추출하여 업데이트
        const deviceData = await dbQsysFindOne({ deviceId })
        for (const { Zone, Active, gain, mute } of ZoneStatus) {
          const idx = deviceData.ZoneStatus.findIndex(
            (item) => item.Zone === Zone
          )
          if (idx !== -1) {
            deviceData.ZoneStatus[idx].Active = Active
            deviceData.ZoneStatus[idx].gain = gain
            deviceData.ZoneStatus[idx].mute = mute
          }
        }
        // DB 업데이트
        const update = await deviceData.save()
        // 소켓으로 업데이트 전송
        socket.emit('device', { ...update })
      } catch (error) {
        logError(`IQ06 QSYS ZoneStatus 에러: ${error}`, 'SERVER')
      }
    })
    // IQ07 QSYS VolumeMute
    socket.on('VolumeMute', async (deviceId) => {
      try {
        const device = await dbQsysFindOne({ deviceId })
        const ZoneStatus = device.ZoneStatus.map(
          ({ Zone, Active, gain, mute }) => ({ Zone, Active, gain, mute })
        )
        fnSendSocket('qsys:ZoneStatus', { deviceId, ZoneStatus })
      } catch (error) {
        logError(`IQ07 QSYS VolumeMute 에러: ${error}`, 'SERVER')
      }
    })
    // IQ08 QSYS 방송구간 확인
    socket.on('qsys:get:tr', async (obj) => {
      try {
        const { deviceId, zone, value } = obj
        const barix = dbBarixFindOne({ ipaddress: value })
        fnSendSocket(
          'qsys:device',
          await dbQsysUpdateBackup(
            { deviceId, 'ZoneStatus.&.Zone': zone },
            { 'ZoneStatus.$.destination': barix._id }
          )
        )
      } catch (error) {
        logError(`IQ08 QSYS 방송구간 확인 에러: ${error}`, 'SERVER')
      }
    })

    // IQ09 QSYS device
    socket.on('device', (obj) => {
      try {
        const { deviceId, data } = obj
        fnSendSocket('qsys:device', { deviceId, data })
      } catch (error) {
        logError(`IQ09 QSYS device 에러: ${error}`, 'SERVER')
      }
    })
    // IQ10 QSYS deviceAll
    socket.on('deviceAll', async () => {
      try {
        console.log('deviceAll')
        fnSendSocket('qsys:devices', {})
        socket.emit('qsys:devices', await dbQsysFindAll())
      } catch (error) {
        logError(`IQ10 QSYS deviceAll 에러: ${error}`, 'SERVER')
      }
    })
    // IQ11 QSYS page:message
    socket.on('page:message', (obj) => {
      try {
        const { deviceId, message } = obj
        fnSendSocket('qsys:page:message', { deviceId, message })
      } catch (error) {
        logError(`IQ11 QSYS page:message 에러: ${error}`, 'SERVER')
      }
    })
    // IQ12 QSYS EngineStatus
    socket.on('EngineStatus', async (obj) => {
      const { deviceId, EngineStatus } = obj
      try {
        await dbQsysUpdate({ deviceId }, { EngineStatus })
      } catch (error) {
        logError(`IQ12 QSYS EngineStatus 에러: ${error}`, 'SERVER')
      }
      fnSendSocket('qsys:device', { deviceId, EngineStatus })
    })
    // IQ13 QSYS ZoneStatusConfigure
    socket.on('ZoneStatusConfigure', async (obj) => {
      try {
        const { deviceId, ZoneStatusConfigure } = obj
        await dbQsysUpdate({ deviceId }, { ZoneStatusConfigure })
        fnSendSocket('qsys:device', { deviceId, ZoneStatusConfigure })
      } catch (error) {
        logError(`IQ13 QSYS ZoneStatusConfigure 에러: ${error}`, 'SERVER')
      }
    })
    // IQ14 QSYS page
    socket.on('page:pageId', async (obj) => {
      try {
        const { deviceId, idx, PageID } = obj
        await dbQsysUpdateOne(
          { deviceId, 'PageStatus.idx': idx },
          { 'PageStatus.$.PageID': PageID }
        )
        await dbPageUpdateOne(
          { idx, 'devices.deviceId': deviceId },
          { 'devices.$.PageID': PageID }
        )
      } catch (error) {
        logError(`IQ14 QSYS PAGE 에러: ${error}`, 'SERVER')
      }
    })
    // IQ15 QSYS page:status
    socket.on('page:status', async (obj) => {
      try {
        const { deviceId, ...params } = obj
        const { PageID, State } = params
        if (State === 'done') {
          const currentPage = await dbPageFindOne({
            devices: { $elemMatch: { deviceId, PageID } }
          })
          const currentDevice =
            currentPage.devices[
              currentPage.devices.findIndex(
                (item) => item.deviceId === deviceId
              )
            ]
          setTimeout(async () => {
            setTimeout(async () => {
              await fnAmxRelayOff(currentDevice)
              await fnBarixRelayOff(currentDevice)
            }, 1000)
          })
          await dbQsysUpdate(
            { deviceId },
            { $pull: { PageStatus: { PageID } } }
          )
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
      } catch (error) {
        logError(`IQ15 QSYS PAGE STATUS RT 에러: ${error}`, 'SERVER')
      }
    })
    socket.emit('qsys:devices', await dbQsysFindAll())
    logInfo(`IQ01 Socket Qsys 시작`, 'server')
  })
}
