import { Router } from 'express'
import { PersistenceType } from '../../../../shared/persistence';
import { UserMockRepository, UserMongoRepository } from '../../persistence';
import UserRepository from '../../../domain/userRepository';
import UserUseCase from '../../../application/userUseCase'
import UserController from './userController'

const apiName = 'user'

export default class UserRouter {
  private static getRoute(userRepository: UserRepository):Router {
    const userUseCase = new UserUseCase(userRepository)
    const userController = new UserController(userUseCase)

    const userRoute = Router();
    userRoute.get(`/${apiName}/:uuid`, userController.getById)
    userRoute.post(`/${apiName}`, userController.save)
    userRoute.get(`/${apiName}`, userController.getAll)

    return userRoute
  }

  public static buildRoute(persistenceType: PersistenceType): Router {
    if(persistenceType === PersistenceType.Mongo)
      return this.getRoute(new UserMongoRepository())

    if(persistenceType === PersistenceType.Mock)
      return this.getRoute(new UserMockRepository())

    throw new Error("Invalid persistence type.");
  }
}

