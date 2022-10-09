import { UserEntity } from './user.entity'

export interface UserRepository {
  findById: (uuid: string) => Promise<UserEntity | unknown>
  create: (user: UserEntity) => Promise<UserEntity | unknown>
  list: () => Promise<UserEntity[]>
}
