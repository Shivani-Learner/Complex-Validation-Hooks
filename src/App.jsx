import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StepIndicator from "./components/StepIndicator";
import ValidationForm from "./components/ValidationForm";
import Review from "./components/Review";
import LoadingState from "./components/LoadingState";
import EmptyState from "./components/EmptyState";
import Success from "./components/Success";

import { sanitizeFormData } from "./utils/sanitize";
import { trackInteraction } from "./utils/analytics";

import "./app.css";

const INITIAL_FORM_DATA = {
  fullName: "",
  email: "",
  phone: "",
  subscriptionId: "",
  plan: "",
  startDate: "",
  notes: "",
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [hasData] = useState(true);

  const [formData, setFormData] = useState(
    INITIAL_FORM_DATA
  );

  const updateFormData = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const goNext = () => {
    setCurrentStep((previous) =>
      Math.min(previous + 1, 3)
    );
  };

  const goBack = () => {
    setCurrentStep((previous) =>
      Math.max(previous - 1, 1)
    );
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const sanitizedData = sanitizeFormData(formData);

    setFormData(sanitizedData);

    setTimeout(() => {
      trackInteraction("Validation completed");

      setIsLoading(false);
      setIsSubmitted(true);
    }, 1400);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);

    setCurrentStep(1);

    setIsSubmitted(false);

    setIsLoading(false);
  };

  return (
    <div className="app">
      <Navbar />

      {!isSubmitted && <Hero />}

      <main className="main-container">
        {isSubmitted ? (
          <Success onReset={resetForm} />
        ) : isLoading ? (
          <LoadingState />
        ) : !hasData ? (
          <EmptyState />
        ) : (
          <>
            <StepIndicator currentStep={currentStep} />

            {currentStep === 1 && (
              <ValidationForm
                formData={formData}
                updateFormData={updateFormData}
                currentStep={currentStep}
                onNext={goNext}
              />
            )}

            {currentStep === 2 && (
              <ValidationForm
                formData={formData}
                updateFormData={updateFormData}
                currentStep={currentStep}
                onNext={goNext}
                onBack={goBack}
              />
            )}

            {currentStep === 3 && (
              <Review
                formData={formData}
                onBack={goBack}
                onSubmit={handleSubmit}
                isSubmitting={isLoading}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
