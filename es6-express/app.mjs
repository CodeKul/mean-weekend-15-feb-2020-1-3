const port = 3000
import express from 'express'

import mobileRouter from './mobile-controller.mjs'
import  printerRouter from './printer-controller.mjs'

const app = express()
const router = express.Router()

router.use('/mobile', mobileRouter)
router.use('/printer', printerRouter)

app.use('/api', router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))