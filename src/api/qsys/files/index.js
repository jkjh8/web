const axios = require('axios')
const https = require('https')

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

const fnMakeAddr = (ipaddr) => {
  return `https://${ipaddr}/api/v0/cores/self/media/Messages`
}

const fnCheckMediaFolder = async (device) => {
  try {
    await api.post(fnMakeAddr(device.ipaddress), { name: 'live' })
  } catch (error) {
    //
  }

  try {
    await api.post(fnMakeAddr(device.ipaddress), { name: 'schedule' })
  } catch (error) {
    //
  }
}

module.exports = {
  api,
  fnMakeAddr,
  fnCheckMediaFolder
}
