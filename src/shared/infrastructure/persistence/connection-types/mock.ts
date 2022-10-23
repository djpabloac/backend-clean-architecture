/* eslint-disable no-console */
import { Application } from '../../../config'
import IConnection from '../connectionInterface'

export default class ConnectionMock implements IConnection {
  connect(): void {
    console.log(Application.connection.mock.name, 'Service is available')
  }
}