type UserStatusType = 'active' | 'inactive'

export interface UserEntity {
  uuid: string
  name: string
  email: string
  photo: string
  status: UserStatusType
}

export type UserEntityInput = Pick<UserEntity, 'name' | 'email' | 'photo'>
