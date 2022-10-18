import Bcrypt from '../../shared/infrastructure/bcrypt'
import { UserInputEntity } from '../domain/userEntity'
import UserRepository from '../domain/userRepository'
import UserValue from '../domain/userValue'

const bcrypt = new Bcrypt()

export default class UserUseCase {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  private validate = async (userInput: UserInputEntity) => {
    if (!userInput.name) throw new Error('Name is required')
    if (!userInput.email) throw new Error('Email is required')
    if (!userInput.password) throw new Error('Password is required')

    const duplicateEmail = await this.userRepository.existsByEmail(userInput.email)
    if(duplicateEmail) throw new Error('Duplicate email')
  }

  public save = async (userInput: UserInputEntity) => {
    await this.validate(userInput)

    const passwordHash = bcrypt.createHash(userInput.password)
    const userValue = new UserValue({ ...userInput, password: passwordHash })
    const userSave = await this.userRepository.save(userValue)

    if (!userSave) throw new Error('User not found')

    return userSave
  }

  public getById = async (uuid: string) => {
    if (uuid.trim() === '') throw new Error('Uuid is require')

    const user = await this.userRepository.getById(uuid)

    if (!user) throw new Error('User not found')

    return user
  }

  public getAll = async () => {
    const users = await this.userRepository.getAll()

    if (!users) throw new Error('Users not found')

    return users
  }
}
