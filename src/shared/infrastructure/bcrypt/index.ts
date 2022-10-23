import bcrypt from 'bcrypt'
import { Application } from '../../config'

class Bcrypt {
  private salt: number

  constructor() {
    this.salt = Application.bcrypt.salt
    if(!this.salt) throw new Error('Bcrypt > Salt is required')
  }

  public createHash = async (text: string) => {
    const saltRandom = await bcrypt.genSalt(this.salt)
    const hash = await bcrypt.hash(text, saltRandom)

    return hash
  }

  public compare = async (text: string, textCompare: string) => {
    if(!text || !textCompare) return false

    const isValid = await bcrypt.compare(text, textCompare)

    return isValid
  }
}

export default new Bcrypt()