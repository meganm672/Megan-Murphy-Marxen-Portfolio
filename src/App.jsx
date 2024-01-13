import { useState } from 'react'
import Connect from './components/Connect';
import ToolKit from './components/ToolKit';
import About from './components/About';
import './App.css'
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  

  return (
    <>
      <About />
      <Projects />
      <ToolKit/>
      <Connect />
      <Footer />
    </>
  )
}

export default App
