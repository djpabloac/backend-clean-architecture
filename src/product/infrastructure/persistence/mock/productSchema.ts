import ProductEntity, { ProductStatus } from '../../../domain/productEntity'

export const products: ProductEntity[] = [
  {
    description: '',
    name       : 'Laptop Apple - M1',
    photo      : '',
    status     : ProductStatus.Active,
    uuid       : '5eaf7ab7-3782-4ec1-8b68-87da25292b71'
  },
  {
    description: '',
    name       : 'Keyboard Genius',
    photo      : '',
    status     : ProductStatus.Active,
    uuid       : '5eaf7ab7-3782-4ec1-8b68-87da25292b23'
  }
]