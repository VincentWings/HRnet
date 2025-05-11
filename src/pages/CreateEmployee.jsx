// Import hooks and helpers
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'

// Import the form UI and modal system
import EmployeeForm from '../components/EmployeeForm/EmployeeForm'
import { useModal } from '../components/Modal/ModalManager'

/**
 * CreateEmployee Component
 * Allows users to create and save a new employee.
 * - Displays a form for employee information.
 * - Prevents duplicate employee creation.
 * - Shows a confirmation modal after successful submission.
 *
 * @returns {JSX.Element} The CreateEmployee component.
 */
function CreateEmployee() {
  // Local state to track form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales' // Default department
  })

  const navigate = useNavigate() // Hook for page navigation
  const { openModal, closeModal } = useModal() // Hooks from modal context
  const dispatch = useDispatch() // Redux dispatcher
  const employees = useSelector((state) => state.employee.employees) // Accessing employees from Redux

  /**
   * Handles form input changes and updates local state.
   * - Updates the corresponding field in formData dynamically.
   * 
   * @param {Event} e - input change event
   */
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value }) // Dynamically update corresponding field
  }

  /**
   * Handles form submission:
   * - Prevents duplicate employee creation.
   * - Saves the employee data to Redux.
   * - Displays a confirmation modal.
   * - Redirects to the employee list after confirmation.
   * 
   * @param {Event} e - form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault() // Prevents default form submission behavior

    // Check for duplicate employees by first and last name (case-insensitive)
    const exists = employees.some(
      (employee) =>
        employee.firstName.toLowerCase() === formData.firstName.toLowerCase() &&
        employee.lastName.toLowerCase() === formData.lastName.toLowerCase()
    )

    if (exists) {
      // Show modal warning if employee already exists
      openModal(
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'red' }}>Employee already exists!</p>
          <button onClick={() => closeModal()} style={{ marginTop: '1rem' }}>
            Close
          </button>
        </div>
      )
      return // Prevents adding duplicate employee
    }

    // Save employee data to Redux
    dispatch(addEmployee(formData))

    // Show confirmation modal with redirect button
    openModal(
      <div style={{ textAlign: 'center' }}>
        <p>Employee Created!</p>
        <button
          onClick={() => {
            closeModal()
            navigate('/employees') // Redirect to employee list
          }}
          style={{ marginTop: '1rem' }}
        >
          View Employee List
        </button>
      </div>
    )

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: 'Sales' // Default department
    })
  }

  return (
    <div className="create-employee-page">
      <h2>Create Employee</h2>

      {/* Employee creation form */}
      <form className="employee-form" onSubmit={handleSubmit} id="create-employee">
        {/* EmployeeForm component for form fields */}
        <EmployeeForm formData={formData} handleChange={handleChange} />
        
        {/* Submit button for saving the employee */}
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

// Exporting the CreateEmployee component for use in the application
export default CreateEmployee