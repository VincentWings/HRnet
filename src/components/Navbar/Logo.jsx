// Import React Router's Link component to navigate to the homepage
import { Link } from 'react-router-dom'

// Import logo image asset
import logo from '../../assets/images/wealth-health-logo-alt.jpg'

// Import styles specific to the Logo component
import './Logo.css'

/**
 * Logo Component
 * Displays the WealthHealth logo and text as a clickable link that redirects to the homepage.
 * - The logo image is accessible with descriptive alt text.
 * - The text "WealthHealth" appears beside the logo.
 * - Clicking the logo redirects to the homepage ("/").
 *
 * @component
 * @returns {JSX.Element} A link containing the company logo and name.
 */
function Logo() {
  return (
    <Link to="/" className="navbar-logo">
      {/* Company logo image with clear and descriptive alt text for accessibility */}
      <img
        src={logo}               // Source of the company logo image
        alt="Wealth Health Logo" // Descriptive alt text for screen readers
        className="logo-image"   // CSS class for styling the logo image
      />

      {/* Company name beside the logo */}
      <span className="logo-text">WealthHealth</span>
    </Link>
  )
}

// Exporting the Logo component for use in other parts of the application
export default Logo
