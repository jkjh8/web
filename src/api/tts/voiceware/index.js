const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')
const { logInfo, logError } = require('@logger')

const fnMakeTtsFileVW = (args) => {
  return new Promise((resolve, reject) => {
    console.log(args)
    const { voice, text, volume, speed, pitch, filePath, name } = args
    const vw = spawn('C:/bs/web/src/api/tts/voiceware/Voiceware.exe', [
      text,
      name,
      voice,
      volume,
      speed,
      pitch
    ])
    vw.stdout.on('data', (data) => {
      resolve(data.toString())
    })
    vw.stderr.on('data', (data) => {
      reject(new Error(data))
    })
  })
}

module.exports = { fnMakeTtsFileVW }
