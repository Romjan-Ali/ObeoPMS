// src/Features/Restaurant/Components/FormSections/CheckboxOptionsSection.tsx
import React from 'react'
import { type FoodFormData } from '../../types/food'
import LeftLabelCheckboxField from '../LeftLabelCheckboxField'

interface CheckboxOptionsSectionProps {
  formData: FoodFormData
  errors: Record<string, string>
  handleInputChange: (field: keyof FoodFormData, value: string | File | boolean | null) => void
}

const CheckboxOptionsSection: React.FC<CheckboxOptionsSectionProps> = ({
  formData,
  errors,
  handleInputChange
}) => {
  const checkboxFields = [
    { id: 'offer', label: 'Offer', tooltip: 'Enable this option to mark the item as part of a promotional offer.' },
    { id: 'special', label: 'Special' },
    { id: 'customQuantity', label: 'Custom Quantity' },
    { id: 'nonDiscountable', label: 'Non Discountable' },
    { id: 'discount', label: 'Discount' },
  ]

  return (
    <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-y-6">
      {checkboxFields.map((field) => (
        <div key={field.id} className="flex flex-col">
          <LeftLabelCheckboxField
            id={field.id as keyof FoodFormData}
            label={field.label}
            formData={formData}
            handleInputChange={handleInputChange}
            tooltipContent={field.tooltip}
          />
          {errors[field.id] && <p className="text-red-500 text-sm">{errors[field.id]}</p>}
        </div>        
      ))}
      
      <div className='max-sm:hidden'></div>
    </div>
  )
}

export default CheckboxOptionsSection
