// src/Features/Restaurant/Components/FormSections/CostCenterSection.tsx
import React from 'react'
import { type FoodFormData } from '../../types/food'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

interface CostCenterSectionProps {
  formData: FoodFormData
  errors: Record<string, string>
  handleInputChange: (field: keyof FoodFormData, value: string | File | boolean | null) => void
}

const CostCenterSection: React.FC<CostCenterSectionProps> = ({
  formData,
  errors,
  handleInputChange
}) => {
  const costCenterOptions = [
    { id: 'dine23', label: 'Dine23' },
    { id: 'roomService', label: 'Room Service' },
    { id: 'cafe23', label: 'Cafe23' },
  ]

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-y-6 space-x-4 rounded-lg w-full max-w-full">
        <Label className="text-sm font-medium max-sm:items-start whitespace-nowrap w-[120px]">
          Cost Center
        </Label>

        <div className="flex max-sm:flex-col max-sm:items-start max-sm:justify-start max-sm:ml-8 items-center gap-6 whitespace-nowrap">
          {costCenterOptions.map(({ id, label }) => (
            <div key={id} className="flex flex-col">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={id}
                  checked={formData[id as keyof FoodFormData] as boolean}
                  onCheckedChange={(checked) =>
                    handleInputChange(id as keyof FoodFormData, checked as boolean)
                  }
                />
                <Label htmlFor={id} className="cursor-pointer text-sm">
                  {label}
                </Label>
              </div>
              {errors[id] && <p className="text-red-500 text-sm">{errors[id]}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CostCenterSection
