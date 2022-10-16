import { v4 as uuid } from 'uuid'
import UserEntity, { UserInputEntity, UserStatus } from './userEntity'

export default class UserValue implements UserEntity {
  uuid: string
  name: string
  password: string
  email: string
  photo: string
  status: UserStatus

  constructor (userInput: UserInputEntity) {
    this.name = userInput.name
    this.email = userInput.email
    this.photo = userInput.photo
    this.password = userInput.password
    this.uuid = uuid()
    this.status = UserStatus.Active
  }
}
