const port = 3000
import express from 'express'
import  MobileController  from './mobile-controller.mjs'
const app = express()
const router = express.Router()

app.use('/mobile', new MobileController(router))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))