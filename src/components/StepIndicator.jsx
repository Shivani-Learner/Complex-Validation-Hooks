import "../styles/StepIndicator.css";

function StepIndicator({ currentStep }) {
  const steps = [
    {
      number: 1,
      title: "Identity",
      description: "Subscriber details",
    },
    {
      number: 2,
      title: "Subscription",
      description: "Plan information",
    },
    {
      number: 3,
      title: "Review",
      description: "Confirm details",
    },
  ];

  return (
    <section
      className="step-indicator"
      aria-label="Validation progress"
    >
      <div className="step-indicator-header">
        <span className="step-indicator-label">
          VALIDATION PROGRESS
        </span>

        <span className="step-indicator-count">
          {String(currentStep).padStart(2, "0")} / 03
        </span>
      </div>

      <div className="steps">
        {steps.map((step, index) => {
          const isActive =
            currentStep === step.number;

          const isCompleted =
            currentStep > step.number;

          return (
            <div
              className="step-wrapper"
              key={step.number}
            >
              <div
                className={`step ${
                  isActive ? "active" : ""
                } ${
                  isCompleted ? "completed" : ""
                }`}
                aria-current={
                  isActive ? "step" : undefined
                }
              >
                <div className="step-number">
                  {isCompleted ? (
                    <span aria-hidden="true">
                      ✓
                    </span>
                  ) : (
                    String(step.number).padStart(
                      2,
                      "0"
                    )
                  )}
                </div>

                <div className="step-content">
                  <strong>
                    {step.title}
                  </strong>

                  <span>
                    {step.description}
                  </span>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`step-connector ${
                    currentStep >
                    step.number
                      ? "completed"
                      : ""
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StepIndicator;