/* eslint-disable no-console */
import 'dotenv/config'
import logger from 'morgan'
import express from 'express'
import cors from 'cors'
import { Application } from '../../config'
import IConnection from '../persistence/connectionInterface'
import { ConnectionFactory, PersistenceType } from '../persistence'
import apiRoutes from './routes'

// Select persistence
const persistenceType: PersistenceType = PersistenceType.Mongo

// Create server
const app = express()
app.use(logger('dev'))
app.use(cors())
app.use(express.json())

// Adding route the serve
app.use('/api/v1', apiRoutes.buildRoute(persistenceType))

// Listen server
const PORT = Application.port
app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))

// Connections persistence
const connection: IConnection = ConnectionFactory.createConnectionByPersistenceType(persistenceType)
connection.connect()