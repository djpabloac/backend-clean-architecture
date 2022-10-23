import UserEntity from '../../../domain/userEntity'
import UserRepository from '../../../domain/userRepository'
import { users } from './userSchema'

export default class UserMockRepository implements UserRepository {
  public save = async (user: UserEntity) => {
    users.push(user)

    return user
  }

  public getAll = async () => {
    return users
  }

  public existsById = async (uuid: string) => {
    return users.some((item) => item.uuid === uuid)
  }

  public existsByEmail = async (email: string) => {
    return users.some((item) => item.email === email)
  }

  public getByEmail = async (email: string) => {
    const user = users.find((item) => item.email === email)
    if(!user) return null

    return user
  }

  public getById = async (uuid: string) => {
    const user = users.find((item) => item.uuid === uuid)
    if(!user) return null

    return user
  }
}
