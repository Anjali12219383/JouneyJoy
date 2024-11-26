import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Booking from './Components/Booking';
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./Components/Booking" element={<Booking />} />
        {/* Add other routes as needed */}
      </Routes>
      </Router>
    </>
  )
}

export default App;