// src/Features/Restaurant/Pages/AddFoodPage.tsx
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AddFoodForm from '../Components/AddFoodForm'

const AddFoodPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 ">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add Food</CardTitle>
          <CardDescription>Add new food item to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <AddFoodForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default AddFoodPage