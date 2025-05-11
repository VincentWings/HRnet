// Import the list of U.S. states to populate the select dropdown
import states from '../../data/states'

/**
 * AddressFields Component
 * Renders a set of input fields to collect the user's address information.
 * - Includes fields for street, city, state (dropdown), and zip code.
 * - Dynamically updates the form data via the handleChange function.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.formData - The current state of the form data.
 * @param {Function} props.handleChange - Function to handle updates when a user types or selects a field.
 * @returns {JSX.Element} A fieldset with inputs for street, city, state, and zip code.
 */
function AddressFields({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>Address</legend>

      {/* Street input field */}
      <div className="form-group">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>

      {/* City input field */}
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      {/* State select dropdown */}
      <div className="form-group">
        <label htmlFor="state">State</label>
        <select
          id="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          {/* Default option for user selection */}
          <option value="">--Choose a state--</option>
          
          {/* Populate dropdown with list of U.S. states */}
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* Zip code input field */}
      <div className="form-group">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
          min="0" // Prevents negative zip codes
        />
      </div>
    </fieldset>
  )
}

// Exporting the AddressFields component for use in other parts of the form
export default AddressFields