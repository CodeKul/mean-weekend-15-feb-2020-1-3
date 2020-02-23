import { CarController } from './car-controller.mjs'

export class DepotController {

    constructor() {
        this.car = new CarController()
    }
}