// Importing CSS styles for the pagination controls
import './PaginationControls.css'

/**
 * PaginationControls Component
 * Provides "Previous" and "Next" buttons to navigate between paginated content.
 * - Disables "Previous" on the first page.
 * - Disables "Next" on the last page.
 *
 * @param {Object} props - Component properties.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - Total number of available pages.
 * @param {Function} props.setCurrentPage - Function to update the current page.
 * @returns {JSX.Element} The PaginationControls component.
 */
function PaginationControls({ currentPage, totalPages, setCurrentPage }) {
  /**
   * Handles the "Previous" button click.
   * Decreases the current page number by one, unless it's already at page 1.
   */
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  /**
   * Handles the "Next" button click.
   * Increases the current page number by one, unless it's already the last page.
   */
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="pagination-controls">
      {/* Button to go to the previous page, disabled on the first page */}
      <button 
        onClick={handlePrev} 
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className="pagination-button"
      >
        Prev
      </button>

      {/* Display the current page number and total pages */}
      <span className="page-indicator">
        Page {currentPage} of {totalPages}
      </span>

      {/* Button to go to the next page, disabled on the last page */}
      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className="pagination-button"
      >
        Next
      </button>
    </div>
  )
}

// Exporting the PaginationControls component for use in other parts of the application
export default PaginationControls
