import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  email : { lowercase: true, require: true, trim: true, type: String },
  name  : { require: true, trim: true, type: String },
  photo : { trim: true, type: String },
  status: { trim: true, type: String },
  uuid  : { trim: true, type: String }
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('user', UserSchema)

export default UserModel
