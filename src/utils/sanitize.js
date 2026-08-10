function sanitizeText(value) {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

export function sanitizeFormData(formData) {
  return Object.fromEntries(
    Object.entries(formData).map(
      ([key, value]) => [
        key,
        sanitizeText(value),
      ]
    )
  );
}