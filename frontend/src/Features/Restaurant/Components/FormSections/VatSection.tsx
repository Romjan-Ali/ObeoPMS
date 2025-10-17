// src/Features/Restaurant/Components/FormSections/VatSection.tsx
import { Label } from '@/components/ui/label'
import React from 'react'
import CustomTooltip from '../CustomTooltip'
import { Input } from '@/components/ui/input'
import type { FoodFormData } from '../../schemas/foodSchema'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'

interface VatSectionProps {
  register: UseFormRegister<FoodFormData>
  errors: FieldErrors<FoodFormData>
}

const VatSection: React.FC<VatSectionProps> = ({ register, errors }) => {
  return (
    <div className="lg:grid grid-cols-[100px_1fr] gap-6">
      {/* Label + Tooltip */}
      <div className="flex items-center gap-2 w-[100px] max-lg:mt-6 max-lg:mb-2">
        <Label htmlFor="vat">VAT</Label>
        <CustomTooltip content="Value Added Tax percentage" />
      </div>

      {/* Input */}
      <div className="flex flex-col w-full">
        <Input
          id="vat"
          type="number"
          step="0.01"
          min="0"
          max="100"
          placeholder="0.00%"
          {...register('vat', {
            valueAsNumber: true,
            min: { value: 0, message: 'VAT must be 0 or higher' },
            max: { value: 100, message: 'VAT cannot exceed 100%' },
          })}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        {/* Error */}
        {errors.vat && (
          <p className="text-red-500 text-sm">{errors.vat.message}</p>
        )}
      </div>
    </div>
  )
}

export default VatSection
