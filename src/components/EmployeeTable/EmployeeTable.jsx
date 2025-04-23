import { useState } from 'react'
import PaginationControls from './PaginationControls'
import './EmployeeTable.css'

/**
 * Displays a paginated, searchable, and sortable table of employees
 * @param {Object[]} employees - List of employee objects to display
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

  // Called when user changes entries per page
  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  // Called when user clicks a column header to sort
  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  // Called when user types into the search bar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
    setCurrentPage(1)
  }

  // Filters employees based on searchTerm
  const filteredEmployees = employees.filter((emp) => {
    return Object.values(emp).some((val) =>
      String(val).toLowerCase().includes(searchTerm)
    )
  })

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
   * Returns class name for a column header to style active sorting
   * @param {string} key - Column key being sorted
   * @returns {string}
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

        {/* Search input */}
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
              <th onClick={() => handleSort('firstName')} className={getThClass('firstName')} scope="col" aria-sort={sortConfig.key === 'firstName' ? sortConfig.direction : 'none'}>
                First Name
              </th>
              <th onClick={() => handleSort('lastName')} className={getThClass('lastName')} scope="col" aria-sort={sortConfig.key === 'lastName' ? sortConfig.direction : 'none'}>
                Last Name
              </th>
              <th onClick={() => handleSort('startDate')} className={getThClass('startDate')} scope="col" aria-sort={sortConfig.key === 'startDate' ? sortConfig.direction : 'none'}>
                Start Date
              </th>
              <th onClick={() => handleSort('department')} className={getThClass('department')} scope="col" aria-sort={sortConfig.key === 'department' ? sortConfig.direction : 'none'}>
                Department
              </th>
              <th onClick={() => handleSort('dateOfBirth')} className={getThClass('dateOfBirth')} scope="col" aria-sort={sortConfig.key === 'dateOfBirth' ? sortConfig.direction : 'none'}>
                Date of Birth
              </th>
              <th onClick={() => handleSort('street')} className={getThClass('street')} scope="col" aria-sort={sortConfig.key === 'street' ? sortConfig.direction : 'none'}>
                Street
              </th>
              <th onClick={() => handleSort('city')} className={getThClass('city')} scope="col" aria-sort={sortConfig.key === 'city' ? sortConfig.direction : 'none'}>
                City
              </th>
              <th onClick={() => handleSort('state')} className={getThClass('state')} scope="col" aria-sort={sortConfig.key === 'state' ? sortConfig.direction : 'none'}>
                State
              </th>
              <th onClick={() => handleSort('zipCode')} className={getThClass('zipCode')} scope="col" aria-sort={sortConfig.key === 'zipCode' ? sortConfig.direction : 'none'}>
                Zip Code
              </th>
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

export default EmployeeTable
