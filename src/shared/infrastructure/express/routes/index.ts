import { Router } from 'express'
import UserRoute from '../../../../user/infrastructure/express/userRoute'
import AuthRoute from '../../../../user/infrastructure/express/authRoute'
import ProductRoute from '../../../../product/infrastructure/express/productRoute'
import { PersistenceType } from '../../persistence'
import { authorization } from '../middleware/authorization'

export default class Route {
  public static buildRoute(persistenceType: PersistenceType): Router {
    const apiRoutes = Router()
    const { routesPrivate: userRoutesPrivate, routesPublic: userRoutesPublic } = UserRoute.buildRoute(persistenceType)
    apiRoutes.use('/user', authorization, userRoutesPrivate)
    if(userRoutesPublic) apiRoutes.use('/user', userRoutesPublic)

    const { routesPrivate: authRoutePrivate, routesPublic: authRoutePublic } =  AuthRoute.buildRoute(persistenceType)
    apiRoutes.use('/auth', authorization, authRoutePrivate)
    if(authRoutePublic) apiRoutes.use('/auth', authRoutePublic)

    const { routesPrivate: productRoutePrivate, routesPublic: productRoutePublic } =  ProductRoute.buildRoute(persistenceType)
    apiRoutes.use('/product', authorization, productRoutePrivate)
    if(productRoutePublic) apiRoutes.use('/product', productRoutePublic)

    return apiRoutes
  }

}