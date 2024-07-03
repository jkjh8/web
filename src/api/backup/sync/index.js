const { dbUser } = require('@db/user')
const { dbQsys } = require('@db/qsys')
const { dbBarix } = require('@db/barix')
const { dbSch } = require('@db/schedule')
const { fnBackupRequest } = require('..')

// BK03 사용자 정보 동기화
const fnSyncUser = async () => {
  try {
    // 사용자 숫자 확인
    const userCount = await dbUser.countDocuments()
    if (userCount) {
      fnBackupRequest('/backup/user/reset', {}, 'DELETE')
      // db에서 사용자 10개씩만 가져오기
      for (let i = 0; i < userCount; i += 10) {
        fnBackupRequest(
          '/backup/user/many',
          { users: await dbUser.find({}).skip(i).limit(10) },
          'POST'
        )
      }
    }
  } catch (error) {
    // logError(`BK03 사용자 정보 동기화 ${error}`, 'SERVER')
    throw error
  }
}

// BK04 Qsys 정보 동기화
const fnSyncQsys = async () => {
  try {
    // Qsys 숫자 확인
    const qsysCount = await dbQsys.countDocuments()
    if (qsysCount) {
      fnBackupRequest('/backup/qsys/reset', {}, 'DELETE')
      // db에서 Qsys 10개씩만 가져오기
      for (let i = 0; i < qsysCount; i += 10) {
        const qsys = await dbQsys.find({}).skip(i).limit(10)
        fnBackupRequest('/backup/qsys/many', { qsys }, 'POST')
      }
    }
  } catch (error) {
    // logError(`BK04 QSYS 정보 동기화 ${error}`, 'SERVER')
    throw error
  }
}

// BK05 BARIX 정보 동기화
const fnSyncBarix = async () => {
  try {
    // BARIX 숫자 확인
    const barixCount = await dbBarix.countDocuments()
    if (barixCount) {
      fnBackupRequest('/backup/barix/reset', {}, 'DELETE')
      // db에서 BARIX 10개씩만 가져오기
      for (let i = 0; i < barixCount; i += 10) {
        const barixs = await dbBarix.find({}).skip(i).limit(10)
        fnBackupRequest('/backup/barix/many', { barixs }, 'POST')
      }
    }
  } catch (error) {
    // logError(`BK05 BARIX 정보 동기화 ${error}`, 'SERVER')
    throw error
  }
}

// BK06 스케줄 정보 동기화
const fnSyncSchedule = async () => {
  try {
    // 스케줄 숫자 확인
    const scheduleCount = await dbSch.countDocuments()
    if (scheduleCount) {
      fnBackupRequest('/backup/schedules/reset', {}, 'DELETE')
      // db에서 스케줄 10개씩만 가져오기
      for (let i = 0; i < scheduleCount; i += 10) {
        const schedules = await dbSch.find({}).skip(i).limit(10)
        fnBackupRequest('/backup/schedules/many', { schedules }, 'POST')
      }
    }
  } catch (error) {
    // logError(`BK06 스케줄 정보 동기화 ${error}`, 'SERVER')
    throw error
  }
}

module.exports = {
  fnSyncUser,
  fnSyncQsys,
  fnSyncBarix,
  fnSyncSchedule
}
