const axios = require('axios')

const tts = axios.create({ baseURL: 'http://localhost:5000' })

const fnGetTtsInfo = async () => {
  const r = await tts.get('/')
  return r.data.values
}

const fnResetInfo = async () => {
  const r = await tts.get('/reset')
  return r.data.values
}

module.exports = {
  tts,
  fnGetTtsInfo,
  fnResetInfo
}
