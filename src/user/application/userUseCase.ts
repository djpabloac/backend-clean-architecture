import { UserEntityInput } from '../domain/userEntity'
import UserRepository from '../domain/userRepository'
import UserValue from '../domain/userValue'

export default class UserUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public save = async (userInput: UserEntityInput) => {
    const userValue = new UserValue(userInput)
    const userSave = await this.userRepository.save(userValue)

    if(!userSave) throw new Error('User not found')

    return userSave
  }

  public getById = async (uuid: string) => {
    if (uuid.trim() === '') throw new Error('Uuid is require')

    const user = await this.userRepository.getById(uuid)

    if(!user) throw new Error('User not found')

    return user
  }

  public getAll = async () => {
    const users = await this.userRepository.getAll()

    if(!users) throw new Error('Users not found')

    return users
  }
}
