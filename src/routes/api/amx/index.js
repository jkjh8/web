const express = require('express')
const router = express.Router()
const { dbQsysFindOnePop } = require('@db/qsys')

router.get('/barix', async (req, res) => {
  try {
    const ipaddress = req.query.ipaddress
    const r = await dbQsysFindOnePop({ ipaddress })
    const ipaddresses = []
    for (let item of r.ZoneStatus) {
      if (item.destination) {
        ipaddresses.push(item.destination.ipaddress)
      } else {
        ipaddresses.push(null)
      }
    }
    res.status(200).json(ipaddresses)
  } catch (error) {
    // console.log(error)
    res.status(500).json(error)
  }
})

router.get('/relayontime', async (req, res) => {
  try {
    res.status(200).json({ time: gStatus.relayOnTime })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
