// backend/src/app.ts
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { restaurantRoutes } from './routes/restaurant.route'

const app = express()

app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'], credentials: true }))
app.use(morgan('combined'))

app.use('/api/restaurant', restaurantRoutes)

export default app
