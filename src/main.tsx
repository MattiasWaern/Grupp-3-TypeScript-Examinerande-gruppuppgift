import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import BookingPage from './pages/BookingPage'
import BookingConfirmation from './pages/BookingConfirmation.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <BookingConfirmation/>
  </StrictMode>,
)
