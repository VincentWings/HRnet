// Import React state hook and React Router navigation links
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import styles and logo component
import './Navbar.css'
import Logo from './Logo'

/**
 * Main navigation bar component
 * Displays the logo and a responsive navigation menu
 */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Toggle state for showing/hiding the mobile menu

  /**
   * Toggles the mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container">
        {/* Company logo */}
        <Logo />

        {/* Hamburger menu button (mobile) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Icon changes depending on menu state */}
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation links. The menu will expand/collapse on mobile based on isMenuOpen */}
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

export default Navbar