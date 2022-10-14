import { UserEntity } from '../../../domain/userEntity'
import { UserRepository } from '../../../domain/userRepository'
import { USERS_MOCK } from '../../model/mock/userSchema'

export class UserMockRepository implements UserRepository {
  async save (user: UserEntity) {
    USERS_MOCK.push(user)

    return user
  }

  async getAll (): Promise<UserEntity[]> {
    return USERS_MOCK
  }

  async getById (uuid: string) {
    const user = USERS_MOCK.find(item => item.uuid === uuid)

    return user
  }
}
