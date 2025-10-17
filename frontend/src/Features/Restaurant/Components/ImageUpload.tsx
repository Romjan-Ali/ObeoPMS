// src/Features/Restaurant/Components/ImageUpload.tsx
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { type FoodFormData } from '../schemas/foodSchema'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'
import { HelpCircle } from 'lucide-react'

interface ImageUploadProps {
  register: UseFormRegister<FoodFormData>
  handleInputChange: (
    field: keyof FoodFormData,
    value: string | File | boolean | null
  ) => void
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
  formData: FoodFormData
  errors: FieldErrors<FoodFormData>
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  handleInputChange,
  handleFileChange,
  fileInputRef,
  formData,
  errors
}) => {
  return (
    <>
      <div className="flex items-center gap-2 max-lg:mt-6 max-lg:mb-2">
        <Label htmlFor="image">Image</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload food image</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="cursor-pointer"
        />

        {formData.image && (
          <div className="relative inline-block mt-4">
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="h-20 w-20 object-cover rounded-md border"
            />
            <button
              type="button"
              onClick={() => {
                handleInputChange('image', null)
                if (fileInputRef.current) {
                  fileInputRef.current.value = ''
                }
              }}
              className=" absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md transition-all duration-200"
              title="Remove image"
            >
              ✕
            </button>
          </div>
        )}
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>
    </>
  )
}

export default ImageUpload
