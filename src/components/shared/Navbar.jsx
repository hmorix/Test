/**
 * Reusable Navbar component.
 *
 * @param {Object} props
 * @param {string} props.variant - The variant of the navbar (default, secondary)
 * @param {Array} props.navItems - The navigation items
 * @param {Function} props.onNavItemClicked - The callback function when a nav item is clicked
 * @param {boolean} props.isMobile - Whether the navbar is in mobile mode
 * @param {Function} props.onMobileMenuToggle - The callback function when the mobile menu is toggled
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({
  variant = 'default',
  navItems,
  onNavItemClicked,
  isMobile,
  onMobileMenuToggle,
}) => {
  const navbarClasses = `navbar ${variant === 'secondary' ? 'navbar-secondary' : ''}`;
  const mobileMenuClasses = `mobile-menu ${isMobile ? 'mobile-menu-open' : ''}`;

  return (
    <nav className={navbarClasses} aria-label="Main Navigation">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className="logo" aria-label="Home">
            Logo
          </NavLink>
          {isMobile && (
            <button
              className="mobile-menu-toggle"
              aria-label="Toggle Mobile Menu"
              onClick={onMobileMenuToggle}
            >
              <span className="sr-only">Toggle Mobile Menu</span>
              <span className="menu-icon" aria-hidden="true"></span>
            </button>
          )}
        </div>
        <div className={mobileMenuClasses}>
          <ul className="nav">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={item.href}
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => onNavItemClicked(item)}
                  aria-label={item.label}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;