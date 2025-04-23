import './PaginationControls.css'

/**
 * PaginationControls component
 * Provides "Previous" and "Next" buttons to navigate between paginated content
 *
 * @param {Object} props
 * @param {number} props.currentPage - The current page number
 * @param {number} props.totalPages - Total number of available pages
 * @param {Function} props.setCurrentPage - Function to update the current page
 */
function PaginationControls({ currentPage, totalPages, setCurrentPage }) {
  /**
   * Handles the "Previous" button click
   * Decreases the current page number by one, unless it's already at page 1
   */
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  /**
   * Handles the "Next" button click
   * Increases the current page number by one, unless it's already the last page
   */
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="pagination-controls">
      {/* Button to go to the previous page, disabled on the first page */}
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>

      {/* Display the current page number */}
      <span className="page-indicator">{currentPage}</span>

      {/* Button to go to the next page, disabled on the last page */}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  )
}

export default PaginationControls