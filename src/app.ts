/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Application } from './shared/config'
import IConnection from './shared/persistence/connectionInterface'
import { ConnectionFactory, PersistenceType } from './shared/persistence'
import UserRoute from './user/infrastructure/http/rest/userRoute'
import ProductRoute from './product/infrastructure/http/rest/productRoute'

// Select persistence
const persistenceType: PersistenceType = PersistenceType.Mongo

// Create server
const app = express()
app.use(cors())
app.use(express.json())

// Adding route the serve
app.use(UserRoute.buildRoute(persistenceType))
app.use(ProductRoute.buildRoute(persistenceType))

// Listen server
const PORT = Application.port
app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))

// Connections persistence
const connection: IConnection = ConnectionFactory.createConnectionByPersistenceType(persistenceType)
connection.connect()