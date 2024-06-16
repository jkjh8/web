const User = require('@db/models/user')
const { fnMake, fnDelete } = require('@api/backup/users')

module.exports = {
  dbUserMake: async (obj) => {
    await User.create({ ...obj })
    await fnMake({ ...obj })
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
  },
  dbUserRemove: async (id) => {
    await User.findByIdAndDelete(id)
    await fnDelete(id)
  },
  dbUserExists: async (obj) => {
    return await User.exists(obj)
  }
}
