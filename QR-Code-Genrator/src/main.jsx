import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QrCodeGenerator from './QrCodeGenerator.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCodeGenerator />
  </StrictMode>,
)
