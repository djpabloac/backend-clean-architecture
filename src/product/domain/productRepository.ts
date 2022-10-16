import ProductEntity from "./productEntity"

export default interface ProductRepository {
  save: (product: ProductEntity) => Promise<ProductEntity>
  getAll: () => Promise<ProductEntity[]>
  getById: (uuid: string) => Promise<ProductEntity | null>
}