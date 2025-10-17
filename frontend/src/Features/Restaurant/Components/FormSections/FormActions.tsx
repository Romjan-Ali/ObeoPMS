// src/Features/Restaurant/Components/FormSections/FormActions.tsx
import React from 'react'
import { Button } from '@/components/ui/button'

interface FormActionsProps {
  onReset: () => void
  isSubmitting?: boolean
}

const FormActions: React.FC<FormActionsProps> = ({ onReset, isSubmitting = false }) => {
  return (
    <div className="flex justify-between space-x-3">
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="transition-all duration-200 hover:scale-105"
      >
        {isSubmitting ? 'Saving...' : 'Save'}
      </Button>

      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={onReset}
        disabled={isSubmitting}
        className="transition-all duration-200 hover:bg-gray-100 hover:scale-105"
      >
        Reset Form
      </Button>      
    </div>
  )
}

export default FormActions