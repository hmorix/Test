import React, { ReactNode } from 'react';
import { CSSProperties } from 'react';
import { classNames } from '../utils';

/**
 * Reusable Form component.
 *
 * @param {Object} props
 * @param {ReactNode} props.children - Form fields.
 * @param {string} [props.className] - Additional class names.
 * @param {CSSProperties} [props.style] - Inline styles.
 * @param {string} [props.action] - Form action URL.
 * @param {string} [props.method] - Form submission method (GET, POST, etc.).
 * @param {boolean} [props.disabled] - Whether the form is disabled.
 * @param {string} [props.id] - Unique identifier for the form.
 * @param {string} [props.name] - Name of the form.
 * @param {React.FormEventHandler<HTMLFormElement>} [props.onSubmit] - Form submission handler.
 * @param {React.FormEventHandler<HTMLFormElement>} [props.onReset] - Form reset handler.
 * @param {boolean} [props.noValidate] - Whether the form should not be validated.
 * @param {boolean} [props.autoComplete] - Whether the form fields should be auto-completed.
 * @param {string} [props.acceptCharset] - Character encoding for the form submission.
 */
const Form = ({
  children,
  className,
  style,
  action,
  method,
  disabled,
  id,
  name,
  onSubmit,
  onReset,
  noValidate,
  autoComplete,
  acceptCharset,
}) => {
  const classes = classNames('form', className);

  return (
    <form
      className={classes}
      style={style}
      action={action}
      method={method}
      disabled={disabled}
      id={id}
      name={name}
      onSubmit={onSubmit}
      onReset={onReset}
      noValidate={noValidate}
      autoComplete={autoComplete}
      acceptCharset={acceptCharset}
      aria-disabled={disabled}
      aria-invalid={false}
      aria-labelledby={id}
    >
      {children}
    </form>
  );
};

export default Form;