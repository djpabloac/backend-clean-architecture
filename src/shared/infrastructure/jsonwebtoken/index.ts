import jwt, { Secret } from 'jsonwebtoken'
import { Application } from '../../config'

class Jwt {
  private secret: Secret
  private expiresIn: string

  constructor() {
    this.secret = Application.jwt.secret
    if(!this.secret) throw new Error('Jwt > Secret is required')

    this.expiresIn = Application.jwt.expiresIn
    if(!this.secret) throw new Error('Jwt > ExpiresIn is required')
  }

  public decode = (token: string) => {
    const tokenValid = jwt.verify(token, this.secret)
    if(!tokenValid) throw new Error('Token not valid')

    return tokenValid
  }

  public encode = (userId: string, expiresIn?: string) => {
    const token = jwt.sign({roles: [], userId}, this.secret, { expiresIn: expiresIn ?? this.expiresIn })

    return token
  }
}

export default new Jwt()