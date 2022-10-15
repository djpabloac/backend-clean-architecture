import UserEntity from './userEntity'

export default interface UserRepository {
  getById: (uuid: string) => Promise<UserEntity | unknown>
  save: (user: UserEntity) => Promise<UserEntity | unknown>
  getAll: () => Promise<UserEntity[]>
}
