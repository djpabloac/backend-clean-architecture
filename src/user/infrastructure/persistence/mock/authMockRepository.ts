import AuthEntity from '../../../domain/authEntity'
import AuthRepository from '../../../domain/authRepository'
import { authList } from './authSchema'

export default class AuthMongoRepository implements AuthRepository {
  public save = async (auth: AuthEntity) => {
    authList.push(auth)

    return auth
  }

  public getByToken = async (token: string) => {
    const auth = authList.find((auth) => auth.token === token)

    if(!auth) return null

    return auth
  }

  public deleteByUserId = async (userId: string) => {
    const index = authList.findIndex((auth) => auth.userId === userId)
    if(index > -1)
      authList.splice(index, 1)
  }
}