import ProductEntity from '../../../domain/productEntity'
import ProductRepository from '../../../domain/productRepository'
import { PRODUCTS_MOCK } from './productSchema'

export default class UserMockRepository implements ProductRepository {
  async save (product: ProductEntity) {
    PRODUCTS_MOCK.push(product)

    return product
  }

  async getAll (): Promise<ProductEntity[]> {
    return PRODUCTS_MOCK
  }

  async getById (uuid: string) {
    const product = PRODUCTS_MOCK.find(item => item.uuid === uuid)

    return product
  }
}
