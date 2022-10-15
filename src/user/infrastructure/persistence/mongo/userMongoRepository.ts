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

    return users as UserEntity[]
  }

  public getById = async (uuid: string) => {
    const user = UserModel.findOne({ uuid }).lean()

    return user
  }
}
