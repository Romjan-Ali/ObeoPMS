// src/Features/Restaurant/Components/FormSections/AdditionalDetailsSection.tsx
import React from 'react'
import { type FoodFormData } from '../../types/food'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CustomSelect from '../CustomSelect'

interface AdditionalDetailsSectionProps {
  formData: FoodFormData
  errors: Record<string, string>
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
}

const AdditionalDetailsSection: React.FC<AdditionalDetailsSectionProps> = ({
  formData,
  errors,
  handleInputChange,
}) => {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-6">
      {/* Cooking Time */}
      <div className="flex flex-col">
        <Label htmlFor="cookingTime">Cooking Time</Label>
        <Input
          id="cookingTime"
          type="time"
          value={formData.cookingTime}
          onChange={(e) => handleInputChange('cookingTime', e.target.value)}
          className="w-full"
        />
        {errors.cookingTime && <p className="text-red-500 text-sm">{errors.cookingTime}</p>}
      </div>

      {/* Status */}
      <div className="flex flex-col">
        <Label htmlFor="status">Status</Label>
        <CustomSelect
          handleInputChange={handleInputChange}
          items={[
            { value: 'active', title: 'Active' },
            { value: 'inactive', title: 'Inactive' },
            { value: 'draft', title: 'Draft' },
          ]}
          field="status"
          placeholder="Select Status"
        />
        {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
      </div>
    </div>
  )
}

export default AdditionalDetailsSection
