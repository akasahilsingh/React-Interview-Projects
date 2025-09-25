import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RandomColorGenrator from './Components/RandomColorGenrator'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RandomColorGenrator />
  </StrictMode>
)
