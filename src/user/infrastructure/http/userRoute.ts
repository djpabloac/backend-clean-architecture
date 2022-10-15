import { Router } from 'express'
import UserUseCase from '../../application/userUseCase'
import UserController from './userController'
import { UserMockRepository } from '../persistence';

const userRepository = new UserMockRepository()
const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

const userRoute = Router();
userRoute.get('/user/:uuid', userController.getById)
userRoute.post('/user', userController.save)
userRoute.get('/user', userController.getAll)

export default userRoute
