const User = require('@db/models/user')
const { fnBackupRequest } = require('@api/backup')

module.exports = {
  dbUser: User,
  dbUserMake: async (obj) => {
    await User.create({ ...obj })
    // backup
    await fnBackupRequest('/backup/user', obj, 'POST')
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
  dbUserUpdate: async (filter, value) => {
    await User.findOneAndUpdate(filter, value, { new: true })
    // backup
    await fnBackupRequest('/backup/user', { filter, value }, 'PUT')
  },
  dbUserRemove: async (id) => {
    await User.findByIdAndDelete(id)
    // backup
    await fnBackupRequest('/backup/user', { data: { id } }, 'DELETE')
  },
  dbUserExists: async (obj) => {
    return await User.exists(obj)
  }
}
