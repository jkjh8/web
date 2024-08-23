const User = require('@db/models/user')
const { fnBackupRequest } = require('@api/backup')

module.exports = {
  dbUser: User,
  // DU01
  dbUserMake: async (obj) => {
    await User.create({ ...obj })
    // backup
    fnBackupRequest('/backup/user', obj, 'POST')
  },
  dbUserFind: async (obj) => {
    return await User.find({ ...obj }, { userPassword: 0 })
  },
  dbUserFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      User.findOne(obj)
        .then((user) => {
          resolve(user)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  dbUserFindOneNonePass: (obj) => {
    return new Promise((resolve, reject) => {
      User.findOne(obj, { userPassword: 0, _id: 0 })
        .then((user) => {
          resolve(user)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // DU05
  dbUserUpdate: async (filter, value) => {
    await User.findOneAndUpdate(filter, value, { new: true })
    // backup
    fnBackupRequest('/backup/user', { filter, value }, 'PUT')
  },
  // DU06
  dbUserRemove: async (id) => {
    fnBackupRequest('/backup/user', { data: { id } }, 'DELETE')
    return await User.findByIdAndDelete(id)
    // backup
  },
  dbUserExists: async (obj) => {
    return await User.exists(obj)
  }
}
