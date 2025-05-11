// Import required hooks and components
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFakeEmployees } from '../redux/employeeSlice'
import EmployeeTable from '../components/EmployeeTable/EmployeeTable'

/**
 * EmployeeList Component
 * Displays the list of current employees.
 * - Loads fake employees once when the component mounts.
 * - Displays a table of employees or a message if no employees are available.
 *
 * @returns {JSX.Element} The EmployeeList component displaying a list of employees.
 */
function EmployeeList() {
  const dispatch = useDispatch()

  // Load fake employees only once on component mount
  useEffect(() => {
    dispatch(loadFakeEmployees())
  }, [dispatch])

  // Accessing the list of employees from the Redux store
  const employees = useSelector((state) => state.employee.employees)

  return (
    <div className='container'>
      <h2>Current Employees</h2>

      {/* Conditional rendering:
          - If no employees found, display a message.
          - Otherwise, render the EmployeeTable component. */}
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        // Render the EmployeeTable component with the list of employees
        <EmployeeTable employees={employees} />
      )}
    </div>
  )
}

// Exporting the EmployeeList component for use in the application
export default EmployeeList
