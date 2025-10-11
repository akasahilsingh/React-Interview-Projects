import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LightDarkMode from './LightDarkMode'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LightDarkMode />
  </StrictMode>,
)
