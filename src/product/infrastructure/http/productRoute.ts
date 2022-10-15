import { Router } from 'express'
import { PersistenceType } from '../../../shared/persistence';
import ProductUseCase from '../../application/productUseCase';
import ProductRepository from '../../domain/productRepository';
import { ProductMockRepository, ProductMongoRepository } from '../persistence';
import ProductController from './productController';


export default class ProductRouter {
  private static getRoute(productRepository: ProductRepository):Router {
    const productUseCase = new ProductUseCase(productRepository)
    const productController = new ProductController(productUseCase)

    const userRoute = Router();
    userRoute.get('/product/:uuid', productController.getById)
    userRoute.post('/product', productController.save)
    userRoute.get('/product', productController.getAll)

    return userRoute
  }

  public static createRouterByPersistenceType(persistenceType: PersistenceType): Router {
    if(persistenceType === PersistenceType.Mongo)
    {
      const productRepository = new ProductMongoRepository()

      return this.getRoute(productRepository)
    }

    if(persistenceType === PersistenceType.Mock)
    {
      const productRepository = new ProductMockRepository()

      return this.getRoute(productRepository)
    }

    throw new Error("Invalid persistence type.");
  }
}

