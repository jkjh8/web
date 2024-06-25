const axios = require('axios')
const { spawn } = require('child_process')
const { logInfo, logError } = require('@logger')

const tts = axios.create({ baseURL: 'http://localhost:5000' })

const fnGetTtsInfo = async () => {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['src/api/tts/getTtsInfo.py'])
    python.stdout.on('data', (data) => {
      resolve(JSON.parse(data.toString()))
    })
    python.stderr.on('data', (data) => {
      reject(new Error(data))
    })
  })
}

const fnResetInfo = async () => {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['src/api/tts/getTtsInfo.py'])
    python.stdout.on('data', (data) => {
      resolve(JSON.parse(data.toString()))
    })
  })
}

const fnMakeTtsFile = async (rate, text, voice, filePath) => {
  return new Promise((resolve, reject) => {
    const python = spawn('python', [
      'src/api/tts/makeTtsFile.py',
      rate,
      text,
      voice,
      filePath
    ])
    python.stdout.on('data', (data) => {
      resolve(JSON.parse(data.toString()))
    })
    python.stderr.on('data', (data) => {
      reject(new Error(data))
    })
  })
}

module.exports = {
  tts,
  fnGetTtsInfo,
  fnResetInfo,
  fnMakeTtsFile
}
