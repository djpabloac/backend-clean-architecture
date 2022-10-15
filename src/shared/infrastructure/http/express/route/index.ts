import { Router } from 'express'
import UserRoute from '../../../../../user/infrastructure/http/express/userRoute'
import ProductRoute from '../../../../../product/infrastructure/http/express/productRoute'
import { PersistenceType } from '../../../persistence'

// Select persistence
const persistenceType: PersistenceType = PersistenceType.Mongo

// Router
const apiRoute = Router()
apiRoute.use('/user', UserRoute.buildRoute(persistenceType))
apiRoute.use('/product', ProductRoute.buildRoute(persistenceType))

export default apiRoute