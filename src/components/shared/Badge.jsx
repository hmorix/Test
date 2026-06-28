import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Badge component.
 *
 * @param {Object} props - Component props.
 * @param {string} props.variant - Badge variant (primary or secondary).
 * @param {string} props.size - Badge size (sm, md, or lg).
 * @param {string} props.label - Badge label.
 * @param {boolean} props.rounded - Whether the badge should be rounded.
 * @param {boolean} props.disabled - Whether the badge is disabled.
 * @param {string} props.className - Additional class names.
 * @param {Object} props.style - Inline styles.
 * @param {string} props['aria-label'] - ARIA label for accessibility.
 */
const Badge = ({
  variant = 'primary',
  size = 'md',
  label,
  rounded = false,
  disabled = false,
  className = '',
  style = {},
  'aria-label': ariaLabel,
}) => {
  const colors = {
    primary: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#006064',
      contrast: '#FFFFFF',
    },
    secondary: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
    },
  };

  const variantColors = colors[variant];

  const badgeClasses = [
    'inline-flex',
    'items-center',
    'px-2',
    'py-1',
    'text-xs',
    'font-medium',
    'leading-4',
    'rounded',
    disabled ? 'opacity-50' : '',
    rounded ? 'rounded-full' : '',
    className,
  ];

  const badgeStyles = {
    ...style,
    backgroundColor: variantColors[500],
    color: variantColors.contrast,
  };

  return (
    <span
      className={badgeClasses.join(' ')}
      style={badgeStyles}
      aria-label={ariaLabel}
      role="badge"
    >
      {label}
    </span>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  'aria-label': PropTypes.string,
};

export default Badge;