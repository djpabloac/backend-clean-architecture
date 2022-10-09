import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  uuid: { type: String, trim: true },
  name: { type: String, trim: true, require: true },
  email: { type: String, trim: true, require: true, lowercase: true },
  photo: { type: String, trim: true },
  status: { type: String, trim: true }
}, {
  _id: false,
  versionKey: false,
  timestamps: true
})

const UserModel = model('user', UserSchema)

export default UserModel
