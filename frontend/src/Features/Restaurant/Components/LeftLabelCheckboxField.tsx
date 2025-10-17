import { Controller, type Control } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import CustomTooltip from './CustomTooltip'
import type { FoodFormData } from '../schemas/foodSchema'

interface CheckboxFieldProps {
  id: keyof FoodFormData
  label: string
  control: Control<FoodFormData>
  tooltipContent?: string
  className?: string
}

const LeftLabelCheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  control,
  tooltipContent,
  className = '',
}) => {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <div className={`flex items-center space-x-4 whitespace-nowrap ${className}`}>
          <Label htmlFor={id} className="cursor-pointer text-sm w-[120px]">
            {label} {tooltipContent && <CustomTooltip content={tooltipContent} />}
          </Label>
          <Checkbox
            id={id}
            checked={field.value as boolean}
            onCheckedChange={field.onChange}
          />
        </div>
      )}
    />
  )
}

export default LeftLabelCheckboxField
