import { Request, Response, NextFunction } from 'express'
import Jwt from '../../jsonwebtoken'
import { PersistenceType } from '../../persistence'
import AuthUseCase from '../../../../user/application/authUseCase'
import { AuthMockRepository, AuthMongoRepository, UserMockRepository, UserMongoRepository } from '../../../../user/infrastructure/persistence'

export default class Authorization {
  private readonly authUseCase: AuthUseCase

  constructor(persistenceType: PersistenceType) {
    if (persistenceType === PersistenceType.Mongo) {
      this.authUseCase = new AuthUseCase(new AuthMongoRepository(), new UserMongoRepository())

      return
    }

    if (persistenceType === PersistenceType.Mock) {
      this.authUseCase = new AuthUseCase(new AuthMockRepository(), new UserMockRepository())

      return
    }

    throw new Error('Invalid persistence type.')
  }

  public authorization = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token)
        throw new Error('Authenticate')

      try {
        const isValid = Jwt.decode(token)
        if (!isValid) throw new Error('')

        const existsToken = await this.authUseCase.existsToken(token)
        if(!existsToken) throw new Error('')
      } catch (error) {
        throw new Error('Unauthorized')
      }

      next()
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error ocurred the connect to mongo'

      res
        .status(401)
        .json({ message: message, success: false })
    }
  }
}