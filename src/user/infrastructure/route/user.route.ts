import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.controller'
import { UserMockRepository } from '../repository/mock/user.mock.repository';
// import { UserMongoRepository } from '../repository/mongo/user.mongo.repository'

const userRoute = Router();
const userRepository = new UserMockRepository()
const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

userRoute.get('/user/:uuid', userController.getById)
userRoute.post('/user', userController.create)
userRoute.get('/user', userController.list)

export default userRoute
