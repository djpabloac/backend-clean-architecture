import ProductEntity from '../../../domain/productEntity'
import ProductRepository from '../../../domain/productRepository'
import { products } from './productSchema'

export default class UserMockRepository implements ProductRepository {
  public save = async (product: ProductEntity) => {
    products.push(product)

    return product
  }

  public getAll = async () => {
    return products
  }

  public getById = async (uuid: string) => {
    const product = products.find(item => item.uuid === uuid)
    if(!product) return null

    return product
  }
}
