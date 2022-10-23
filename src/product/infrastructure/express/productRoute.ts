import { Router } from 'express'
import { RouteResult } from '../../../shared/infrastructure/express/controller/RouteController'
import { PersistenceType } from '../../../shared/infrastructure/persistence'
import ProductUseCase from '../../application/productUseCase'
import ProductRepository from '../../domain/productRepository'
import { ProductMockRepository, ProductMongoRepository } from '../persistence'
import ProductController from './productController'

export default class ProductRouter {
  private static getRoute(productRepository: ProductRepository): RouteResult {
    const productUseCase = new ProductUseCase(productRepository)
    const productController = new ProductController(productUseCase)

    const productRoutePrivate = Router()
    productRoutePrivate.get('/:uuid', productController.getById)
    productRoutePrivate.post('', productController.save)
    productRoutePrivate.get('', productController.getAll)

    return {
      routesPrivate: productRoutePrivate
    }
  }

  public static buildRoute(persistenceType: PersistenceType): RouteResult {
    if (persistenceType === PersistenceType.Mongo)
      return this.getRoute(new ProductMongoRepository())

    if (persistenceType === PersistenceType.Mock)
      return this.getRoute(new ProductMockRepository())

    throw new Error('Invalid persistence type.')
  }
}

