// src/Features/Restaurant/Hooks/useFoodForm.ts
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type FoodFormData, foodSchema } from '../schemas/foodSchema'
import { useAddFoodMutation } from '@/Redux/features/food.api'
import type { AxiosError } from 'axios'

const defaultValues: FoodFormData = {
  type: '',
  category: '',
  foodName: '',
  components: '',
  notes: '',
  description: '',
  image: undefined,
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
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    control,
  } = useForm<FoodFormData>({
    resolver: zodResolver(foodSchema),
    defaultValues,
    mode: 'onChange',
  })

  const [addFood, { isLoading }] = useAddFoodMutation()

  const formData = watch()

  const resetFormData = () => {
    reset(defaultValues)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleInputChange = (
    field: keyof FoodFormData,
    value: string | File | boolean | undefined | null
  ) => {
    setValue(field, value)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || undefined
    setValue('image', file)
  }

  const onSubmit = async (data: FoodFormData) => {
    console.log('form data:', data)

    try {
      const result = await addFood(data).unwrap()
      console.log('result', result)
      // Optionally reset form on success
      // resetFormData()
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
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    handleInputChange,
    handleFileChange,
    fileInputRef,
    resetFormData,
    control,
    formData,
    isSubmitting: isLoading,
  }
}