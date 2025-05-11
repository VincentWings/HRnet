/**
 * Redux Store Configuration
 * Manages the global state of the application using Redux Toolkit.
 * - Includes a single reducer (employeeReducer) for employee data management.
 */
import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './employeeSlice'

/**
 * Creates and configures the Redux store.
 * - The store uses a single reducer (employeeReducer) to manage employee state.
 */
const store = configureStore({
  reducer: {
    // Employee slice reducer to manage employee-related state
    employee: employeeReducer
  }
})

// Exports the configured Redux store for use in the application
export default store