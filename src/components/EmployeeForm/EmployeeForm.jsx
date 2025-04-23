// Import subcomponent for address inputs
import AddressFields from './AddressFields'

// Import styles for the employee form
import './EmployeeForm.css'

/**
 * EmployeeForm component
 * Renders a reusable form section to collect employee personal and department data
 *
 * @param {Object} props
 * @param {Object} props.formData - Current values for each form input field
 * @param {Function} props.handleChange - Handler function to update form state on input change
 * @returns {JSX.Element} A collection of input fields for creating or editing an employee
 */
function EmployeeForm({ formData, handleChange }) {
  return (
    <>
      {/* First Name input field */}
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Last Name input field */}
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Date of Birth input field */}
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      {/* Start Date input field */}
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>

      {/* Grouped address fields rendered by a subcomponent */}
      <AddressFields formData={formData} handleChange={handleChange} />

      {/* Department dropdown field */}
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
      </div>
    </>
  )
}

export default EmployeeForm