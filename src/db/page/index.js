const Page = require('@db/models/page')

module.exports = {
  dbPage: Page,
  dbPageMake: async (obj) => {
    return await Page.create({ ...obj })
  },
  dbPageFind: async (obj) => {
    return await Page.find({ ...obj })
  },
  dbPageFindOne: (obj) => {
    return new Promise((resolve, reject) => {
      Page.findOne(obj)
        .sort({ createdAt: -1 })
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  dbPageUpdate: async (filter, value) => {
    return await Page.findOneAndUpdate(filter, value, {
      new: true,
      upsert: true
    })
  },
  dbPageUpdateOne: async (filter, value) => {
    return await Page.findOneAndUpdate(filter, value)
  },
  dbPageRemove: async (id) => {
    return await Page.findByIdAndDelete(id)
  }
}
