import { useState } from "react";

import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateSubscriptionId,
  validatePlan,
  validateStartDate,
  validateNotes,
} from "../utils/validators";

function useValidation(formData) {
  const [errors, setErrors] = useState({});

  const validateStepOne = () => {
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const validateStepTwo = () => {
    const newErrors = {
      subscriptionId: validateSubscriptionId(
        formData.subscriptionId
      ),
      plan: validatePlan(formData.plan),
      startDate: validateStartDate(formData.startDate),
      notes: validateNotes(formData.notes),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const validateCurrentStep = (step) => {
    if (step === 1) {
      return validateStepOne();
    }

    if (step === 2) {
      return validateStepTwo();
    }

    return true;
  };

  const clearError = (field) => {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [field]: "",
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateCurrentStep,
    validateStepOne,
    validateStepTwo,
    clearError,
    clearErrors,
  };
}

export default useValidation;