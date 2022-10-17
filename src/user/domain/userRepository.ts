import UserEntity from './userEntity'

export default interface UserRepository {
  save: (user: UserEntity) => Promise<UserEntity>
  getAll: () => Promise<UserEntity[]>
  existsByEmail: (email: string) => Promise<boolean>
  getByEmail: (email: string) => Promise<UserEntity | null>
  getById: (uuid: string) => Promise<UserEntity | null>
}
