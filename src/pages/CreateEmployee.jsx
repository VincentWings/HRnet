// Import hooks and helpers
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveEmployeeToStorage } from '../utils/employeeStorage'

// Import the form UI and modal system
import EmployeeForm from '../components/EmployeeForm/EmployeeForm'
import { useModal } from '../components/Modal/ModalManager'

/**
 * Page component to create and save a new employee
 * Displays a form and shows a modal confirmation after submission
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
    department: 'Sales'
  })

  const navigate = useNavigate()             // Hook for page navigation
  const { openModal, closeModal } = useModal() // Hooks from modal context

  /**
   * Handles form input changes and updates local state
   * @param {Event} e - input change event
   */
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value }) // Dynamically update corresponding field
  }

  /**
   * Handles form submission:
   * - Saves the employee
   * - Shows confirmation modal
   * - Navigates to employee list after confirmation
   * @param {Event} e - form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    // Save employee data to local storage
    saveEmployeeToStorage(formData)

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
      department: 'Sales'
    })
  }

  return (
    <div className="create-employee-page">
      <h2>Create Employee</h2>

      {/* Employee creation form */}
      <form className="employee-form" onSubmit={handleSubmit} id="create-employee">
        <EmployeeForm formData={formData} handleChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default CreateEmployee