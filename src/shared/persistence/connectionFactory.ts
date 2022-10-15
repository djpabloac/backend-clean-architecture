import IConnection from "./connectionInterface";
import { PersistenceType } from "./enums/persistenceType";
import ConnectionMock from "./connection-types/mock";
import ConnectionMongo from "./connection-types/mongo";

export default class ConnectionFactory {
  public static createConnectionType(type: PersistenceType): IConnection {
    if(type === PersistenceType.Mongo)
      return new ConnectionMongo()

    if(type === PersistenceType.Mock)
      return new ConnectionMock()

    throw new Error("Invalid connection type.");
  }
}
