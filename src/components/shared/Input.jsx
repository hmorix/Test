import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Input component.
 *
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the input field.
 * @param {string} props.name - Name attribute for the input field.
 * @param {string} props.type - Type of input field (e.g., text, email, password).
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @param {string} props.value - Value of the input field.
 * @param {function} props.onChange - Callback function for input field changes.
 * @param {boolean} props.disabled - Whether the input field is disabled.
 * @param {boolean} props.required - Whether the input field is required.
 * @param {string} props.ariaLabel - ARIA label for the input field.
 * @param {string} props.ariaDescribedby - ARIA describedby attribute for the input field.
 * @param {Object} props.styles - Custom styles for the input field.
 */
const Input = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  ariaLabel,
  ariaDescribedby,
  styles,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      style={{
        ...styles,
        padding: '12px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
        '@media (max-width: 768px)': {
          padding: '8px',
          fontSize: '14px',
        },
      }}
      className="input-field"
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  styles: PropTypes.object,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  disabled: false,
  required: false,
  ariaLabel: '',
  ariaDescribedby: '',
  styles: {},
};

export default Input;