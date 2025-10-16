// src/Features/Restaurant/types/food.ts
export interface FoodFormData {
  type: string
  category: string
  foodName: string
  components: string
  notes: string
  description: string
  image: File | null
  vat: string
  offer: boolean
  special: boolean
  customQuantity: boolean
  nonDiscountable: boolean
  discount: boolean
  cookingTime: string
  costCenter: string
  dine23: boolean
  roomService: boolean
  cafe23: boolean
  menuType: string
  specialSetMenu: boolean
  status: string
}