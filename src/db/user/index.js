const User = require('@db/models/user')

module.exports = {
  dbUserMake: async (obj) => {
    return await User.create({ ...obj })
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
    return await User.findByIdAndDelete(id)
  },
  dbUserExists: async (obj) => {
    return await User.exists(obj)
  }
}
