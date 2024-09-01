const moment = require('moment')
const {
  logInfo,
  logWarn,
  logError,
  logEvent,
  logErrorEvent
} = require('@logger')
const {
  dbQsysUpdate,
  dbQsysUpdateOne,
  dbQsysFindAll,
  dbQsysFindOne,
  dbQsysUpdateBackup
} = require('@db/qsys')
const { dbBarixFindOne } = require('@db/barix')
const { dbPageUpdateOne, dbPageFindOne } = require('@db/page')
const { dbSetupUpdate } = require('@db/setup')
const { fnSendSocket } = require('@api/client')
const { fnQsysCheckMediaFolder } = require('@api/qsys/files')
const { fnAmxRelayOff } = require('@api/amx')
const { fnBarixRelayOff } = require('@api/barix')

module.exports = async (socketio) => {
  // IQ01 클라이언트 소켓 연결
  socketio.on('connection', async (socket) => {
    logInfo(
      `IQ01 SOCKET.IO Q-SYS 연결 SERVER=${process.env.INSTANCE_ID}`,
      'SERVER'
    )
    // 연결 상태 업데이트
    let timeString = moment().format('YYYY-MM-DD HH:mm:ss')
    gStatus.qsys = timeString
    gStatus.qsysConnected = true
    // DB에 업데이트
    await dbSetupUpdate({ key: 'qsys' }, { value: timeString })
    await dbSetupUpdate({ key: 'qsysConnected' }, { valueBoolean: true })
    // IQ02 연결 해제
    socket.on('disconnect', async (reason) => {
      logWarn(
        `IQ2 SOCKET.IO Q-SYS 연결해제 SERVER=${process.env.INSTANCE_ID}`,
        'SERVER'
      )
      // 연결 상태 업데이트
      let timeString = moment().format('YYYY-MM-DD HH:mm:ss')
      gStatus.qsysConnected = false
      gStatus.qsys = timeString
      // DB에 업데이트
      await dbSetupUpdate({ key: 'qsys' }, { value: timeString })
      await dbSetupUpdate({ key: 'qsysConnected' }, { valueBoolean: false })
    })

    // IQ03 소켓 연결 에러
    socket.on('connection_error', (error) => {
      logError(
        `IQ03 SOCKET.IO Q-SYS 연결 SERVER=${process.env.INSTANCE_ID} - ${error}`,
        'SERVER'
      )
    })

    // evnets
    // IQ04 QSYS 연결
    socket.on('qsys:connect', (device) => {
      const { deviceId, name, ipaddress } = device
      fnSendSocket('qsys:device', { deviceId, data: { connected: true } })
      fnQsysCheckMediaFolder({ deviceId, name, ipaddress })
      logInfo(`IQ04 QSYS 연결 - ${name} - ${ipaddress} - ${deviceId}`, 'SERVER')
    })
    // IQ05 QSYS 연결 해제
    socket.on('qsys:disconnect', (device) => {
      const { deviceId, name, ipaddress } = device
      fnSendSocket('qsys:device', { deviceId, data: { connected: false } })
      logWarn(
        `IQ05 QSYS 연결 해제 - ${name} - ${ipaddress} - ${deviceId}`,
        'SERVER'
      )
    })
    // IQ06 QSYS ZoneStatus
    socket.on('ZoneStatus', async (obj) => {
      try {
        const { deviceId } = obj
        const update = obj.ZoneStatus

        let device = await dbQsysFindOne({ deviceId })
        let ZoneStatus = device.ZoneStatus

        // if (ZoneStatus.length > update.length) {
        //   ZoneStatus = ZoneStatus.slice(0, update.length - 1)
        // }
        if (ZoneStatus.length === 0) {
          ZoneStatus = update
        } else {
          for (const {
            Zone,
            Active,
            gain,
            mute,
            Priority,
            PriorityName,
            Station,
            Squelch,
            PageID
          } of update) {
            const idx = ZoneStatus.findIndex((item) => item.Zone === Zone)
            if (Zone && idx !== -1) {
              ZoneStatus[idx].Active = Active
              ZoneStatus[idx].gain = gain
              ZoneStatus[idx].mute = mute
              if (Priority) ZoneStatus[idx].Priority = Priority
              if (PriorityName) ZoneStatus[idx].PriorityName = PriorityName
              if (Station) ZoneStatus[idx].Station = Station
              if (Squelch) ZoneStatus[idx].Squelch = Squelch
              if (PageID) ZoneStatus[idx].PageID = PageID
            } else {
              if (Zone && ZoneStatus.length < Zone) {
                for (let i = 0, len = Zone - ZoneStatus.length; i < len; i++) {
                  ZoneStatus.push({
                    Zone: ZoneStatus.length + 1,
                    Active: false,
                    gain: 0,
                    mute: false,
                    Priority: 0,
                    PriorityName: '',
                    Station: '',
                    Squelch: false,
                    PageID: 0
                  })
                }
              }
            }
          }
        }

        const dbupdate = await device.save()
        fnSendSocket(
          'qsys:ZoneStatus',
          JSON.stringify({ deviceId, ZoneStatus: dbupdate.ZoneStatus })
        )
        // 소켓으로 업데이트 전송
        socket.emit('qsys:device', { ...dbupdate })
      } catch (error) {
        logError(
          `IQ06 Q-SYS ZoneStatus 에러: ${error}`,

          'SERVER'
        )
      }
    })

    // IQ07 QSYS VolumeMute
    socket.on('VolumeMute', async (deviceId) => {
      try {
        const device = await dbQsysFindOne({ deviceId })
        const ZoneStatus = device.ZoneStatus.map(
          ({ Zone, Active, gain, mute }) => ({ Zone, Active, gain, mute })
        )
        fnSendSocket(
          'qsys:ZoneStatus',
          JSON.stringify({ deviceId, ZoneStatus })
        )
      } catch (error) {
        logError(`IQ07 Q-SYS VolumeMute - ${error}`, 'SERVER')
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
        logError(`IQ08 Q-SYS 방송구간 확인 - ${error}`, 'SERVER')
      }
    })

    // IQ09 QSYS device
    socket.on('device', (obj) => {
      try {
        const { deviceId, data } = obj
        fnSendSocket('qsys:device', { deviceId, data })
      } catch (error) {
        logError(`IQ09 QSYS device - ${error}`, 'SERVER')
      }
    })
    // IQ10 QSYS deviceAll
    socket.on('deviceAll', async () => {
      try {
        fnSendSocket('qsys:devices', {})
        socket.emit('qsys:devices', await dbQsysFindAll())
      } catch (error) {
        logError(`IQ10 QSYS deviceAll - ${error}`, 'SERVER')
      }
    })
    // IQ11 QSYS page:message
    socket.on('page:message', (obj) => {
      try {
        const { deviceId, message } = obj
        fnSendSocket('qsys:page:message', { deviceId, message })
      } catch (error) {
        logError(`IQ11 QSYS page:message - ${error}`, 'SERVER')
      }
    })
    // IQ12 QSYS EngineStatus
    socket.on('EngineStatus', async (obj) => {
      const { deviceId, EngineStatus } = obj
      try {
        await dbQsysUpdate({ deviceId }, { EngineStatus })
      } catch (error) {
        logError(`IQ12 QSYS EngineStatus - ${error}`, 'SERVER')
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
        logError(`IQ13 QSYS ZoneStatusConfigure - ${error}`, 'SERVER')
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
        logError(`IQ14 QSYS PAGE - ${error}`, 'SERVER')
      }
    })

    // IQ15 QSYS page:status
    socket.on('page:status', async (obj) => {
      console.log(obj)
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
              try {
                await fnAmxRelayOff(currentDevice)
                await fnBarixRelayOff(currentDevice)
                logEvent(
                  `방송장비 OFF - ${currentDevice.name}`,
                  currentPage.user,
                  [currentDevice.name]
                )
              } catch (error) {
                logErrorEvent(
                  `방송장비 OFF - ${currentDevice.name}`,
                  currentPage.user,
                  [currentDevice.name]
                )
              }
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
            `방송 종료: ${currentPage.name ?? ''} - ${
              currentDevice.name ?? ''
            } - ${currentPage.idx ?? ''} - PAGEID: ${PageID ?? ''}`,
            currentPage.user,
            [currentDevice.name],
            [deviceId]
          )
        } else {
          dbQsysUpdate(
            { deviceId, 'PageStatus.PageID': PageID },
            { 'PageStatus.$': { ...params } }
          )
        }
      } catch (error) {
        logError(`IQ15 QSYS PAGE STATUS RT -${error}`, 'SERVER')
      }
    })
    socket.emit('qsys:devices', await dbQsysFindAll())
    logInfo(`IQ01 SOCKET.IO Q-SYS 시작`, 'SERVER')
  })
}
