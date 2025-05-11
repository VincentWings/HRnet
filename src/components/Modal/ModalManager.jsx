// Importing React and necessary hooks
import React, { useState, useContext, createContext } from 'react'
import Modal from './Modal'

// Create a React Context to provide modal functions and state
const ModalContext = createContext()

/**
 * ModalProvider Component
 * Provides modal context to the entire application.
 * - Wrap the app with <ModalProvider> to enable the use of modals anywhere.
 * - Manages the state and options of the modal.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The content that should have access to the modal context.
 * @returns {JSX.Element} The ModalProvider component with modal management.
 */
export const ModalProvider = ({ children }) => {
  // State to track if a modal is currently open
  const [isOpen, setIsOpen] = useState(false)

  // State to store the content to display inside the modal
  const [modalContent, setModalContent] = useState(null)

  // State to store custom options for the modal (animation, styles, etc.)
  const [modalOptions, setModalOptions] = useState({})

  /**
   * Opens a modal with the given content and optional configuration.
   * It first closes any existing modal before opening the new one.
   *
   * @param {React.ReactNode} content - The content to render inside the modal.
   * @param {Object} options - Modal component props like backgroundColor, fadeDuration, etc.
   */
  const openModal = (content, options = {}) => {
    // Close any open modal first
    setIsOpen(false)

    // Wait a tiny bit before opening a new one (avoids animation conflicts)
    setTimeout(() => {
      setModalContent(content)   // Set the content of the modal
      setModalOptions(options)   // Save modal customization options (like closeText or backgroundColor)
      setIsOpen(true)            // Display the modal
    }, 10)
  }

  /**
   * Closes the modal and resets its content and options.
   */
  const closeModal = () => {
    setIsOpen(false)     // Hide the modal
    setModalContent(null) // Clear the modal content
    setModalOptions({})   // Reset modal options
  }

  return (
    // Provide modal context (openModal, closeModal) to the children tree
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* Mounts the Modal component with all saved options and content */}
      <Modal isOpen={isOpen} onClose={closeModal} {...modalOptions}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}

/**
 * Custom hook to use modal functionality from anywhere in the app.
 * - Usage: const { openModal, closeModal } = useModal()
 *
 * @returns {Object} An object containing openModal and closeModal functions.
 */
export const useModal = () => useContext(ModalContext)
