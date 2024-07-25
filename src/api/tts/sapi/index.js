const { spawn } = require('child_process')

const fnGetTtsInfo = async () => {
  return new Promise((resolve, reject) => {
    const python = spawn('C:/python/python312/python.exe', [
      'src/api/tts/sapi/getTtsInfo.py'
    ])
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
    const python = spawn('C:/python/python312/python.exe', [
      'src/api/tts/sapi/getTtsInfo.py'
    ])
    python.stdout.on('data', (data) => {
      resolve(JSON.parse(data.toString()))
    })
  })
}

const fnMakeTtsFile = async (rate, text, voice, filePath) => {
  return new Promise((resolve, reject) => {
    const python = spawn('C:/python/python312/python.exe', [
      'src/api/tts/sapi/makeTtsFile.py',
      rate,
      text,
      voice,
      filePath
    ])
    python.stdout.on('data', (data) => {
      console.log(data.toString())
      resolve(JSON.parse(data.toString()))
    })
    python.stderr.on('data', (data) => {
      reject(new Error(data))
    })
  })
}

module.exports = {
  fnGetTtsInfo,
  fnResetInfo,
  fnMakeTtsFile
}
