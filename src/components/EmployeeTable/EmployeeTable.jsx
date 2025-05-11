// Importing necessary hooks and components
import { useState } from 'react'
import PaginationControls from './PaginationControls'
import './EmployeeTable.css'

/**
 * EmployeeTable Component
 * Displays a paginated, searchable, and sortable table of employees.
 * - Allows users to search across all fields.
 * - Supports sorting by column headers.
 * - Includes pagination controls for easier navigation.
 *
 * @param {Object[]} employees - List of employee objects to display.
 * @returns {JSX.Element} The EmployeeTable component.
 */
function EmployeeTable({ employees }) {
  // Number of entries shown per page
  const [entriesPerPage, setEntriesPerPage] = useState(10)

  // Current page in the pagination
  const [currentPage, setCurrentPage] = useState(1)

  // Tracks current sorting field and direction
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

  // Current search string for filtering employees
  const [searchTerm, setSearchTerm] = useState('')

  /**
   * Handles changes in the entries per page dropdown.
   * Resets to page 1 when changing the number of entries.
   */
  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  /**
   * Handles sorting when clicking on a column header.
   * Toggles between ascending and descending order.
   * 
   * @param {string} key - The column key to sort by.
   */
  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  /**
   * Handles search input change.
   * Filters employees based on the search term.
   */
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
    setCurrentPage(1)
  }

  // Filters employees based on searchTerm (case-insensitive)
  const filteredEmployees = employees.filter((emp) =>
    Object.values(emp).some((val) =>
      String(val).toLowerCase().includes(searchTerm)
    )
  )

  // Pagination calculations
  const totalEntries = filteredEmployees.length
  const totalPages = Math.ceil(totalEntries / entriesPerPage)
  const startIndex = (currentPage - 1) * entriesPerPage
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries)

  // Slice the employees for the current page
  const currentEntries = filteredEmployees.slice(startIndex, endIndex)

  // Sorts the current entries based on sortConfig
  const sortedCurrentEntries = [...currentEntries].sort((a, b) => {
    if (!sortConfig.key) return 0

    const isDateField = ['startDate', 'dateOfBirth'].includes(sortConfig.key)
    const valA = isDateField ? new Date(a[sortConfig.key]) : a[sortConfig.key]
    const valB = isDateField ? new Date(b[sortConfig.key]) : b[sortConfig.key]

    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  /**
   * Returns the class name for a column header to style active sorting.
   * 
   * @param {string} key - Column key being sorted.
   * @returns {string} - Class name for the header.
   */
  const getThClass = (key) => {
    const base = 'sortable'
    if (sortConfig.key === key) {
      return `${base} active-sort ${sortConfig.direction}`
    }
    return base
  }

  return (
    <div className="employee-table">
      <div className="employee-table-top">
        {/* Dropdown to select number of entries per page */}
        <label>
          Show
          <select value={entriesPerPage} onChange={handleEntriesChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries
        </label>

        {/* Search input for filtering employees */}
        <input
          type="text"
          placeholder="Search all fields..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="employee-table-wrapper">
        <table>
          <thead>
            <tr>
              {/* Each column header is sortable and accessible */}
              {['firstName', 'lastName', 'startDate', 'department', 'dateOfBirth', 'street', 'city', 'state', 'zipCode'].map((col) => (
                <th
                  key={col}
                  onClick={() => handleSort(col)}
                  className={getThClass(col)}
                  scope="col"
                  aria-sort={sortConfig.key === col ? sortConfig.direction : 'none'}
                >
                  {col.charAt(0).toUpperCase() + col.slice(1).replace(/([A-Z])/g, ' $1')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedCurrentEntries.map((emp, index) => (
              <tr key={index}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.startDate}</td>
                <td>{emp.department}</td>
                <td>{emp.dateOfBirth}</td>
                <td>{emp.street}</td>
                <td>{emp.city}</td>
                <td>{emp.state}</td>
                <td>{emp.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table footer: pagination and info */}
      <div className="employee-table-footer">
        <p>
          Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
        </p>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

// Exporting the EmployeeTable component for use in the application
export default EmployeeTable
