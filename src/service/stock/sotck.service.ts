import productModel from 'src/service/product.schema'

export class StockService{

    async get() {
        const ProdList = await productModel.find()

        const stocklist = ProdList.map(prod => {
            let val = {
                ...prod,
                stockValue: prod.quantity * prod.price
            }
            return val
        })

     return stocklist
    }

}