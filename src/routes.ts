import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import ProductController from './service/product.controller'
import stockController from './service/stock/stock.controller'
import userController from './users/user.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.post('/products', ProductController.create)
routes.get('/products', ProductController.list)
routes.get('/products/:id', ProductController.find)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)
routes.get('/stock',stockController.create)

// 17 - Estamos exportando a constante routes
export default routes