// src/Features/Restaurant/Components/FormSections/AdditionalDetailsSection.tsx
import React from 'react'
import { type FoodFormData } from '../../schemas/foodSchema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CustomSelect from '../CustomSelect'
import { type Control, type FieldErrors } from 'react-hook-form'

interface AdditionalDetailsSectionProps {
  control: Control<FoodFormData>
  formData: FoodFormData
  errors: FieldErrors<FoodFormData>
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
}

const AdditionalDetailsSection: React.FC<AdditionalDetailsSectionProps> = ({
  control,
  formData,
  errors,
  handleInputChange,
}) => {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-6">
      {/* Cooking Time */}

      <Label htmlFor="cookingTime">Cooking Time</Label>
      <div>
        <Input
          id="cookingTime"
          type="time"
          value={formData.cookingTime}
          onChange={(e) => handleInputChange('cookingTime', e.target.value)}
          className="w-full"
        />
        {errors.cookingTime && (
          <p className="text-red-500 text-sm">{errors.cookingTime.message}</p>
        )}
      </div>

      {/* Status */}

      <Label htmlFor="status">Status</Label>
      <div>
        <CustomSelect
          control={control}
          items={[
            { value: 'active', title: 'Active' },
            { value: 'inactive', title: 'Inactive' },
            { value: 'draft', title: 'Draft' },
          ]}
          field="status"
          placeholder="Select Status"
        />
        {errors.status && (
          <p className="text-red-500 text-sm">{errors.status.message}</p>
        )}
      </div>
    </div>
  )
}

export default AdditionalDetailsSection
