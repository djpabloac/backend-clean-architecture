import ms from 'ms'
import jwt, { Secret, SignOptions } from 'jsonwebtoken'
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

  public encode = (userId: string, expiresIn?: number) => {
    const options: SignOptions = {
      expiresIn: expiresIn ?? this.expiresIn as ms.StringValue
    };

    const payload = { roles: [], userId };
    const token = jwt.sign(payload, this.secret, options);

    return token;
  }
}

export default new Jwt()
