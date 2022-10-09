import { UserEntity } from '../../../domain/user.entity'
import { UserRepository } from '../../../domain/user.repository'
import { USERS_MOCK } from '../../model/mock/user.schema'

export class UserMockRepository implements UserRepository {
  async create (user: UserEntity) {
    USERS_MOCK.push(user)

    return user
  }

  async list (): Promise<UserEntity[]> {
    return USERS_MOCK
  }

  async findById (uuid: string) {
    const user = USERS_MOCK.find(item => item.uuid === uuid)

    return user
  }
}
