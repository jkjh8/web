const fs = require('fs')
const archiver = require('archiver')
const hash = require('@api/utils/uniqueId')

module.exports = (files) => {
  return new Promise((resolve, reject) => {
    const filename = `${hash()}.zip`
    const zipFile = `${gStatus.tempFolder}/${filename}`
    const output = fs.createWriteStream(zipFile)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', () => {
      resolve(zipFile)
    })

    output.on('end', () => {
      //
    })

    archive.on('warning', (err) => {
      if (err.code === 'ENOENT') {
        //
      } else {
        reject(err)
      }
    })
    archive.on('error', (err) => {
      reject(err)
    })
    archive.pipe(output)

    for (let file of files) {
      if (file.type === 'folder') {
        archive.directory(file.fullpath, file.base)
      } else {
        archive.append(fs.createReadStream(file.fullpath, { flags: 'r' }), {
          name: file.base
        })
      }
    }
    archive.finalize()
  })
}
