const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')

const fnMakeTtsFileVW = (args) => {
  return new Promise((resolve, reject) => {
    const { voice, text, volume, speed, pitch, filePath, name } = args
    const vw = spawn('C:/bs/web/src/api/tts/voiceware/Voiceware.exe', [
      text,
      filePath,
      voice,
      volume,
      speed,
      pitch
    ])
    vw.stdout.on('data', (data) => {
      try {
        const ret = data.toString()
        console.log(ret)
        // ret를 ,로 구분하고 :를 분리해서 Object로 만들어준다.
        const obj = ret.split(',').reduce((acc, cur) => {
          const [key, value] = cur.split('=')
          acc[key] = value
          return acc
        }, {})
        resolve(obj)
      } catch (error) {
        reject(error)
      }
    })
    vw.stderr.on('data', (data) => {
      const ret = data.toString()
      // ret를 ,로 구분하고 :를 분리해서 Object로 만들어준다.
      const obj = ret.split(',').reduce((acc, cur) => {
        const [key, value] = cur.split('=')
        acc[key] = value
        return acc
      }, {})
      reject(new Error(obj))
    })
  })
}

module.exports = { fnMakeTtsFileVW }
