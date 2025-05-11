/**
 * Main entry point of the React application.
 * Renders the root component (AppRouter) within the React DOM.
 * - Utilizes Redux for state management (Provider with store).
 * - Integrates ModalProvider for managing modal states globally.
 * - Applies global CSS styles (main.css).
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router'
import { ModalProvider } from './components/Modal/ModalManager'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/main.css'

// Renders the React application at the root DOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Redux Provider: Makes the Redux store available to the entire app */}
    <Provider store={store}>
      {/* ModalProvider: Manages the global state of modals */}
      <ModalProvider>
        {/* Main Application Router with routes and layout */}
        <AppRouter />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
)