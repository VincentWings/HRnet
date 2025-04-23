// Import required hooks and components
import { useEffect, useState } from 'react'
import { getEmployeesFromStorage } from '../utils/employeeStorage'
import EmployeeTable from '../components/EmployeeTable/EmployeeTable'

// Optional mock data for testing purposes
import fakeEmployees from '../data/fake_employees_100.json'

/**
 * Displays the list of current employees
 * Fetches data from local storage and optionally merges fake employees
 */
function EmployeeList() {
  // State to store all employees to be displayed
  const [employees, setEmployees] = useState([])

  // Run only once on mount to fetch stored employees
  useEffect(() => {
    const storedEmployees = getEmployeesFromStorage()

    /**
     * To test with demo/fake employees:
     * - Merge real stored data with the fake employee list
     * - You can comment/uncomment the line below depending on your needs
     */
    const combined = [...storedEmployees, ...fakeEmployees]

    // Use this for testing with fake data
    setEmployees(combined)

    // Use this to load only real stored data
    // setEmployees(storedEmployees)
  }, [])

  return (
    <div className='container'>
      <h2>Current Employees</h2>

      {/* Show message if no employees found */}
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        // Render the employee table component
        <EmployeeTable employees={employees} />
      )}
    </div>
  )
}

export default EmployeeList