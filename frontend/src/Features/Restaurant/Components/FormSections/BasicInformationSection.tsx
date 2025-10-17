// src/Features/Restaurant/Components/FormSections/BasicInformationSection.tsx
import React from 'react'
import { type FoodFormData } from '../../schemas/foodSchema'
import type { Control, FieldErrors, UseFormRegister} from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import CustomSelect from '../CustomSelect'
import ImageUpload from '../ImageUpload'

interface BasicInformationSectionProps {
  register: UseFormRegister<FoodFormData>
  control: Control<FoodFormData>
  formData: FoodFormData
  errors: FieldErrors<FoodFormData>
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
}

const BasicInformationSection: React.FC<BasicInformationSectionProps> = ({
  register,
  control,
  formData,
  errors,
  handleInputChange,
  handleFileChange,
  fileInputRef,
}) => {
  return (
    <>
      {/* Type */}
      <Label htmlFor="type" className="flex items-center gap-1 max-lg:mb-2">
        Type <span className="text-red-500">*</span>
      </Label>
      <CustomSelect
        control={control}
        items={[
          { value: 'breakfast', title: 'Breakfast' },
          { value: 'lunch', title: 'Lunch' },
          { value: 'dinner', title: 'Dinner' },
          { value: 'snack', title: 'Snack' },
          { value: 'beverage', title: 'Beverage' },
        ]}
        field="type"
        placeholder="Select Option"
      />
      {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}

      {/* Category */}
      <Label htmlFor="category" className="flex items-center gap-1 max-lg:mt-6 max-lg:mb-2">
        Category <span className="text-red-500">*</span>
      </Label>
      <CustomSelect
        control={control}
        items={[
          { value: 'vegetarian', title: 'Vegetarian' },
          { value: 'non-vegetarian', title: 'Non-Vegetarian' },
          { value: 'vegan', title: 'Vegan' },
          { value: 'gluten-free', title: 'Gluten Free' },
          { value: 'dairy-free', title: 'Dairy Free' },
        ]}
        field="category"
        placeholder="Select Option"
      />
      {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

      {/* Food Name */}
      <Label htmlFor="foodName" className="flex items-center gap-1 max-lg:mt-6 max-lg:mb-2">
        Food Name <span className="text-red-500">*</span>
      </Label>
      <Input
        id="foodName"
        placeholder="Food Name"
        {...register('foodName')}
      />
      {errors.foodName && <p className="text-red-500 text-sm">{errors.foodName.message}</p>}

      {/* Components */}
      <Label htmlFor="components" className="max-lg:mt-6 max-lg:mb-2">Components</Label>
      <Input
        id="components"
        placeholder="Components"
        {...register('components')}
      />
      {errors.components && <p className="text-red-500 text-sm">{errors.components.message}</p>}

      {/* Notes */}
      <Label htmlFor="notes" className="max-lg:mt-6 max-lg:mb-2">Notes</Label>
      <Input
        id="notes"
        placeholder="Notes"
        {...register('notes')}
      />
      {errors.notes && <p className="text-red-500 text-sm">{errors.notes.message}</p>}

      {/* Description */}
      <Label htmlFor="description" className="flex items-start h-full max-lg:mt-6 max-lg:mb-2">
        Description
      </Label>
      <Textarea
        id="description"
        placeholder="Description"
        {...register('description')}
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

      {/* Image Upload */}
      <ImageUpload
        register={register}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        fileInputRef={fileInputRef}
        formData={formData}
      />
      {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
    </>
  )
}

export default BasicInformationSection