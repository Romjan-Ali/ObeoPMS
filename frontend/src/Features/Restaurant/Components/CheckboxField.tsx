// src/Features/Restaurant/Components/CheckboxField.tsx
import type { FoodFormData } from '../schemas/foodSchema'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface CheckboxFieldProps {
  id: keyof FoodFormData
  label: string
  formData: FoodFormData
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label, formData, handleInputChange }) => (
  <div className="flex items-center space-x-2">
    <Checkbox
      id={id}
      checked={formData[id as keyof typeof formData] as boolean}
      onCheckedChange={(checked) =>
        handleInputChange(id as keyof typeof formData, checked as boolean)
      }
    />
    <Label htmlFor={id} className="cursor-pointer text-sm">
      {label}
    </Label>
  </div>
);

export default CheckboxField