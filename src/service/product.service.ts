import { ProductType } from "./types/product.types";
import productModel from './product.schema'
import { writeFile, readFile } from 'fs/promises'

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

    async find4Prod() {
     
        let randomProducts:any = []

        while(randomProducts.length < 4) {
        let randomNumber: any = Math.floor(Math.random() * 10)
        if(!randomProducts.includes(productModel.findById(randomNumber))) {
            randomProducts.push(productModel.findById(randomNumber))
        }
    }

    return randomProducts    
    }

    async CreateText() {
        const ProdList = await productModel.find()

        await writeFile('products.json', JSON.stringify(ProdList, null, 2))
    }

    async listText() {
        const ProdList = await readFile('products.json')

        return ProdList
    }

}