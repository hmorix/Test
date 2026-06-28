/**
 * Reusable Card component.
 *
 * @param {Object} props
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {string} props.ctaText - The text for the call-to-action button.
 * @param {Function} props.onCtaClick - The callback function for the call-to-action button click event.
 * @param {boolean} props.isLoading - Whether the card is in a loading state.
 * @param {string} props.imageSrc - The source URL of the card image.
 * @param {string} props.imageAlt - The alt text for the card image.
 * @param {string} props.className - Additional CSS class names for the card.
 */

import React from 'react';

const Card = ({
  title,
  description,
  ctaText,
  onCtaClick,
  isLoading,
  imageSrc,
  imageAlt,
  className,
}) => {
  return (
    <div
      className={`card ${className}`}
      aria-label={title}
      aria-busy={isLoading}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="card-image"
          loading="lazy"
        />
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button
          className="card-cta"
          onClick={onCtaClick}
          disabled={isLoading}
          aria-label={ctaText}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default Card;