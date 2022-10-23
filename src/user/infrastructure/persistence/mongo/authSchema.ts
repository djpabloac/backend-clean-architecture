import { Schema, model } from 'mongoose'
import AuthEntity from '../../../domain/authEntity'

const AuthSchema = new Schema({
  token  : { required: true, trim: true, type: String },
  userId : { required: true, type: String },
  uuid   : { require: true, type: String, unique: true },
  version: { required: true, type: Number }
}, {
  timestamps: true,
  versionKey: false
})

const AuthModel = model<AuthEntity>('auth', AuthSchema)

export default AuthModel
