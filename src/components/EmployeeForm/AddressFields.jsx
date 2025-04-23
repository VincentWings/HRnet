// Import the list of U.S. states to populate the select dropdown
import states from '../../data/states'

/**
 * AddressFields component
 * Renders a set of input fields to collect the user's address information
 *
 * @param {Object} props
 * @param {Object} props.formData - The current state of the form
 * @param {Function} props.handleChange - Function to handle updates when a user types or selects a field
 * @returns {JSX.Element} A fieldset with inputs for street, city, state, and zip code
 */
function AddressFields({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>Address</legend>

      {/* Street input */}
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

      {/* City input */}
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
          <option value="">--Choose a state--</option>
          {/* Populate dropdown with list of states */}
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* Zip code input */}
      <div className="form-group">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
    </fieldset>
  )
}

export default AddressFields