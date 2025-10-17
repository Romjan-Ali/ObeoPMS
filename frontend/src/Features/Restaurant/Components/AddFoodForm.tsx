// src/Features/Restaurant/Components/AddFoodForm.tsx
import React from 'react'
import { useFoodForm } from '../Hooks/useFoodForm'
import BasicInformationSection from './FormSections/BasicInformationSection'
import CheckboxOptionsSection from './FormSections/CheckboxOptionsSection'
import CostCenterSection from './FormSections/CostCenterSection'
import AdditionalDetailsSection from './FormSections/AdditionalDetailsSection'
import FormActions from './FormSections/FormActions'
import VatSection from './FormSections/VatSection'

const AddFoodForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    handleInputChange,
    handleFileChange,
    fileInputRef,
    resetFormData,
    control,
    formData,
    isSubmitting,
  } = useFoodForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="lg:grid gap-x-16 grid-cols-1 lg:grid-cols-2 space-y-6">
        <div className="lg:grid grid-cols-[100px_1fr] gap-6">
          <BasicInformationSection
            register={register}
            control={control}
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
            fileInputRef={fileInputRef}
          />
        </div>

        <div className="space-y-6">
          <VatSection register={register} errors={errors} />

          <CheckboxOptionsSection control={control} />

          <CostCenterSection control={control} />

          <AdditionalDetailsSection
            control={control}
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className="border-t"></div>
      <FormActions onReset={resetFormData} isSubmitting={isSubmitting} />
    </form>
  )
}

export default AddFoodForm
