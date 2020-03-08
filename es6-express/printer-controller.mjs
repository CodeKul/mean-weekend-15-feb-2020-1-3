import express from 'express'
import bodyParser from 'body-parser'

class PrinterController {

    constructor() {
        this.router = express.Router()
        this.router.use(bodyParser.json())

        this.startPrinter()
        this.stopPrinter()
    }

    get Router() {
        return this.router
    }

    startPrinter() {
        this.router.get('/start', (req, res) => {
            res.json({ status: 'success', msg: 'printer started', result: 'Printer Started with command' })
        })
    }

    stopPrinter() {
        this.router.get('/stop', (req, res) => {
            res.json({ status: 'success', msg: 'printer stopped', result: 'Printer Stopped with command' })
        })
    }
}

export default new PrinterController().Router