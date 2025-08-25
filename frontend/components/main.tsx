import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '/css/App.css'
import '/css/Navbar.css'
import '/css/Home.css'
import '/css/Pricing.css'
import '/css/Gallery.css'
import '/css/Booking.css'
import '/css/Questions.css'
import '/css/Contact.css'
import '/css/About.css'
import '/css/Services.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
