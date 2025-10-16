// src/Features/Restaurant/Components/CustomSelect.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { FoodFormData } from '../types/food'

interface Item {
  title: string
  value: string
}

interface CustomSelectProps {
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
  items: Item[]
  field: keyof FoodFormData
  placeholder: string
  required?: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  handleInputChange,
  items,
  field,
  placeholder,
  required = false,
}) => {
  return (
    <Select
      required={required}
      onValueChange={(value) => handleInputChange(field, value)}            
    >
      <SelectTrigger className='w-full'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CustomSelect
