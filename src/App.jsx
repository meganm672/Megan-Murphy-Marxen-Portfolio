import { useState } from 'react'
import Connect from './components/Connect';
import ToolKit from './components/ToolKit';
import About from './components/About';
import './App.css'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/toolkit' element={<ToolKit />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
