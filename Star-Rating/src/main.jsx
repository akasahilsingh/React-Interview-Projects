import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarRating from './assets/Component/starRating'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating />
  </StrictMode>,
)
