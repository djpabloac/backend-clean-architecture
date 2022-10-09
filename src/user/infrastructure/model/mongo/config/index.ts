/* eslint-disable no-console */
import { connect } from 'mongoose'

const DB_URI = process.env.CONNECTION_DATABASE_MONGO ?? ''
const DB_NAME = 'MONGO'

const dbInit = async (): Promise<void> => {
  try {
    await connect(DB_URI)
    console.log(DB_NAME, 'Service is available')
  } catch (error: any) {
    console.log(DB_NAME, `Error: ${error.message}`)
  }
}

export default dbInit
