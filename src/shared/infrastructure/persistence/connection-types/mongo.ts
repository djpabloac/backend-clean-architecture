/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { connect } from 'mongoose'
import { Application } from "../../../config";
import IConnection from "../connectionInterface";

export default class ConnectionMongo implements IConnection {
  async connect(): Promise<void> {
    try {
      await connect(Application.connection.mongodb.uri)
      console.log(Application.connection.mongodb.name, 'Service is available')
    } catch (error: any) {
      console.log(Application.connection.mongodb.name, `Error: ${error.message}`)
    }
  }
}