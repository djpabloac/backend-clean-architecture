import { Router } from 'express'
import { PersistenceType } from '../../../shared/persistence';
import { UserMockRepository, UserMongoRepository } from '../persistence';
import UserRepository from '../../domain/userRepository';
import UserUseCase from '../../application/userUseCase'
import UserController from './userController'

export default class UserRouter {
  private static getRoute(userRepository: UserRepository):Router {
    const userUseCase = new UserUseCase(userRepository)
    const userController = new UserController(userUseCase)

    const userRoute = Router();
    userRoute.get('/user/:uuid', userController.getById)
    userRoute.post('/user', userController.save)
    userRoute.get('/user', userController.getAll)

    return userRoute
  }

  public static createRouterByPersistenceType(persistenceType: PersistenceType): Router {
    if(persistenceType === PersistenceType.Mongo)
    {
      const userRepository = new UserMongoRepository()

      return this.getRoute(userRepository)
    }

    if(persistenceType === PersistenceType.Mock)
    {
      const userRepository = new UserMockRepository()

      return this.getRoute(userRepository)
    }

    throw new Error("Invalid persistence type.");
  }
}

