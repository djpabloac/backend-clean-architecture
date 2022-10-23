import AuthEntity from './authEntity'

export default interface AuthRepository {
  save: (auth: AuthEntity) => Promise<AuthEntity>
  getByToken: (token: string) => Promise<AuthEntity | null>
  deleteByUserId: (userId: string) => Promise<void>
}