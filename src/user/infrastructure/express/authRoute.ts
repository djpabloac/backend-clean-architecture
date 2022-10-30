import { Router } from 'express'
import { PersistenceType } from '../../../shared/infrastructure/persistence'
import AuthRepository from '../../domain/authRepository'
import UserRepository from '../../domain/userRepository'
import AuthUseCase from '../../application/authUseCase'
import { AuthMockRepository, AuthMongoRepository, UserMockRepository, UserMongoRepository } from '../persistence'
import AuthController from './authController'
import { RouteResult } from '../../../shared/infrastructure/express/controller/RouteController'

export default class AuthRouter {
  private static getRoute(authRepository: AuthRepository, userRepository: UserRepository): RouteResult {
    const authUseCase = new AuthUseCase(authRepository, userRepository)
    const authController = new AuthController(authUseCase)

    const authRoutePrivate = Router()
    authRoutePrivate.post('/sign-out', authController.signOut)
    authRoutePrivate.post('/validate-token', authController.validateToken)

    const authRoutePublic = Router()
    authRoutePublic.post('/login', authController.login)

    return {
      routesPrivate: authRoutePrivate,
      routesPublic : authRoutePublic
    }
  }

  public static buildRoute(persistenceType: PersistenceType): RouteResult {
    if (persistenceType === PersistenceType.Mongo)
      return this.getRoute(new AuthMongoRepository(), new UserMongoRepository())

    if (persistenceType === PersistenceType.Mock)
      return this.getRoute(new AuthMockRepository(), new UserMockRepository())

    throw new Error('Invalid persistence type.')
  }
}
