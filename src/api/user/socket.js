const { dbUserFindOne } = require('@db/user')

const fnGetSocketId = async (email) => {
  const r = await dbUserFindOne({ email })
  return r.socketId
}

module.exports = {
  fnGetSocketId
}
