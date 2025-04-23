import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

/**
 * Footer component
 * Displays a footer with the current year and a link to the homepage
 *
 * @returns {JSX.Element} A footer section with copyright info
 */
function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>
          {/* Display the current year and a link to the homepage using the app's brand name */}
          ©{currentYear}{' '}
          <Link to="/" className="footer-logo-link">WealthHealth</Link> - All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer