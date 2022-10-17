import bcrypt from 'bcrypt'
import { Application } from '../../config';

export default class Bcrypt {
  secret: string;
  salt: number;

  constructor() {
    this.secret = Application.bcrypt.secret
    if(!this.secret) throw new Error('Secret is required')

    this.salt = Application.bcrypt.salt
    if(!this.salt) throw new Error('Salt is required')
  }

  public createHash = (text: string): string => {
    const saltRandom = bcrypt.genSaltSync(this.salt)
    const hash = bcrypt.hashSync(text, saltRandom)

    return hash
  }

  public compare = (text: string, textCompare: string): boolean => {
    if(!text || !textCompare) return false

    const isValid = bcrypt.compareSync(text, textCompare)

    return isValid
  }
}
