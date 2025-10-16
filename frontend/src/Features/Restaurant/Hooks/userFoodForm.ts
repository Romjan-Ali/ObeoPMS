// src/Features/Restaurant/Hooks/useFoodForm.ts
import { useRef, useState } from 'react'
import { type FoodFormData } from '../types/food'
import { useAddFoodMutation } from '@/Redux/features/food.api'
import type { AxiosError } from 'axios'
import { foodSchema } from '../schemas/foodSchema'
import { REQUIRED_FIELDS } from '../constants/food.contsnts'

const initialFormData: FoodFormData = {
  type: '',
  category: '',
  foodName: '',
  components: '',
  notes: '',
  description: '',
  image: null,
  vat: '',
  offer: false,
  special: false,
  customQuantity: false,
  nonDiscountable: false,
  discount: false,
  cookingTime: '',
  costCenter: '',
  dine23: false,
  roomService: false,
  cafe23: false,
  menuType: '',
  specialSetMenu: false,
  status: '',
}


export const useFoodForm = () => {
  const [formData, setFormData] = useState<FoodFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [addFood] = useAddFoodMutation()

  const resetFormData = () => {
    setFormData(initialFormData)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleInputChange = (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    handleInputChange('image', file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form data:', formData)

     const cleanedData = Object.fromEntries(
      Object.entries(formData)
        .filter(([key, value]) => {
          if (REQUIRED_FIELDS.includes(key)) {
            return true
          }
          return value !== '' && value !== null && value !== undefined
        })
    )
    console.log('cleaned data:', cleanedData)

    const validation = foodSchema.safeParse(cleanedData)
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {}
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string
        fieldErrors[fieldName] = issue.message        
      })
      console.log({ fieldErrors })
      setErrors(fieldErrors)
      console.log('Validation failed:', fieldErrors)
      return
    }

    try {
      const result = await addFood(cleanedData).unwrap()
      console.log('result', result)
    } catch (error) {
      const err = error as AxiosError<{ message: string }>
      console.log(err)
      if (err.response?.data?.message) {
        console.log(err.response.data.message)
      } else {
        console.log(err.message)
      }
    }
  }

  return {
    formData,
    errors,
    handleInputChange,
    handleFileChange,
    fileInputRef,
    resetFormData,
    handleSubmit,
  }
}
