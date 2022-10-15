import { Request, Response } from 'express'
import ProductUseCase from '../../application/productUseCase'

export default class ProductController {
  private readonly productUseCase: ProductUseCase

  constructor (productUseCase: ProductUseCase) {
    this.productUseCase = productUseCase
  }

  public getById = async({ params }: Request, res: Response): Promise<Response> => {
    try {
      const uuid: string = (params.uuid ?? '') as string
      const user = await this.productUseCase.getById(uuid)

      return res.json({ data: user, success: true })
    } catch (error: any) {
      res.status(500)

      return res.json({ message: error.message, success: false })
    }
  }

  public save = async({ body }: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.productUseCase.save(body)

      return res.json({ data: user, success: true })
    } catch (error: any) {
      res.status(500)

      return res.json({ message: error.message, success: false })
    }
  }

  public getAll = async(_: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.productUseCase.getAll()

      return res.json({ data: users, success: true })
    } catch (error: any) {
      res.status(500)

      return res.json({ message: error.message, success: false })
    }
  }
}
