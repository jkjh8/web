const { dbUserFindOne } = require('@db/user')
const { logError } = require('@logger')

// US01 socketId 조회
const fnGetSocketId = async (email) => {
  try {
    const r = await dbUserFindOne({ email })
    return r.socketId
  } catch (error) {
    logError(`US01 socketId 조회 실패 ${error}`, 'server')
  }
}

module.exports = {
  fnGetSocketId
}
