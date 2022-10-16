import { v4 as uuid } from 'uuid'
import ProductEntity, { ProductEntityInput, ProductStatus } from "./productEntity";

export default class ProductValue implements ProductEntity {
  uuid: string;
  name: string;
  description: string;
  photo: string;
  status: ProductStatus;

  constructor(productInput: ProductEntityInput) {
    this.name = productInput.name
    this.description = productInput.description
    this.photo = productInput.photo
    this.uuid = uuid()
    this.status = ProductStatus.Active
  }
}