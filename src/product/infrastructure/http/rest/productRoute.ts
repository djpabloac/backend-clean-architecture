import { Router } from 'express'
import { PersistenceType } from '../../../../shared/persistence';
import ProductUseCase from '../../../application/productUseCase';
import ProductRepository from '../../../domain/productRepository';
import { ProductMockRepository, ProductMongoRepository } from '../../persistence';
import ProductController from './productController';

const apiName = 'product'

export default class ProductRouter {
  private static getRoute(productRepository: ProductRepository):Router {
    const productUseCase = new ProductUseCase(productRepository)
    const productController = new ProductController(productUseCase)

    const userRoute = Router();
    userRoute.get(`/${apiName}/:uuid`, productController.getById)
    userRoute.post(`/${apiName}`, productController.save)
    userRoute.get(`/${apiName}`, productController.getAll)

    return userRoute
  }

  public static buildRoute(persistenceType: PersistenceType): Router {
    if(persistenceType === PersistenceType.Mongo)
      return this.getRoute(new ProductMongoRepository())

    if(persistenceType === PersistenceType.Mock)
      return this.getRoute(new ProductMockRepository())

    throw new Error("Invalid persistence type.");
  }
}

