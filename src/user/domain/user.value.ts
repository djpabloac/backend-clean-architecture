import { v4 as uuid } from 'uuid'
import { UserEntity, UserEntityInput } from './user.entity'

export class UserValue implements UserEntity {
  uuid: string
  name: string
  email: string
  photo: string
  status: 'active' | 'inactive'

  constructor (userInput: UserEntityInput) {
    this.name = userInput.name
    this.email = userInput.email
    this.photo = userInput.photo
    this.uuid = uuid()
    this.status = 'active'
  }
}
