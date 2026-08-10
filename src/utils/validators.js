const NAME_REGEX = /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/;

const EMAIL_REGEX =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const PHONE_REGEX = /^[6-9]\d{9}$/;

const SUBSCRIPTION_ID_REGEX = /^SUB-[A-Z0-9]{6}$/;

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export function validateFullName(value) {
  const name = value.trim();

  if (!name) {
    return "Full name is required.";
  }

  if (name.length < 2) {
    return "Full name must contain at least 2 characters.";
  }

  if (name.length > 80) {
    return "Full name must not exceed 80 characters.";
  }

  if (!NAME_REGEX.test(name)) {
    return "Please enter a valid name.";
  }

  return "";
}

export function validateEmail(value) {
  const email = value.trim();

  if (!email) {
    return "Email address is required.";
  }

  if (email.length > 120) {
    return "Email address is too long.";
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function validatePhone(value) {
  const phone = value.trim();

  if (!phone) {
    return "Mobile number is required.";
  }

  if (!PHONE_REGEX.test(phone)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  return "";
}

export function validateSubscriptionId(value) {
  const subscriptionId = value.trim().toUpperCase();

  if (!subscriptionId) {
    return "Subscription ID is required.";
  }

  if (!SUBSCRIPTION_ID_REGEX.test(subscriptionId)) {
    return "Use the format SUB-XXXXXX.";
  }

  return "";
}

export function validatePlan(value) {
  if (!value || !value.trim()) {
    return "Please select a subscription plan.";
  }

  return "";
}

export function validateStartDate(value) {
  if (!value) {
    return "Start date is required.";
  }

  if (!DATE_REGEX.test(value)) {
    return "Please enter a valid date.";
  }

  const selectedDate = new Date(`${value}T00:00:00`);

  if (Number.isNaN(selectedDate.getTime())) {
    return "Please enter a valid date.";
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return "Start date cannot be in the past.";
  }

  return "";
}

export function validateNotes(value) {
  if (!value) {
    return "";
  }

  if (value.length > 500) {
    return "Notes must not exceed 500 characters.";
  }

  return "";
}