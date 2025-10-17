// src/Features/Restaurant/Components/FormSections/CostCenterSection.tsx
import React from 'react'
import { type FoodFormData } from '../../schemas/foodSchema'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { type Control, Controller } from 'react-hook-form'

interface CostCenterSectionProps {
  control: Control<FoodFormData>
}

const CostCenterSection: React.FC<CostCenterSectionProps> = ({ control }) => {
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
              <Controller
                name={id as keyof FoodFormData}
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={id}
                      checked={field.value as boolean}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor={id} className="cursor-pointer text-sm">
                      {label}
                    </Label>
                  </div>
                )}
              />              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CostCenterSection
