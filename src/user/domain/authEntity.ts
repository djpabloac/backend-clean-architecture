export default interface AuthEntity {
  uuid: string
  token: string
  userId: string
  version: number
}

export type AuthInputEntity = Pick<AuthEntity, 'token' | 'userId' | 'version'>