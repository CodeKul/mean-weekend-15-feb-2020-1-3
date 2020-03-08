import bodyParser from 'body-parser'

class MobileController {

    constructor(router) {
        this.router = router
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
}

export default MobileController 