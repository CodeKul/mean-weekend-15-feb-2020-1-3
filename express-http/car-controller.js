const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/name', (req, res) => {
    res.json({ controller: 'car', features: ['upload-cardata', 'excel-upload'], type: 'json' })
})

router.post('/car', (req, res) => {
    res.json({ status: ' success', msg: 'car saved successfully' })
})

module.exports = router