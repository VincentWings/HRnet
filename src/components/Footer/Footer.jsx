// Importing React and Link component from React Router
import React from 'react'
import { Link } from 'react-router-dom'

// Importing CSS styles for the footer
import './Footer.css'

/**
 * Footer Component
 * Displays a footer with the current year and a link to the homepage.
 * - The footer is styled using CSS from Footer.css.
 * - The year is dynamically updated.
 * - The brand name "WealthHealth" is a link to the homepage.
 *
 * @returns {JSX.Element} A footer section with copyright information.
 */
function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>
          {/* Display the current year dynamically */}
          ©{currentYear}{' '}
          {/* Link to the homepage with the brand name "WealthHealth" */}
          <Link to="/" className="footer-logo-link">
            WealthHealth
          </Link>{' '}
          - All rights reserved
        </p>
      </div>
    </footer>
  )
}

// Exporting the Footer component for use in other parts of the application
export default Footer
