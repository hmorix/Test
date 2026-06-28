/**
 * Reusable Loading component.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLoading - Whether the component is loading.
 * @param {string} props.size - Size of the loading indicator (small, medium, large).
 * @param {string} props.variant - Variant of the loading indicator (primary, secondary).
 * @param {string} props.className - Additional class names for the component.
 */

import React from 'react';

const Loading = ({
  isLoading = true,
  size = 'medium',
  variant = 'primary',
  className = '',
}) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  };

  const variants = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
  };

  return (
    <div
      aria-label="Loading"
      aria-busy={isLoading}
      className={`inline-block ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>
  );
};

export default Loading;