// backend/src/routes/restaurant.route.ts
import { Router } from 'express'
import { getDatabase } from '../config/database'

const router = Router()

router.post('/add-food', async (req, res) => {
  console.log('req.body')
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        error: 'Request body is required'
      })
    }

    const db = getDatabase()
    const collection = db.collection('foods')
    
    const result = await collection.insertOne({
      ...req.body,
      createdAt: new Date()
    })

    return res.json({
      success: true,
      message: 'Food added successfully',
      data: result
    })
  } catch (err) {
    console.error('Error adding food:', err)
    return res.status(500).json({
      success: false,
      message: 'Failed to add food item'
    })
  }
})

export { router as restaurantRoutes }