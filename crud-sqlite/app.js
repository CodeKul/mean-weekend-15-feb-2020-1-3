const port = 3000
const express = require('express')
const app = express()
const deviceController = require('./controller/device-controller.js')
app.use('/device',deviceController)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))