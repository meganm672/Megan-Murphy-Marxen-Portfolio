import React from 'react';
import Connect from './Connect';
import ToolKit from './ToolKit';
import About from './About';
import Projects from './Projects';
import Divider from '@mui/material/Divider';
import Navbar from './Navbar';
import { FaAngleDown } from "react-icons/fa";
import {useRef} from 'react'
const Home = () => {
    const homeSection = useRef()
    const aboutSection = useRef()
    const projectSection = useRef()
    const skillSection = useRef()
    const contactSection = useRef()
    const scrollTo = (pageSection) => { window.scrollTo({ top: pageSection.current.offsetTop, behavior: 'smooth', transition: '1s' });}
    return (
        <div>
            <Navbar scrollTo={scrollTo} aboutSection={aboutSection} projectSection={projectSection} skillSection={skillSection} contactSection={contactSection} homeSection={homeSection}/>
        <div className="homeContainer">
            <div className="nameLogo" ref={homeSection}>
              <div className="name">
                <div className="bigletter">M</div>
                <h1>egan</h1>
              </div>
              <div className="name">
                <div className="bigletter">M</div>
                <h1>urphy-</h1>
              </div>
              <div className="name">
                <div className="bigletter">M</div>
                <h1>arxen</h1>
              </div>
            </div>
            <div>
              <div className="homeDetails">
                <div>
                  <i>Fullstack Web Developer</i>
                </div>
                <div className="downArrow" onClick={((e)=>{
                  e.preventDefault()
                  scrollTo(aboutSection)
                })}>
                  <FaAngleDown />
                </div>
              </div>
              </div>
            </div>
            <div className="about" ref={aboutSection}>
          <About />
        </div>
           <Divider />
        <div className="projects" ref={projectSection}>
          <Projects />
        </div>
            <Divider />
            <div className="toolkit" ref={skillSection}>
         <ToolKit />
        </div>
            <Divider />
            <div className="connect" ref={contactSection}>
          <Connect />
        </div>


        </div>
     
    );
};

export default Home;