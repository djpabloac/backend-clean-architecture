import { Request, Response } from 'express'
import ErrorController from '../../../shared/infrastructure/express/controller/ErrorController'
import UserUseCase from '../../application/userUseCase'

export default class UserController extends ErrorController {
  private readonly userUseCase: UserUseCase

  constructor (userUseCase: UserUseCase) {
    super()
    this.userUseCase = userUseCase
  }

  public getById = async({ params }: Request, res: Response): Promise<Response> => {
    try {
      const uuid: string = (params.uuid ?? '') as string
      const user = await this.userUseCase.getById(uuid)

      return res.json({ data: user, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

  public save = async({ body }: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.userUseCase.save(body)

      return res.json({ data: user, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }

  public getAll = async(_: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.userUseCase.getAll()

      return res.json({ data: users, success: true })
    } catch (error: unknown) {
      res.status(500)

      return res.json({ message: this.getMessageByError(error), success: false })
    }
  }
}
