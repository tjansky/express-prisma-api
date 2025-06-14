import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'

// Load env vars
dotenv.config()

const app = express()

// Built-in middlewares
app.use(express.json())

// Routes
app.use('/users', userRoutes)

export default app