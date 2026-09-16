import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Broadband from './pages/Broadband'
import About from './pages/About'
import Contact from './pages/Contact'
import CableTV from './pages/CableTV'
import OTT from './pages/OTT'
import Offers from './pages/Offers'
import Enquiry from './pages/Enquiry'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <TopBar/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/broadband" element={<Broadband />} />
         <Route path="/cable-tv" element={<CableTV />} />
        <Route path="/ott" element={<OTT />} />
        <Route path="/offers" element={<Offers />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App