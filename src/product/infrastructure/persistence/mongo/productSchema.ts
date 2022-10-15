import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  description: { require: true, trim: true, type: String },
  name       : { require: true, trim: true, type: String },
  photo      : { trim: true, type: String },
  status     : { trim: true, type: String },
  uuid       : { trim: true, type: String }
}, {
  timestamps: true,
  versionKey: false
})

const ProductModel = model('product', ProductSchema)

export default ProductModel
