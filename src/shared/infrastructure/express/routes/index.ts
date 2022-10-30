import { Router } from 'express'
import UserRoute from '../../../../user/infrastructure/express/userRoute'
import AuthRoute from '../../../../user/infrastructure/express/authRoute'
import ProductRoute from '../../../../product/infrastructure/express/productRoute'
import { PersistenceType } from '../../persistence'
import Authorization from '../middleware/authorization'

export default class Route {
  public static buildRoute(persistenceType: PersistenceType): Router {
    const { authorization } = new Authorization(persistenceType)

    const apiRoutes = Router()
    const { routesPrivate: userRoutesPrivate, routesPublic: userRoutesPublic } = UserRoute.buildRoute(persistenceType)
    if(userRoutesPublic) apiRoutes.use('/user', userRoutesPublic)
    apiRoutes.use('/user', authorization, userRoutesPrivate)

    const { routesPrivate: authRoutePrivate, routesPublic: authRoutePublic } =  AuthRoute.buildRoute(persistenceType)
    if(authRoutePublic) apiRoutes.use('/auth', authRoutePublic)
    apiRoutes.use('/auth', authorization, authRoutePrivate)

    const { routesPrivate: productRoutePrivate, routesPublic: productRoutePublic } =  ProductRoute.buildRoute(persistenceType)
    if(productRoutePublic) apiRoutes.use('/product', productRoutePublic)
    apiRoutes.use('/product', authorization, productRoutePrivate)

    return apiRoutes
  }

}