// src/Features/Restaurant/Components/AddFoodForm.tsx
import React from 'react'
import { useFoodForm } from '../Hooks/userFoodForm'
import BasicInformationSection from './FormSections/BasicInformationSection'
import CheckboxOptionsSection from './FormSections/CheckboxOptionsSection'
import CostCenterSection from './FormSections/CostCenterSection'
import AdditionalDetailsSection from './FormSections/AdditionalDetailsSection'
import FormActions from './FormSections/FormActions'
import VatSection from './FormSections/VatSection'

const AddFoodForm: React.FC = () => {
  const {
    formData,
    errors,
    handleInputChange,
    handleFileChange,
    fileInputRef,
    resetFormData,
    handleSubmit,
  } = useFoodForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="lg:grid gap-x-16 grid-cols-1 lg:grid-cols-2 space-y-6">
        <div className="lg:grid grid-cols-[100px_1fr] gap-6">
          <BasicInformationSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
            fileInputRef={fileInputRef}
          />
        </div>

        <div className="space-y-6">
          <VatSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />

          <CheckboxOptionsSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />

          <CostCenterSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />

          <AdditionalDetailsSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className="border-t"></div>
      <FormActions onReset={resetFormData} />
    </form>
  )
}

export default AddFoodForm
