import { UserEntity } from '../../../domain/user.entity'
import { UserRepository } from '../../../domain/user.repository'
import UserModel from '../../model/mongo/user.schema'

export class UserMongoRepository implements UserRepository {
  public create = async (user: UserEntity) => {
    const userCreated = await UserModel.create(user)

    return userCreated
  }

  public list = async () => {
    const users = await UserModel.find({}).lean()

    return users as UserEntity[]
  }

  public findById = async (uuid: string) => {
    const user = UserModel.findOne({ uuid }).lean()

    return user
  }
}
