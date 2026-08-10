import "../styles/Review.css";

function Review({ formData, onBack, onSubmit }) {
  const details = [
    {
      label: "FULL NAME",
      value: formData.fullName,
    },
    {
      label: "EMAIL ADDRESS",
      value: formData.email,
    },
    {
      label: "PHONE NUMBER",
      value: formData.phone,
    },
    {
      label: "SUBSCRIPTION ID",
      value: formData.subscriptionId,
    },
    {
      label: "PLAN",
      value: formData.plan,
    },
    {
      label: "START DATE",
      value: formData.startDate,
    },
  ];

  return (
    <section
      className="review"
      aria-labelledby="review-title"
    >
      <div className="review-header">
        <div>
          <div className="review-eyebrow">
            FINAL VERIFICATION
          </div>

          <h2 id="review-title">
            Review your details.
          </h2>

          <p>
            Everything looks ready. Verify the
            information below before submitting
            the validation request.
          </p>
        </div>

        <div
          className="review-status"
          aria-label="Ready for submission"
        >
          <span
            className="review-status-dot"
            aria-hidden="true"
          />

          READY
        </div>
      </div>

      <div className="review-grid">
        {details.map((item) => (
          <div
            className="review-item"
            key={item.label}
          >
            <span className="review-item-label">
              {item.label}
            </span>

            <strong className="review-item-value">
              {item.value || "Not provided"}
            </strong>
          </div>
        ))}

        <div className="review-item review-item-full">
          <span className="review-item-label">
            ADDITIONAL NOTES
          </span>

          <strong className="review-item-value review-notes">
            {formData.notes ||
              "No additional notes provided."}
          </strong>
        </div>
      </div>

      <div className="review-security">
        <div className="review-security-icon">
          ✓
        </div>

        <div>
          <strong>
            Secure validation
          </strong>

          <p>
            Your submitted information is
            sanitized before processing and is
            not stored outside the current
            validation session.
          </p>
        </div>
      </div>

      <div className="review-footer">
        <button
          type="button"
          className="review-back"
          onClick={onBack}
        >
          <span aria-hidden="true">
            ←
          </span>

          Edit details
        </button>

        <button
          type="button"
          className="review-submit"
          onClick={onSubmit}
        >
          <span>
            Submit validation
          </span>

          <span
            className="review-submit-arrow"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>
    </section>
  );
}

export default Review;