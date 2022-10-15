import ProductEntity from "./productEntity"

export default interface ProductRepository {
  getById: (uuid: string) => Promise<ProductEntity | unknown>
  save: (product: ProductEntity) => Promise<ProductEntity | unknown>
  getAll: () => Promise<ProductEntity[]>
}