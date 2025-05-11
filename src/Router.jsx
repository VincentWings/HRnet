/**
 * Application Router Component
 * Manages the routing of the application using React Router.
 * Includes the Navbar, Footer, and main routes for CreateEmployee and EmployeeList pages.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

/**
 * AppRouter Component
 * Manages the main routing of the application, including:
 * - A Navbar displayed at the top.
 * - A Footer displayed at the bottom.
 * - Routes for CreateEmployee ("/") and EmployeeList ("/employees").
 *
 * @returns {JSX.Element} The main application router with Navbar, Footer, and Routes.
 */
function AppRouter() {
  return (
    <Router basename="/">
      {/* Navbar component displayed at the top of the page */}
      <Navbar />

      {/* Main application routes */}
      <Routes>
        {/* Route for creating a new employee (home page) */}
        <Route path="/" element={<CreateEmployee />} />
        {/* Route for displaying the list of employees */}
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>

      {/* Footer component displayed at the bottom of the page */}
      <Footer />
    </Router>
  )
}

export default AppRouter