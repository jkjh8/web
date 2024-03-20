const User = require('@db/models/user')

module.exports = {
  dbUserMake: async (obj) => {
    return await User.create({ ...obj }, { userPassword: 0, _id: 0 })
  },
  dbUserFind: async () => {
    return await User.find({}, { userPassword: 0 })
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
  dbUserUpdate: async (filer, value) => {
    return await User.findOneAndUpdate(filer, value, { new: true })
  },
  dbUserRemove: async (id) => {
    return await User.findByIdAndDelete(id)
  }
}
