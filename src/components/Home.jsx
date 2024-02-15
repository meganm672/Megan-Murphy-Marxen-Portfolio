import React from 'react';
import Connect from './Connect';
import ToolKit from './ToolKit';
import About from './About';
import Projects from './Projects';
import Divider from '@mui/material/Divider';
import Navigation from './Navigation';
import { FaAngleDown } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";
import { useRef, useState } from 'react'
import { Typography } from '@mui/material';
const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const homeSection = useRef()
    const aboutSection = useRef()
    const projectSection = useRef()
    const skillSection = useRef()
    const contactSection = useRef()
    const scrollTo = (pageSection) => { window.scrollTo({ top: pageSection.current.offsetTop, behavior: 'smooth', transition: '1s' }); }
    return (
        <div>
            {showMenu ? (
                <Navigation setShowMenu={setShowMenu} scrollTo={scrollTo} aboutSection={aboutSection} projectSection={projectSection} skillSection={skillSection} contactSection={contactSection} homeSection={homeSection} />
            ) : (
                <button
                    className="menuIcon"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowMenu(true);
                    }}
                >
                    <CgMenuCake className="cake" />
                </button>
            )}

            <div className="homeContainer" onClick={() => {
                setShowMenu(false)
            }}>
                <div className="nameLogo" ref={homeSection}>
                    <div className="name">
                        <div className="bigletter">M</div>
                        <Typography variant='h1'>egan</Typography>
                    </div>
                    <div className="name">
                        <div className="bigletter">M</div>
                        <Typography variant='h1'>urphy-</Typography>
                        <div className="bigletter">M</div>
                        <Typography variant='h1'>arxen</Typography>
                    </div>
                </div>
                <div>
                    <div className="homeDetails">
                        <div>
                            <i>Fullstack Web Developer</i>
                        </div>
                        <div className="downArrow" onClick={((e) => {
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