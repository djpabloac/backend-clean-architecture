import { v4 as uuid } from 'uuid'
import ProductEntity, { ProductEntityInput } from "./productEntity";

export default class ProductValue implements ProductEntity {
  uuid: string;
  name: string;
  description: string;
  photo: string;
  status: "active" | "inactive";

  constructor(productInput: ProductEntityInput) {
    this.name = productInput.name
    this.description = productInput.description
    this.photo = productInput.photo
    this.uuid = uuid()
    this.status = 'active'
  }
}