/**
 * Reusable Sidebar component.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the sidebar is open.
 * @param {boolean} props.isFixed - Whether the sidebar is fixed.
 * @param {string} props.variant - The variant of the sidebar (e.g., 'primary', 'secondary').
 * @param {JSX.Element} props.children - The content of the sidebar.
 * @param {function} props.onToggle - The callback function to toggle the sidebar.
 */
import React from 'react';
import { classNames } from '../utils';

const Sidebar = ({ isOpen, isFixed, variant, children, onToggle }) => {
  const classes = classNames(
    'sidebar',
    `sidebar--${variant}`,
    { 'sidebar--fixed': isFixed },
    { 'sidebar--open': isOpen }
  );

  return (
    <aside
      className={classes}
      aria-hidden={!isOpen}
      aria-labelledby="sidebar-label"
      role="complementary"
    >
      <button
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="sr-only">Toggle sidebar</span>
      </button>
      <div className="sidebar-content" id="sidebar-label">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;