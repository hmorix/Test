/**
 * Reusable Button component.
 *
 * @param {Object} props - Component props.
 * @param {String} props.variant - Button variant. One of 'primary', 'secondary', 'outlined', 'text'.
 * @param {String} props.color - Button color. One of 'primary', 'secondary'.
 * @param {String} props.size - Button size. One of 'sm', 'md', 'lg'.
 * @param {Boolean} props.disabled - Whether the button is disabled.
 * @param {Boolean} props.isLoading - Whether the button is in a loading state.
 * @param {String} props.label - Button label.
 * @param {Node} props.children - Button content.
 * @param {Function} props.onClick - Button click handler.
 * @param {Object} props.rest - Additional props to be spread on the button element.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant,
  color,
  size,
  disabled,
  isLoading,
  label,
  children,
  onClick,
  ...rest
}) => {
  const className = [
    'button',
    variant && `button--${variant}`,
    color && `button--${color}`,
    size && `button--${size}`,
    disabled && 'button--disabled',
    isLoading && 'button--loading',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event) => {
    if (disabled || isLoading) return;
    onClick(event);
  };

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      aria-label={label}
      aria-disabled={disabled}
      aria-busy={isLoading}
      onClick={handleClick}
      {...rest}
    >
      {isLoading ? (
        <span className="button__loading" aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  color: 'primary',
  size: 'md',
  disabled: false,
  isLoading: false,
  label: '',
  children: null,
  onClick: () => {},
};

export default Button;