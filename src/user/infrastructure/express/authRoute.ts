import { Router } from 'express'
import { PersistenceType } from '../../../shared/infrastructure/persistence'
import AuthRepository from '../../domain/authRepository'
import UserRepository from '../../domain/userRepository'
import AuthUseCase from '../../application/authUseCase'
import { AuthMockRepository, AuthMongoRepository, UserMockRepository, UserMongoRepository } from '../persistence'
import AuthController from './authController'

export default class AuthRouter {
  private static getRoute(authRepository: AuthRepository, userRepository: UserRepository): Router {
    const authUseCase = new AuthUseCase(authRepository, userRepository)
    const authController = new AuthController(authUseCase)

    const userRoute = Router()
    userRoute.post('/login', authController.login)
    userRoute.post('/sign-out', authController.signOut)

    return userRoute
  }

  public static buildRoute(persistenceType: PersistenceType): Router {
    if (persistenceType === PersistenceType.Mongo)
      return this.getRoute(new AuthMongoRepository(), new UserMongoRepository())

    if (persistenceType === PersistenceType.Mock)
      return this.getRoute(new AuthMockRepository(), new UserMockRepository())

    throw new Error('Invalid persistence type.')
  }
}
