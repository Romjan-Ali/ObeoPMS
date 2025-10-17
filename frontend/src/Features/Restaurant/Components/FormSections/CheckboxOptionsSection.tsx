// src/Features/Restaurant/Components/FormSections/CheckboxOptionsSection.tsx
import React from 'react'
import { type FoodFormData } from '../../schemas/foodSchema'
import LeftLabelCheckboxField from '../LeftLabelCheckboxField'
import { type Control } from 'react-hook-form'

interface CheckboxOptionsSectionProps {
  control: Control<FoodFormData>
}

const CheckboxOptionsSection: React.FC<CheckboxOptionsSectionProps> = ({
  control,
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
            control={control}
            tooltipContent={field.tooltip}
          />          
        </div>        
      ))}
      
      <div className='max-sm:hidden'></div>
    </div>
  )
}

export default CheckboxOptionsSection
