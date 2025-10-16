// src/Features/Restaurant/Components/FormSections/FormActions.tsx
import React from 'react'
import { Button } from '@/components/ui/button'

interface FormActionsProps {
  onReset: () => void
}

const FormActions: React.FC<FormActionsProps> = ({ onReset }) => {
  return (
    <div className="flex justify-between space-x-3">
      <Button
        type="submit"
        size="lg"
        className="transition-all duration-200 hover:scale-105"
      >
        Save
      </Button>

      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={onReset}
        className="transition-all duration-200 hover:bg-gray-100 hover:scale-105"
      >
        Reset Form
      </Button>      
    </div>
  )
}

export default FormActions
