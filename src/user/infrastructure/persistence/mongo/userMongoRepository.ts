import UserEntity from '../../../domain/userEntity'
import UserRepository from '../../../domain/userRepository'
import UserModel from './userSchema'

export default class UserMongoRepository implements UserRepository {
  public save = async (user: UserEntity) => {
    const userCreated = await UserModel.create(user)

    return userCreated
  }

  public getAll = async () => {
    const users = await UserModel.find({}).lean()

    return users
  }

  public existsById = async (uuid: string) => {
    const existsUser = await UserModel.exists({ uuid })

    return Boolean(existsUser)
  }

  public existsByEmail = async (email: string) => {
    const existsUser = await UserModel.exists({ email })

    return Boolean(existsUser)
  }

  public getByEmail = async (email: string) => {
    const user = await UserModel.findOne({ email }).lean()

    return user
  }

  public getById = async (uuid: string) => {
    const user = await UserModel.findOne({ uuid }).lean()

    return user
  }
}
