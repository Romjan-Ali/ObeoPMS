// src/Features/Restaurant/Components/CustomSelect.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { FoodFormData } from '../schemas/foodSchema'
import { type Control, Controller } from 'react-hook-form'

interface Item {
  title: string
  value: string
}

interface CustomSelectProps {
  control: Control<FoodFormData>
  items: Item[]
  field: keyof FoodFormData
  placeholder: string
  required?: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  control,
  items,
  field,
  placeholder,
  required = false,
}) => {
  return (
    <Controller
      name={field}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select 
          required={required}
          value={value as string}
          onValueChange={onChange}
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
      )}
    />
  )
}

export default CustomSelect