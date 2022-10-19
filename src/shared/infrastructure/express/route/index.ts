import { Router } from 'express'
import UserRoute from '../../../../user/infrastructure/express/userRoute'
import ProductRoute from '../../../../product/infrastructure/express/productRoute'
import { PersistenceType } from '../../persistence'

export default class Route {
  public static buildRoute(persistenceType: PersistenceType): Router {
    const apiRoute = Router()
    apiRoute.use('/user', UserRoute.buildRoute(persistenceType))
    apiRoute.use('/product', ProductRoute.buildRoute(persistenceType))

    return apiRoute
  }

}