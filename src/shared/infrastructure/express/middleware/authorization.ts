import { Request, Response, NextFunction } from 'express'
import Jwt from '../../jsonwebtoken'

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token)
      throw new Error('Authenticate')

    const isValid = Jwt.decode(token)
    if (!isValid)
      throw new Error('Authorization required')

    next()
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An error ocurred the connect to mongo'

    res
      .status(401)
      .json({ message: message, success: false })
  }
}