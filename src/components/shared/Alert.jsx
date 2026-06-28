import React from 'react';
import classNames from 'classnames';

/**
 * Reusable Alert component.
 *
 * @param {Object} props
 * @param {('primary' | 'secondary')} props.variant - The variant of the alert.
 * @param {('success' | 'info' | 'warning' | 'error')} props.status - The status of the alert.
 * @param {string} props.message - The message of the alert.
 * @param {boolean} props.dismissible - Whether the alert is dismissible.
 * @param {function} props.onDismiss - The callback function when the alert is dismissed.
 */
const Alert = ({
  variant = 'primary',
  status = 'info',
  message,
  dismissible = false,
  onDismiss,
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
      // Add more colors as needed
    },
  };

  const getBackgroundColor = () => {
    switch (status) {
      case 'success':
        return colors[variant][300];
      case 'info':
        return colors[variant][500];
      case 'warning':
        return colors[variant][700];
      case 'error':
        return colors[variant][900];
      default:
        return colors[variant][500];
    }
  };

  const getTextColor = () => {
    switch (status) {
      case 'success':
        return colors[variant].contrast;
      case 'info':
        return colors[variant].contrast;
      case 'warning':
        return colors[variant].contrast;
      case 'error':
        return colors[variant].contrast;
      default:
        return colors[variant].contrast;
    }
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      className={classNames('alert', `alert-${status}`, {
        'alert-dismissible': dismissible,
      })}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
      }}
    >
      {message}
      {dismissible && (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={handleDismiss}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

export default Alert;