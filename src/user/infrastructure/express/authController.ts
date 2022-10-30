import { Request, Response } from 'express'
import ErrorController from '../../../shared/infrastructure/express/controller/ErrorController'
import AuthUseCase from '../../application/authUseCase'

export default class AuthController extends ErrorController {
  private readonly authUseCase: AuthUseCase

  constructor(authUseCase: AuthUseCase) {
    super()
    this.authUseCase = authUseCase
  }

  private getTokenOfHeader = (req: Request) => req.header('Authorization')?.replace('Bearer ', '') ?? ''

  public login = async ({ body }: Request, res: Response): Promise<Response> => {
    try {
      const auth = await this.authUseCase.login(body)

      return res.json({ data: auth, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

  public signOut = async (req: Request, res: Response): Promise<Response> => {
    try {
      const token = this.getTokenOfHeader(req)

      const auth = await this.authUseCase.signOut(token)

      return res.json({ data: auth, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

  public validateToken = async(req: Request, res: Response): Promise<Response> => {
    try {
      const token = this.getTokenOfHeader(req)

      const valid = await this.authUseCase.existsToken(token)

      return res.json({ data: { valid }, success: true })
    } catch (error) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

}
