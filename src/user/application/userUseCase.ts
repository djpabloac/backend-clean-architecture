import { UserEntityInput } from '../domain/userEntity'
import { UserRepository } from '../domain/userRepository'
import { UserValue } from '../domain/userValue'

export class UserUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public create = async (userInput: UserEntityInput) => {
    const userValue = new UserValue(userInput)
    const userCreated = await this.userRepository.create(userValue)

    if(!userCreated) throw new Error('User not found')

    return userCreated
  }

  public findById = async (uuid: string) => {
    if (uuid.trim() === '') throw new Error('Uuid is require')

    const user = await this.userRepository.findById(uuid)

    if(!user) throw new Error('User not found')

    return user
  }

  public list = async () => {
    const users = await this.userRepository.list()

    if(!users) throw new Error('Users not found')

    return users
  }
}
