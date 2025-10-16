// backend/src/server.ts
import app from './app'
import { Server } from 'http'
import { connectToDatabase } from './config/database'

const PORT = process.env.PORT || 7000

let server: Server
;(async () => {
  await connectToDatabase()
  
  server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
  })
})()

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received... Server shutting down..')
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('SIGINT', () => {
  console.log('SIGINT signal received... Server shutting down..')
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('unhandledRejection', () => {
  console.log('Unhandled Rejection signal received... Server shutting down..')
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log('Uncaught Exception signal received... Server shutting down..')
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

// Unhandler rejection error
// Promise.reject(new Error("I forgot to catch this promise"))

// Uncaught Exception Error
// throw new Error("I forgot to handle this local error")
