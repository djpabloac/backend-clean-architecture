type ProductStatusType = 'active' | 'inactive'

export default interface ProductEntity {
  uuid: string
  name: string
  description: string
  photo: string
  status: ProductStatusType
}

export type ProductEntityInput = Pick<ProductEntity, 'name' | 'description' | 'photo'>
