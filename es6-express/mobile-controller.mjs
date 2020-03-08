import express from 'express'
import bodyParser from 'body-parser'
class MobileController {

    constructor() {
        this.router = express.Router()
        this.router.use(bodyParser.json())

        this.getAllMobiles()
        this.saveMobile()
    }

    getAllMobiles() {
        this.router.get('/', (req, res) => {
            res.json({ status: 'success', msg: 'here is list of all mobiles', result: [] })
        })
    }

    saveMobile() {
        this.router.post('/save', (req, res) => {
            res.json({ status: 'success', msg: 'mobile saved successfully', result: req.body })
        })
    }

    get Router() {
        return this.router
    }
}

export default new MobileController().Router