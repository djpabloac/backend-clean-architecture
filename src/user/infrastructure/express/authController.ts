import { Request, Response } from 'express'
import ErrorController from '../../../shared/infrastructure/express/controller/ErrorController'
import AuthUseCase from '../../application/authUseCase'

export default class AuthController extends ErrorController {
  private readonly authUseCase: AuthUseCase

  constructor(authUseCase: AuthUseCase) {
    super()
    this.authUseCase = authUseCase
  }

  public login = async ({ body }: Request, res: Response): Promise<Response> => {
    try {
      const auth = await this.authUseCase.login(body)

      return res.json({ data: auth, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

  public signOut = async ({ body }: Request, res: Response): Promise<Response> => {
    try {
      const { userId } = body

      const auth = await this.authUseCase.signOut(userId)

      return res.json({ data: auth, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

}
