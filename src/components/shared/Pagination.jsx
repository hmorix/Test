import React from 'react';
import { css } from '@emotion/css';

/**
 * Reusable Pagination component.
 *
 * @param {Object} props
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {function} props.onChange - The callback function when the page changes.
 * @param {string} props.className - The CSS class name for the component.
 * @param {string} props.variant - The variant of the pagination (e.g., "primary", "secondary").
 */
const Pagination = ({
  currentPage,
  totalPages,
  onChange,
  className,
  variant = 'primary',
}) => {
  const paginationClass = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: ${variant === 'primary' ? '#E0F7FA' : '#F3E5F5'};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    & .pagination-item {
      margin: 0 8px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: ${variant === 'primary' ? '#B2EBF2' : '#E1BEE7'};
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${variant === 'primary' ? '#00BCD4' : '#CE93D8'};
      }
    }

    & .pagination-item.active {
      background-color: ${variant === 'primary' ? '#00BCD4' : '#CE93D8'};
      color: #FFFFFF;
    }

    & .pagination-item.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;

      & .pagination-item {
        margin: 8px;
      }
    }
  `;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onChange(pageNumber);
    }
  };

  return (
    <nav aria-label="Pagination" className={paginationClass}>
      <button
        className="pagination-item"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
          onClick={() => handlePageChange(pageNumber)}
          aria-label={`Page ${pageNumber}`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="pagination-item"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;