import { v4 as uuid } from 'uuid'
import AuthEntity, { AuthInputEntity } from './authEntity'

export default class AuthValue implements AuthEntity {
  uuid: string
  token: string
  userId: string
  version: number

  constructor(authInput: AuthInputEntity) {
    this.token = authInput.token
    this.userId = authInput.userId
    this.version = 1
    this.uuid = uuid()
  }

}