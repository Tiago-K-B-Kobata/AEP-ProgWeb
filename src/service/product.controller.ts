import {Request, Response} from 'express'
import { ProductService } from './product.service'

class ProductController {

    async create(req: Request, res: Response) {
        const user = await new ProductService().create(req.body)

        return res.status(200).json(user)
    }
    
    async list(req: Request, res: Response){
        const products = await new ProductService().list()

        return res.status(200).json(products)
    }

    async find(req: Request, res: Response){
        const product = await new ProductService().findProd(req.params.id)

        return res.status(200).json(product)
    }

    async update(req: Request, res: Response){
        const updatedproduct = await new ProductService().update(req.params.id, req.body)

        return res.status(200).json(updatedproduct)
    }

    async delete(req: Request, res: Response){
        const products = await new ProductService().remove(req.params.id)

        return res.status(200).json("foi de americanas")
    }
}

export default new ProductController()