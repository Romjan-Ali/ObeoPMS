// src/Features/Restaurant/Components/FormSections/VatSection.tsx
import { Label } from '@/components/ui/label'
import React from 'react'
import CustomTooltip from '../CustomTooltip'
import { Input } from '@/components/ui/input'
import type { FoodFormData } from '../../types/food'

interface VatSectionProps {
  formData: FoodFormData
  errors: Record<string, string>
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
}

const VatSection: React.FC<VatSectionProps> = ({
  formData,
  errors,
  handleInputChange,
}) => {
  return (    
    <div className="lg:grid grid-cols-[100px_1fr] gap-6">
      <div className="flex items-center gap-2 w-[100px] max-lg:mt-6 max-lg:mb-2">
        <Label htmlFor="vat">VAT</Label>
        <CustomTooltip content="Value Added Tax percentage" />
      </div>
      <div className="flex flex-col w-full">
        <Input
          id="vat"
          type="number"
          step="0.01"
          min="0"
          max="100"
          placeholder="0.00%"
          value={formData.vat}
          onChange={(e) => handleInputChange('vat', e.target.value)}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {errors.vat && <p className="text-red-500 text-sm">{errors.vat}</p>}
      </div>
    </div>
  )
}

export default VatSection
