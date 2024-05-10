const axios = require('axios')

let ttsProperty

const tts = axios.create({
  baseURL: 'http://localhost:5000'
})

const fnGetTtsInfo = async () => {
  const r = await tts.get('/')
  ttsProperty = r.data
  console.log(ttsProperty)
  return ttsProperty
}

const fnResetInfo = async () => {
  const r = await tts.get('/reset')
  ttsProperty = r.data
  console.log(ttsProperty)
  return ttsProperty
}

module.exports = { tts, ttsProperty, fnGetTtsInfo, fnResetInfo }
