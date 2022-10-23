import AuthEntity from '../../../domain/authEntity'
import AuthRepository from '../../../domain/authRepository'
import AuthModel from './authSchema'

export default class AuthMongoRepository implements AuthRepository {
  public save = async (auth: AuthEntity) => {
    const authCreated = await AuthModel.create(auth)

    return authCreated
  }

  public getByToken = async (token: string) => {
    const auth = await AuthModel.findOne({ token }).lean()

    return auth
  }

  public deleteByUserId = async (userId: string) => {
    await AuthModel.deleteMany({ userId })
  }
}