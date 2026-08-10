import "../styles/FormField.css";

function FormField({
  id,
  label,
  type = "text",
  value,
  placeholder,
  error,
  required = false,
  options = [],
  autoComplete,
  inputMode,
  maxLength,
  onChange,
}) {
  const errorId = `${id}-error`;

  const commonProps = {
    id,
    name: id,
    value,
    onChange,
    required,
    autoComplete,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div
      className={`form-field ${
        error ? "has-error" : ""
      }`}
    >
      <div className="field-header">
        <label htmlFor={id}>
          {label}

          {required && (
            <span
              className="required-mark"
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>

        {maxLength && type === "textarea" && (
          <span className="character-count">
            {value.length}/{maxLength}
          </span>
        )}
      </div>

      {type === "select" ? (
        <div className="select-wrapper">
          <select {...commonProps}>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          <span
            className="select-arrow"
            aria-hidden="true"
          >
            ↓
          </span>
        </div>
      ) : type === "textarea" ? (
        <textarea
          {...commonProps}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={5}
        />
      ) : (
        <input
          {...commonProps}
          type={type}
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
        />
      )}

      {error && (
        <div
          id={errorId}
          className="field-error"
          role="alert"
        >
          <span
            className="error-icon"
            aria-hidden="true"
          >
            !
          </span>

          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default FormField;