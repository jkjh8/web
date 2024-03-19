const User = require('@db/models/user')

module.exports = {
  makeUser: async (obj) => {
    return await User.create({ ...obj }, { userPassword: 0, _id: 0 })
  },
  userFind: async () => {
    return await User.find({}, { userPassword: 0 })
  },
  userFindOne: (obj) => {
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
  userUpdate: async (filer, value) => {
    return await User.findOneAndUpdate(filer, value, { new: true })
  }
}
