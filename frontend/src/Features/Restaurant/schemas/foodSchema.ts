// src/schemas/foodSchema.ts
import { z } from 'zod'

export const foodSchema = z.object({
  type: z.string().min(1, { message: 'Type is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
  foodName: z.string().min(1, { message: 'Food Name is required' }),
  components: z.string().optional(),
  notes: z.string().optional(),
  description: z.string().optional(),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= 5_000_000, {
      message: 'Image must be less than 5MB',
    })
    .refine(
      (file) =>
        !file || ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      { message: 'Invalid image type (only jpeg, png, webp allowed)' }
    ),
  vat: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: 'Invalid VAT' })
    .optional(),
  offer: z.boolean(),
  special: z.boolean(),
  customQuantity: z.boolean(),
  nonDiscountable: z.boolean(),
  discount: z.boolean(),
  cookingTime: z.string().optional(),
  costCenter: z.string().optional(),
  dine23: z.boolean(),
  roomService: z.boolean(),
  cafe23: z.boolean(),
  menuType: z.string().optional(),
  specialSetMenu: z.boolean(),
  status: z.string().optional(),
})
