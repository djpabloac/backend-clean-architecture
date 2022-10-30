import { Router } from 'express'
import { PersistenceType } from '../../../shared/infrastructure/persistence'
import { UserMockRepository, UserMongoRepository } from '../persistence'
import UserRepository from '../../domain/userRepository'
import UserUseCase from '../../application/userUseCase'
import UserController from './userController'
import { RouteResult } from '../../../shared/infrastructure/express/controller/RouteController'

export default class UserRouter {
  private static getRoute(userRepository: UserRepository): RouteResult {
    const userUseCase = new UserUseCase(userRepository)
    const userController = new UserController(userUseCase)

    const userRoutesPrivate = Router()
    userRoutesPrivate.get('/:uuid', userController.getById)
    userRoutesPrivate.get('', userController.getAll)

    const userRoutesPublic = Router()
    userRoutesPublic.post('', userController.save)

    return {
      routesPrivate: userRoutesPrivate,
      routesPublic : userRoutesPublic
    }
  }

  public static buildRoute(persistenceType: PersistenceType): RouteResult {
    if (persistenceType === PersistenceType.Mongo)
      return this.getRoute(new UserMongoRepository())

    if (persistenceType === PersistenceType.Mock)
      return this.getRoute(new UserMockRepository())

    throw new Error('Invalid persistence type.')
  }
}

