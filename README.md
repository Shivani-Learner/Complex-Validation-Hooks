# Complex Validation Hooks

A premium, accessible, multi-step React validation interface designed for subscription-service workflows.

The application provides a structured workflow for collecting, validating, reviewing, and submitting subscription information while handling invalid inputs, loading states, empty states, and simulated analytics.

---

## Overview

**Complex Validation Hooks** is a frontend implementation for a subscription-service validation workflow.

The interface is designed around three primary stages:

1. **Identity**
2. **Subscription**
3. **Review**

The application focuses on clean data handling, custom validation, accessibility, input sanitization, responsive UI, and reliable user feedback.

---

## Features

* Multi-step React form
* Controlled form inputs
* Custom regular-expression validation
* Required-field validation
* Email validation
* Phone number validation
* Subscription ID validation
* Subscription plan selection
* Start-date validation
* Additional notes validation
* Real-time validation error handling
* Input sanitization against basic XSS payloads
* Loading state for simulated asynchronous operations
* Empty state handling
* Success state after submission
* Simulated analytics tracking
* Keyboard-accessible interactions
* ARIA labels and semantic HTML
* Responsive design
* Monochromatic corporate visual system
* Reduced-motion accessibility support

---

## Tech Stack

* **React 19**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **ESLint**

---

## Validation Workflow

### Step 01 — Identity

The user provides:

* Full name
* Email address
* Phone number

The form validates each field before allowing the user to continue.

### Step 02 — Subscription

The user provides:

* Subscription ID
* Subscription plan
* Start date
* Additional notes

The application validates the subscription information before continuing.

### Step 03 — Review

The entered information is displayed for confirmation before the final submission.

After submission, the application displays a simulated loading state and then a success screen.

---

## Edge Case Handling

### Empty States

When required data is unavailable, the application displays a user-friendly empty state instead of leaving the interface blank.

### Invalid Inputs

Invalid or missing inputs are prevented from being submitted and the relevant fields display clear validation feedback.

### Slow Connectivity

Asynchronous submission is simulated with a loading state so users receive immediate visual feedback while the operation is processing.

---

## Accessibility

The application follows accessibility-focused practices including:

* Semantic HTML
* Accessible form labels
* ARIA attributes where required
* Keyboard-navigable controls
* Visible focus states
* Accessible error messages
* Disabled-state handling
* Reduced-motion support

---

## Security

User-entered text is sanitized before being stored as submitted data.

The project does not contain:

* API keys
* Passwords
* Authentication secrets
* Sensitive credentials
* Real customer PII

---

## Analytics Simulation

The application includes a simulated analytics event.

A primary successful interaction logs:

```text
[Analytics] User interacted with Complex Validation Hooks
```

---

## 📸 Screenshots

### Main Interface

![Main Interface](./Screenshot%20(239).png)

### Identity Step

![Identity Step](./Screenshot%20(240).png)

### Subscription Step

![Subscription Step](./Screenshot%20(241).png)

### Validation State

![Validation State](./Screenshot%20(242).png)

### Loading State

![Loading State](./Screenshot%20(243).png)

### Review & Confirmation

![Review & Confirmation](./Screenshot%20(244).png)

### Success State

![Success State](./Screenshot%20(245).png)

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd complex-validation-hooks
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite URL displayed in the terminal.

---

## Quality Checks

### ESLint

Run:

```bash
npm run lint
```

The project is configured with ESLint to detect code-quality issues, unused variables, and other common problems.

### Production Build

Run:

```bash
npm run build
```

The application successfully builds for production using Vite.

---

## Responsive Design

The interface is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## Design System

The application follows a clean, monochromatic corporate design system with:

* Consistent spacing
* Clear visual hierarchy
* Minimal color usage
* Accessible contrast
* Responsive layouts
* Subtle interaction feedback
* Consistent form components

---

## Project Requirements

| Requirement             | Status |
| ----------------------- | ------ |
| Multi-step React form   | ✅      |
| Controlled components   | ✅      |
| Custom regex validation | ✅      |
| Invalid input handling  | ✅      |
| Empty state             | ✅      |
| Loading state           | ✅      |
| Input sanitization      | ✅      |
| Analytics simulation    | ✅      |
| Keyboard accessibility  | ✅      |
| ARIA support            | ✅      |
| Responsive UI           | ✅      |
| ESLint configured       | ✅      |
| ESLint checks passing   | ✅      |
| Production build        | ✅      |
| No hardcoded secrets    | ✅      |

---

## Project Validation

The project has been verified with:

```bash
npm run lint
```

and:

```bash
npm run build
```

Both checks complete successfully.

---

## License

This project was developed as part of a software engineering training/client deliverable.
