import { useState } from "react";

import FormField from "./FormField";
import "../styles/ValidationForm.css";

function ValidationForm({
  formData,
  updateFormData,
  currentStep,
  onNext,
  onBack,
}) {
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required.";
      } else if (
        !/^[A-Za-z\s.'-]{2,60}$/.test(
          formData.fullName.trim()
        )
      ) {
        newErrors.fullName =
          "Enter a valid full name.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
          formData.email.trim()
        )
      ) {
        newErrors.email =
          "Enter a valid email address.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (
        !/^[6-9]\d{9}$/.test(
          formData.phone.trim()
        )
      ) {
        newErrors.phone =
          "Enter a valid 10-digit phone number.";
      }
    }

    if (currentStep === 2) {
      if (!formData.subscriptionId.trim()) {
        newErrors.subscriptionId =
          "Subscription ID is required.";
      } else if (
        !/^[A-Za-z0-9-]{4,30}$/.test(
          formData.subscriptionId.trim()
        )
      ) {
        newErrors.subscriptionId =
          "Use 4–30 letters, numbers, or hyphens.";
      }

      if (!formData.plan) {
        newErrors.plan =
          "Please select a subscription plan.";
      }

      if (!formData.startDate) {
        newErrors.startDate =
          "Start date is required.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;

    updateFormData(field, value);

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext();
    }
  };

  return (
    <section
      id="validation"
      className="validation-form"
      aria-labelledby="validation-title"
    >
      <div className="validation-header">
        <div className="validation-header-content">
          <div className="validation-eyebrow">
            VALIDATION WORKSPACE
          </div>

          <h2 id="validation-title">
            {currentStep === 1
              ? "Identity details"
              : "Subscription details"}
          </h2>

          <p>
            {currentStep === 1
              ? "Enter the subscriber information required to begin the validation process."
              : "Provide the subscription information so the validation engine can verify the record."}
          </p>
        </div>

        <span className="validation-step-label">
          STEP {currentStep} / 3
        </span>
      </div>

      {currentStep === 1 && (
        <div className="validation-fields">
          <FormField
            id="fullName"
            label="Full name"
            value={formData.fullName}
            placeholder="Enter subscriber name"
            error={errors.fullName}
            required
            autoComplete="name"
            maxLength={60}
            onChange={handleChange("fullName")}
          />

          <FormField
            id="email"
            label="Email address"
            type="email"
            value={formData.email}
            placeholder="name@example.com"
            error={errors.email}
            required
            autoComplete="email"
            inputMode="email"
            maxLength={100}
            onChange={handleChange("email")}
          />

          <FormField
            id="phone"
            label="Phone number"
            type="tel"
            value={formData.phone}
            placeholder="10-digit mobile number"
            error={errors.phone}
            required
            autoComplete="tel"
            inputMode="numeric"
            maxLength={10}
            onChange={handleChange("phone")}
          />
        </div>
      )}

      {currentStep === 2 && (
        <div className="validation-fields">
          <FormField
            id="subscriptionId"
            label="Subscription ID"
            value={formData.subscriptionId}
            placeholder="e.g. SUB-10294"
            error={errors.subscriptionId}
            required
            maxLength={30}
            onChange={handleChange(
              "subscriptionId"
            )}
          />

          <FormField
            id="plan"
            label="Subscription plan"
            type="select"
            value={formData.plan}
            error={errors.plan}
            required
            options={[
              {
                value: "",
                label: "Select a plan",
              },
              {
                value: "Basic",
                label: "Basic",
              },
              {
                value: "Standard",
                label: "Standard",
              },
              {
                value: "Premium",
                label: "Premium",
              },
              {
                value: "Enterprise",
                label: "Enterprise",
              },
            ]}
            onChange={handleChange("plan")}
          />

          <FormField
            id="startDate"
            label="Subscription start date"
            type="date"
            value={formData.startDate}
            error={errors.startDate}
            required
            onChange={handleChange(
              "startDate"
            )}
          />

          <div className="validation-field-full">
            <FormField
              id="notes"
              label="Additional notes"
              type="textarea"
              value={formData.notes}
              placeholder="Add any relevant validation notes..."
              maxLength={500}
              onChange={handleChange("notes")}
            />
          </div>
        </div>
      )}

      <div className="validation-footer">
        <div className="validation-security-note">
          <span
            className="security-icon"
            aria-hidden="true"
          >
            ✓
          </span>

          <span>
            Your information is validated and
            sanitized before processing.
          </span>
        </div>

        <div className="validation-actions">
          {currentStep > 1 && (
            <button
              type="button"
              className="validation-back"
              onClick={onBack}
            >
              <span aria-hidden="true">
                ←
              </span>

              Back
            </button>
          )}

          <button
            type="button"
            className="validation-next"
            onClick={handleNext}
          >
            <span>
              {currentStep === 1
                ? "Continue"
                : "Review details"}
            </span>

            <span
              className="validation-next-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ValidationForm;