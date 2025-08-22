import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Pricing from './Pricing'
import Gallery from './Gallery'
import Booking from './Booking'
import Questions from './Questions'
import Contact from './Contact'
import About from './About'
function App() {

  return (
  <div>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/services' element = {<Services />} />
      <Route path = '/pricing' element = {<Pricing />} />
      <Route path = '/gallery' element = {<Gallery />} />
      <Route path = '/booking' element = {<Booking />} />
      <Route path = '/questions' element = {<Questions />} />
      <Route path = '/contact' element = {<Contact />} />
      <Route path = '/about' element = {<About />} />
    </Routes>
  </div>
  )
}

export default App
