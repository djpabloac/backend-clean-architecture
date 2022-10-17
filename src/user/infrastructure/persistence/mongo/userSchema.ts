import { Schema, model } from 'mongoose'
import UserEntity, { UserStatus } from '../../../domain/userEntity'

const UserStatusEnums = [
  UserStatus.Active,
  UserStatus.Inactive
]

const UserSchema = new Schema({
  email   : { lowercase: true, required: true, trim: true, type: String, unique: true },
  name    : { required: true, trim: true, type: String },
  password: { required: true, trim: true, type: String },
  photo   : { default: '', type: String },
  status  : { default: UserStatus.Active, enum: UserStatusEnums, type: String },
  uuid    : { required: true, type: String, unique: true }
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model<UserEntity>('user', UserSchema)

export default UserModel
