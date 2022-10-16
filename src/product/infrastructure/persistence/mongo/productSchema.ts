import { Schema, model } from 'mongoose'
import ProductEntity, { ProductStatus } from '../../../domain/productEntity'

const ProductStatusEnums = [
  ProductStatus.Active,
  ProductStatus.Inactive
]

const ProductSchema = new Schema({
  description: { required: true, trim: true, type: String },
  name       : { required: true, trim: true, type: String },
  photo      : { default: '', type: String },
  status     : { default: ProductStatus.Active, enum: ProductStatusEnums, type: String },
  uuid       : { required: true, type: String }
}, {
  timestamps: true,
  versionKey: false
})

const ProductModel = model<ProductEntity>('product', ProductSchema)

export default ProductModel
