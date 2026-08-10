import "../styles/LoadingState.css";

function LoadingState() {
  return (
    <section
      className="loading-state"
      role="status"
      aria-live="polite"
      aria-label="Processing validation"
    >
      <div className="loading-card">
        <div className="loading-visual">
          <div className="loading-ring loading-ring-one" />
          <div className="loading-ring loading-ring-two" />

          <div className="loading-core">
            <span>CV</span>
          </div>
        </div>

        <div className="loading-content">
          <span className="loading-eyebrow">
            VALIDATION CORE
          </span>

          <h2>
            Processing your
            <span>validation.</span>
          </h2>

          <p>
            We're securely validating the
            submitted information. This may take
            a moment on a slower connection.
          </p>
        </div>

        <div className="loading-progress">
          <div className="loading-progress-track">
            <div className="loading-progress-bar" />
          </div>

          <div className="loading-progress-info">
            <span>SECURE PROCESSING</span>
            <span>PLEASE WAIT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingState;