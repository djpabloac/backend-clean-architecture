import { Request, Response } from 'express'
import { UserUseCase } from '../../application/userUseCase'

export class UserController {
  private readonly userUseCase: UserUseCase

  constructor (userUseCase: UserUseCase) {
    this.userUseCase = userUseCase
    this.getById = this.getById.bind(this)
    this.create = this.create.bind(this)
    this.list = this.list.bind(this)
  }

  public getById = async({ params }: Request, res: Response): Promise<Response> => {
    try {
      const uuid: string = (params.uuid ?? '') as string
      const user = await this.userUseCase.findById(uuid)

      return res.json({ data: user, success: true })
    } catch (error: any) {
      res.status(500)

      return res.json({ message: error.message, success: false })
    }
  }

  public create = async({ body }: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.userUseCase.create(body)

      return res.json({ data: user, success: true })
    } catch (error: any) {
      res.status(500)

      return res.json({ message: error.message, success: false })
    }
  }

  public list = async(_: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.userUseCase.list()

      return res.json({ data: users, success: true })
    } catch (error: any) {
      res.status(500)

      return res.json({ message: error.message, success: false })
    }
  }
}
