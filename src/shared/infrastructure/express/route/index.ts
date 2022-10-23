import { Router } from 'express'
import UserRoute from '../../../../user/infrastructure/express/userRoute'
import AuthRoute from '../../../../user/infrastructure/express/authRoute'
import ProductRoute from '../../../../product/infrastructure/express/productRoute'
import { PersistenceType } from '../../persistence'

export default class Route {
  public static buildRoute(persistenceType: PersistenceType): Router {
    const apiRoute = Router()
    apiRoute.use('/user', UserRoute.buildRoute(persistenceType))
    apiRoute.use('/product', ProductRoute.buildRoute(persistenceType))
    apiRoute.use('/auth', AuthRoute.buildRoute(persistenceType))

    return apiRoute
  }

}