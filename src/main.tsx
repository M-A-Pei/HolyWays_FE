import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
