// Importing React and CSS styles for the modal
import React, { useEffect, useRef, useState } from 'react'
import './Modal.css'

/**
 * A reusable modal component with animation, accessibility support, and custom styling options.
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isOpen - Whether the modal should be visible or not
 * @param {Function} props.onClose - Function to close the modal
 * @param {number} [props.fadeDuration=300] - Duration of the fade animation in ms
 * @param {number} [props.fadeDelay=0.5] - Delay multiplier before content fades in
 * @param {boolean} [props.escapeClose=true] - Allows modal to be closed with Escape key
 * @param {boolean} [props.clickClose=true] - Allows closing by clicking outside the modal
 * @param {boolean} [props.showClose=true] - Show the close (×) button in top-right corner
 * @param {string} [props.closeText='×'] - The text or icon to display in the close button
 * @param {boolean} [props.useTransform=true] - Whether to animate with translateY
 * @param {boolean} [props.useBorderRadius=true] - Whether to apply border-radius
 * @param {string} [props.overlayColor='rgba(0, 0, 0, 0.4)'] - Background color of the overlay
 * @param {string} [props.backgroundColor='#fff'] - Background color of the modal
 * @param {string} [props.textColor='#2a2a2a'] - Text color inside the modal
 * @param {string} [props.borderRadius='12px'] - Border-radius for modal corners
 * @param {React.ReactNode} props.children - Content to render inside the modal
 * @returns {JSX.Element | null} The modal component
 */
const Modal = ({
  isOpen,                    // Whether modal is open
  onClose,                   // Function to call on close
  fadeDuration = 300,        // ms of fade animation
  fadeDelay = 0.5,           // Multiplier delay before content animates
  escapeClose = true,        // Can close modal with Escape key
  clickClose = true,         // Can close modal by clicking overlay
  showClose = true,          // Show close "×" button in corner
  closeText = '×',           // Text/icon inside close button
  useTransform = true,       // Whether modal should slide in (translateY)
  useBorderRadius = true,    // Whether modal should have rounded corners
  overlayColor = 'rgba(0, 0, 0, 0.4)', // Background of the overlay
  backgroundColor = '#fff',  // Background of modal itself
  textColor = '#2a2a2a',     // Default text color inside modal
  borderRadius = '12px',     // Default radius for modal box
  children                   // Content of the modal
}) => {
  const modalRef = useRef() // Ref to modal element to trap focus
  const [visible, setVisible] = useState(false) // Track if modal should be in DOM
  const [animating, setAnimating] = useState(false) // Track fade-in animation state

  // === 1. Handle modal visibility + fade animation ===
  useEffect(() => {
    if (isOpen) {
      setVisible(true)
      setTimeout(() => setAnimating(true), fadeDuration * fadeDelay)
    } else if (visible) {
      setAnimating(false)
      setTimeout(() => setVisible(false), fadeDuration)
    }
  }, [isOpen, fadeDuration, fadeDelay, visible])

  // === 2. Handle Escape + Tab key events for accessibility ===
  useEffect(() => {
    if (!visible || !modalRef.current) return

    const focusables = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    // Auto focus the first focusable element
    if (focusables.length > 0) focusables[0].focus()

    const handleKeyDown = (e) => {
      if (escapeClose && e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab') {
        handleFocusTrap(e, focusables)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [visible, escapeClose, onClose])

  /**
   * Prevent tabbing outside the modal (trap focus inside)
   * @param {KeyboardEvent} e - The keyboard event
   * @param {NodeList} focusables - List of focusable elements inside the modal
   */
  const handleFocusTrap = (e, focusables) => {
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    const isShiftTab = e.shiftKey && document.activeElement === first
    const isTabAtEnd = !e.shiftKey && document.activeElement === last

    if (isShiftTab || isTabAtEnd) {
      e.preventDefault()
      const target = isShiftTab ? last : first
      target.focus()
    }
  }

  // === 3. Don't render anything if modal is not visible ===
  if (!visible) return null

  // === 4. Render modal content ===
  return (
    <div
      className={`modal-overlay ${animating ? 'open' : ''}`}
      onClick={clickClose ? onClose : undefined}
      role="dialog"
      aria-modal="true"
      style={{
        backgroundColor: overlayColor,
        transition: `opacity ${fadeDuration}ms`,
        opacity: animating ? 1 : 0,
        pointerEvents: animating ? 'auto' : 'none'
      }}
    >
      <div
        className={`modal ${animating ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
        ref={modalRef}
        style={{
          transition: `opacity ${fadeDuration}ms, transform ${fadeDuration}ms`,
          opacity: animating ? 1 : 0,
          transform: useTransform ? (animating ? 'translateY(0)' : 'translateY(-20px)') : 'none',
          backgroundColor,
          color: textColor,
          borderRadius: useBorderRadius ? borderRadius : '0'
        }}
      >
        {/* Optional close button in top-right corner */}
        {showClose && (
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            {closeText}
          </button>
        )}

        {/* Modal content area */}
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

// Exporting the Modal component for use in other parts of the application
export default Modal
