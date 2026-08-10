import "../styles/Success.css";

function Success({ onReset }) {
  return (
    <section
      className="success"
      role="status"
      aria-live="polite"
      aria-labelledby="success-title"
    >
      <div className="success-card">
        <div className="success-visual" aria-hidden="true">
          <div className="success-ring success-ring-one" />
          <div className="success-ring success-ring-two" />

          <div className="success-check">
            ✓
          </div>
        </div>

        <span className="success-eyebrow">
          VALIDATION COMPLETE
        </span>

        <h2 id="success-title">
          Successfully
          <span>validated.</span>
        </h2>

        <p>
          Your subscription information has been
          successfully processed and passed through
          the validation workflow.
        </p>

        <div className="success-details">
          <div>
            <span>STATUS</span>
            <strong>VERIFIED</strong>
          </div>

          <div>
            <span>SECURITY</span>
            <strong>SANITIZED</strong>
          </div>

          <div>
            <span>RESULT</span>
            <strong>COMPLETE</strong>
          </div>
        </div>

        <button
          type="button"
          className="success-button"
          onClick={onReset}
        >
          Start new validation
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

export default Success;