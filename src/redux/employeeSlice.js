/**
 * Redux Slice: Employee Management
 * Manages the state of employee data in the application.
 * - Allows adding employees and loading fake employees.
 * - Prevents adding duplicate employees by first and last name.
 */
import { createSlice } from '@reduxjs/toolkit'
import fakeEmployees from '../data/fake_employees_100.json'

// Initial state for the employee slice
const initialState = {
  employees: [], // Array to store employee data
  fakeLoaded: false // Prevents loading fake employees multiple times
}

// Create the employee slice with reducers
const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    /**
     * Adds a new employee to the state.
     * Prevents adding duplicate employees by first and last name.
     * 
     * @param {Object} state - The current state of the employee slice.
     * @param {Object} action - The dispatched action containing employee data.
     * @param {string} action.payload.firstName - First name of the employee.
     * @param {string} action.payload.lastName - Last name of the employee.
     */
    addEmployee: (state, action) => {
      const { firstName, lastName } = action.payload

      // Check for duplicate employees by first and last name (case-insensitive)
      const exists = state.employees.some(
        (employee) => 
          employee.firstName.toLowerCase() === firstName.toLowerCase() &&
          employee.lastName.toLowerCase() === lastName.toLowerCase()
      )

      // Add employee if not already existing
      if (!exists) {
        state.employees.push(action.payload)
      } else {
        console.warn("Employee already exists:", firstName, lastName)
      }
    },

    /**
     * Loads a predefined list of fake employees.
     * Only loads the fake employees once to prevent duplication.
     * 
     * @param {Object} state - The current state of the employee slice.
     */
    loadFakeEmployees: (state) => {
      // Only load fake employees if they haven't been loaded yet
      if (!state.fakeLoaded) {
        state.employees = [...state.employees, ...fakeEmployees]
        state.fakeLoaded = true // Mark fake employees as loaded
      }
    }
  }
})

// Exporting actions and the reducer of the employee slice
export const { addEmployee, loadFakeEmployees } = employeeSlice.actions
export default employeeSlice.reducer