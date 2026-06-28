/**
 * Reusable Modal component.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {string} props.title - Modal title.
 * @param {React.ReactNode} props.children - Modal content.
 * @param {string} props.size - Modal size (sm, md, lg).
 * @param {boolean} props.isCentered - Whether the modal is centered.
 */
import React from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  isCentered = false,
}) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-xl',
  };

  const modalClass = `
    fixed
    top-0
    left-0
    right-0
    bottom-0
    bg-black
    bg-opacity-50
    z-50
    flex
    items-center
    justify-center
  `;

  const dialogClass = `
    relative
    bg-white
    rounded-lg
    shadow-lg
    ${sizes[size]}
    ${isCentered ? 'mx-auto' : ''}
  `;

  return (
    <div
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      role="dialog"
      className={modalClass}
    >
      <div className={dialogClass}>
        <div className="p-6">
          <h2 id="modal-title" className="text-lg font-bold">
            {title}
          </h2>
          <div id="modal-description" className="mt-4">
            {children}
          </div>
        </div>
        <div className="p-6 flex justify-end">
          <button
            type="button"
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;