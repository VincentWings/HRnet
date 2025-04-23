import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router'
import { ModalProvider } from './components/Modal/ModalManager'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <AppRouter />
    </ModalProvider>
  </React.StrictMode>
)