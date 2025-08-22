import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
function App() {

  return (
  <div>
    <Navbar />
    <Routes>
      <Route path = '/home' element = {<Navbar />} />
    </Routes>
  </div>
  )
}

export default App
