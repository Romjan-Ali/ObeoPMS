// src/Features/Restaurant/Components/FormSections/BasicInformationSection.tsx
import React from 'react'
import { type FoodFormData } from '../../types/food'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import CustomSelect from '../CustomSelect'
import ImageUpload from '../ImageUpload'

interface BasicInformationSectionProps {
  formData: FoodFormData
  errors: Record<string, string>
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
}

const BasicInformationSection: React.FC<BasicInformationSectionProps> = ({
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
        handleInputChange={handleInputChange}
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
      {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}

      {/* Category */}
      <Label htmlFor="category" className="flex items-center gap-1 max-lg:mt-6 max-lg:mb-2">
        Category <span className="text-red-500">*</span>
      </Label>
      <CustomSelect
        handleInputChange={handleInputChange}
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
      {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

      {/* Food Name */}
      <Label htmlFor="foodName" className="flex items-center gap-1 max-lg:mt-6 max-lg:mb-2">
        Food Name <span className="text-red-500">*</span>
      </Label>
      <Input
        id="foodName"
        placeholder="Food Name"
        value={formData.foodName}
        onChange={(e) => handleInputChange('foodName', e.target.value)}
      />
      {errors.foodName && <p className="text-red-500 text-sm">{errors.foodName}</p>}

      {/* Components */}
      <Label htmlFor="components" className="max-lg:mt-6 max-lg:mb-2">Components</Label>
      <Input
        id="components"
        placeholder="Components"
        value={formData.components}
        onChange={(e) => handleInputChange('components', e.target.value)}
      />
      {errors.components && <p className="text-red-500 text-sm">{errors.components}</p>}

      {/* Notes */}
      <Label htmlFor="notes" className="max-lg:mt-6 max-lg:mb-2">Notes</Label>
      <Input
        id="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={(e) => handleInputChange('notes', e.target.value)}
      />
      {errors.notes && <p className="text-red-500 text-sm">{errors.notes}</p>}

      {/* Description */}
      <Label htmlFor="description" className="flex items-start h-full max-lg:mt-6 max-lg:mb-2">
        Description
      </Label>
      <Textarea
        id="description"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

      {/* Image Upload */}
      <ImageUpload
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        fileInputRef={fileInputRef}
        formData={formData}
      />
      {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
    </>
  )
}

export default BasicInformationSection
