exports.initIO = (io) => {
  let client = io.of('/client')
  let qsys = io.of('/qsys')
  let scheduler = io.of('/scheduler')

  require('@io/client')(client)
  require('@io/qsys')(qsys)
  require('@io/scheduler')(scheduler)

  // return
  exports.io = io
  exports.client = client
  exports.qsys = qsys
  exports.scheduler = scheduler
}
