import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BookingPage from './pages/bokningsSida'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingPage />
  </StrictMode>,
)
