const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const device = require('../domain/device.js')

router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.json({ msg: 'device list', status: 'success', result: [device, device, device] })
})

router.post('/save', (req, res) => {
    res.json({ msg: 'device saved successfully', status: 'success', result: {} })
})

module.exports = router