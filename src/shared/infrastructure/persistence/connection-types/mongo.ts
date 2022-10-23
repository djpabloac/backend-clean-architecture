/* eslint-disable no-console */
import { connect } from 'mongoose'
import { Application } from '../../../config'
import IConnection from '../connectionInterface'

export default class ConnectionMongo implements IConnection {
  async connect(): Promise<void> {
    try {
      await connect(Application.connection.mongodb.uri)
      console.log(Application.connection.mongodb.name, 'Service is available')
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error ocurred the connect to mongo'

      console.log(Application.connection.mongodb.name, `Error: ${message}`)
    }
  }



}