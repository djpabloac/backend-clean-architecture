/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userRoute from './user/infrastructure/route/userRoute'
import dbInit from './user/infrastructure/model/mongo/config'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ?? '3001'

app.get('/ping', (_, res) => {
  res.send('pong')
})

app.use(userRoute)
dbInit().then().catch(() => console.log('DB off'))

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))
