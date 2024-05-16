const Transport = require('winston-transport')
const util = require('util')
const Logs = require('../db/models/logs')
//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
module.exports = class CustomTransport extends Transport {
  constructor(opts) {
    super(opts)

    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail,
    //   logentries, etc.).
    //
  }

  log(info, callback) {
    setImmediate(() => {
      Logs.create({ ...info }).then(() => {
        callback()
      })
      // this.emit('logged', info)
    })

    // Perform the writing to the remote service
  }
}
