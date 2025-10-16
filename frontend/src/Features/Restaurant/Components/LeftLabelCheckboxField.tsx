// src/Features/Restaurant/Components/LeftLabelCheckboxField.tsx
import type { FoodFormData } from '../types/food'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import CustomTooltip from './CustomTooltip'

interface CheckboxFieldProps {
  id: keyof FoodFormData
  label: string
  formData: FoodFormData
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
  className?: string
  tooltipContent?: string
}

const LeftTitleCheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  formData,
  handleInputChange,
  className = '',
  tooltipContent,
}) => {
  return (
    <div className={`flex items-center space-x-4 whitespace-nowrap ${className}`}>
      <Label htmlFor={id} className="cursor-pointer text-sm w-[120px]">
        {label} {tooltipContent && <CustomTooltip content={tooltipContent} />}
      </Label>
      <Checkbox
        id={id}
        checked={formData[id as keyof typeof formData] as boolean}
        onCheckedChange={(checked) =>
          handleInputChange(id as keyof typeof formData, checked as boolean)
        }
      />
    </div>
  )
}

export default LeftTitleCheckboxField
