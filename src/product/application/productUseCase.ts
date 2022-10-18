import { ProductEntityInput } from '../domain/productEntity'
import ProductRepository from '../domain/productRepository'
import ProductValue from '../domain/productValue'

export default class ProductUseCase {
  private readonly productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  public save = async (productInput: ProductEntityInput) => {
    const productValue = new ProductValue(productInput)
    const productSave = await this.productRepository.save(productValue)

    if (!productSave) throw new Error('Product not found')

    return productSave
  }

  public getById = async (uuid: string) => {
    if (uuid.trim() === '') throw new Error('Uuid is require')

    const user = await this.productRepository.getById(uuid)

    if(!user) throw new Error('Product not found')

    return user
  }

  public getAll = async () => {
    const users = await this.productRepository.getAll()

    if(!users) throw new Error('Product not found')

    return users
  }
}