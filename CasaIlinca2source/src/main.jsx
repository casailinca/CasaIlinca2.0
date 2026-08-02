import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { LangProvider } from './context/LangContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </HelmetProvider>
  </StrictMode>,
)
