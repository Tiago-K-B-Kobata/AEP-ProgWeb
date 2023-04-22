import {Request, Response} from 'express'
import { StockService } from './sotck.service'

class sotckController {

    async create(req: Request, res: Response) {
        const stock = await new StockService().get()

        return res.status(200).json(stock)
    }

}

export default new sotckController()