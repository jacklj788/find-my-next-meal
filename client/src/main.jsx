import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css';
import App from './App.jsx'
import { LoaderProvider } from './contexts/LoaderContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
    
  </StrictMode>,
)
