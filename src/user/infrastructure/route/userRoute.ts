import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/userController'
import { UserMockRepository, UserMongoRepository } from '../repository';
import { TypeDriveWithDataBase } from './config';

const DRIVE_WITH_DATABASE = process.env.DRIVE_WITH_DATABASE ?? TypeDriveWithDataBase.Mock

const getUserRepositoryByDrive = (typeDriveWithDataBase: string) => {
  if(TypeDriveWithDataBase.Mongo === typeDriveWithDataBase) return new UserMongoRepository()

  return new UserMockRepository()
}

const userRoute = Router();
const userRepository = getUserRepositoryByDrive(DRIVE_WITH_DATABASE)

const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

userRoute.get('/user/:uuid', userController.getById)
userRoute.post('/user', userController.create)
userRoute.get('/user', userController.list)

export default userRoute
