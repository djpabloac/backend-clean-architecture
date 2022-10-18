import { Router } from 'express'
import { PersistenceType } from '../../../../shared/infrastructure/persistence'
import { UserMockRepository, UserMongoRepository } from '../../persistence'
import UserRepository from '../../../domain/userRepository'
import UserUseCase from '../../../application/userUseCase'
import UserController from './userController'

export default class UserRouter {
  private static getRoute(userRepository: UserRepository):Router {
    const userUseCase = new UserUseCase(userRepository)
    const userController = new UserController(userUseCase)

    const userRoute = Router()
    userRoute.get('/:uuid', userController.getById)
    userRoute.post('', userController.save)
    userRoute.get('', userController.getAll)

    return userRoute
  }

  public static buildRoute(persistenceType: PersistenceType): Router {
    if(persistenceType === PersistenceType.Mongo)
      return this.getRoute(new UserMongoRepository())

    if(persistenceType === PersistenceType.Mock)
      return this.getRoute(new UserMockRepository())

    throw new Error('Invalid persistence type.')
  }
}

