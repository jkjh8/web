exports.initIO = (io) => {
  let client = io.of('/client')
  let qsys = io.of('/qsys')
  let barix = io.of('/barix')
  let scheduler = io.of('/scheduler')

  require('@io/client')(client)
  require('@io/qsys')(qsys)
  require('@io/barix')(barix)
  require('@io/scheduler')(scheduler)

  // return
  exports.io = io
  exports.client = client
  exports.qsys = qsys
  exports.barix = barix
  exports.scheduler = scheduler
}
