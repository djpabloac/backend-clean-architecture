import Bcrypt from '../../shared/infrastructure/bcrypt'
import Jwt from '../../shared/infrastructure/jsonwebtoken'
import AuthEntity from '../domain/authEntity'
import AuthRepository from '../domain/authRepository'
import AuthValue from '../domain/authValue'
import { UserLoginEntity } from '../domain/userEntity'
import UserRepository from '../domain/userRepository'

export default class AuthUseCase {
  private readonly authRepository: AuthRepository
  private readonly userRepository: UserRepository

  constructor(authRepository: AuthRepository, userRepository: UserRepository) {
    this.authRepository = authRepository
    this.userRepository = userRepository
  }

  public login = async ({ email, password }: UserLoginEntity): Promise<AuthEntity> => {
    if(!email || !password) throw new Error('Email or password is required.')

    const messageValidate = 'Email or password incorrect.'
    const emailParse = email.toLowerCase().trim()
    const user = await this.userRepository.getByEmail(emailParse)
    if(!user) throw new Error(messageValidate)

    const isValid = await Bcrypt.compare(password, user.password)
    if(!isValid) throw new Error(messageValidate)

    await this.authRepository.deleteByUserId(user.uuid)

    const token = Jwt.encode(user.uuid)
    const auth = new AuthValue({
      token,
      userId : user.uuid,
      version: 1
    })

    const authToken = await this.authRepository.save(auth)

    return authToken
  }

  public signOut = async (userId: string): Promise<void> => {
    if(!userId) throw new Error('UserId is required.')

    const existUser = await this.userRepository.existsById(userId)
    if(!existUser) throw new Error('User not found')

    await this.authRepository.deleteByUserId(userId)
  }
}