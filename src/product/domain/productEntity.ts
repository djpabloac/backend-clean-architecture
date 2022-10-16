export enum ProductStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export default interface ProductEntity {
  uuid: string
  name: string
  description: string
  photo: string
  status: ProductStatus
}

export type ProductEntityInput = Pick<ProductEntity, 'name' | 'description' | 'photo'>
