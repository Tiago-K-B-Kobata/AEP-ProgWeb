import { ProductType } from "./types/product.types";
import productModel from './product.schema'

export class ProductService {


    async create(user: ProductType) {
        const createdPro = await productModel.create(user)

        return createdPro
    }

    async list() {
        const ProdList = await productModel.find()

        return ProdList
    }

    async findProd(id) {
        const Prod = await productModel.findById(id)

        return Prod
    }
    
    async update(id, dataToUpdate: ProductType) {
        const updatedUser = await productModel.findOneAndUpdate({_id: id}, {
            Name: dataToUpdate.name,
            quantity: dataToUpdate.quantity,
            price: dataToUpdate.price
        }, {new: true})
        return updatedUser
    }

    async remove(id) {
       await productModel.findByIdAndDelete(id)
    }
}