/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Application } from './shared/config'
import IConnection from './shared/persistence/connectionInterface'
import { ConnectionFactory, PersistenceType } from './shared/persistence'
import userRoute from './user/infrastructure/http/userRoute'

// Create server
const app = express()
app.use(cors())
app.use(express.json())

// Adding route the serve
app.use(userRoute)

// Listen server
const PORT = Application.port
app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))

// Connections persistence
const connection: IConnection = ConnectionFactory.createConnectionType(PersistenceType.Mongo)
connection.connect()