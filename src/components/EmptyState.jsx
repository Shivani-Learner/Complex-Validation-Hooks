import "../styles/EmptyState.css";

function EmptyState() {
  return (
    <section
      className="empty-state"
      role="status"
      aria-live="polite"
    >
      <div className="empty-card">
        <div className="empty-icon" aria-hidden="true">
          —
        </div>

        <span className="empty-eyebrow">
          VALIDATION DATA
        </span>

        <h2>No data found.</h2>

        <p>
          There is currently no validation data available
          to display. Please try again or start a new
          validation request.
        </p>

        <button
          type="button"
          className="empty-action"
          onClick={() => window.location.reload()}
        >
          Refresh data
          <span aria-hidden="true">↻</span>
        </button>
      </div>
    </section>
  );
}

export default EmptyState;