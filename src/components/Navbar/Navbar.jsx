// Import React state hook and React Router navigation links
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import styles and logo component
import './Navbar.css'
import Logo from './Logo'

/**
 * Navbar Component
 * Displays the main navigation bar with the company logo and responsive navigation menu.
 * - Supports a mobile-friendly menu that toggles open/closed.
 * - Includes links to "Create Employee" and "Employee List".
 *
 * @component
 * @returns {JSX.Element} The Navbar component with responsive navigation.
 */
function Navbar() {
  // Toggle state for showing/hiding the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Toggles the mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container">
        {/* Company logo with link to homepage */}
        <Logo />

        {/* Hamburger menu button (visible on mobile) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}          // Toggles menu visibility
          aria-label="Toggle menu"      // Accessibility label for screen readers
          aria-expanded={isMenuOpen}    // Reflects menu open/closed state for accessibility
        >
          {/* Icon changes depending on menu state (✕ for close, ☰ for open) */}
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation links, shown/hidden based on isMenuOpen */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {/* Link to the Create Employee form */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Create Employee
          </Link>

          {/* Link to the list of saved employees */}
          <Link to="/employees" onClick={() => setIsMenuOpen(false)}>
            Employee List
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Exporting the Navbar component for use in other parts of the application
export default Navbar
