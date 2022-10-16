export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export default interface UserEntity {
  uuid: string
  name: string
  password: string
  email: string
  photo: string
  status: UserStatus
}

export type UserInputEntity = Pick<UserEntity, 'name' | 'email' | 'password' | 'photo'>

export type UserLoginEntity = Pick<UserEntity, 'email' | 'password'>