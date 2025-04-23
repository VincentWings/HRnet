// Import React Router's Link component to navigate to the homepage
import { Link } from 'react-router-dom'

// Import logo image asset
import logo from '../../assets/images/wealth-health-logo-alt.jpg'

// Import styles specific to the Logo component
import './Logo.css'

/**
 * Logo component
 * Displays the WealthHealth logo and text as a clickable link that redirects to the homepage
 *
 * @component
 * @returns {JSX.Element} A link containing the company logo and name
 */
function Logo() {
  return (
    <Link to="/" className="navbar-logo">
      {/* Company logo image with clear and descriptive alt text for accessibility */}
      <img
        src={logo}
        alt="Wealth Health Logo"
        className="logo-image"
      />

      {/* Company name beside the logo */}
      <span className="logo-text">WealthHealth</span>
    </Link>
  )
}

export default Logo