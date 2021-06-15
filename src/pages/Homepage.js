/* components */
import React, { useEffect, useRef, useState } from 'react'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Hero from '../components/Hero/Hero'
import { Icon, Menu  } from 'semantic-ui-react'
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/Projects'
/* styling */
import "../components/Navbar/Navbar.css"
import About from '../components/About/About'

function Home () {
    const aboutSectionRef = useRef(null);
    const resumeSectionRef = useRef(null);
    const projectSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    const scrollToAboutSection = () => aboutSectionRef.current.scrollIntoView()
    const scrollToResumeSection = () => resumeSectionRef.current.scrollIntoView()
    const scrollToProjectSection = () => projectSectionRef.current.scrollIntoView()
    const scrollToContactSection = () => contactSectionRef.current.scrollIntoView()

    return(
        <>
        {/* Navbar with ref */}
        <>
    <Menu stackable secondary size="huge" className="navBar">
        <Menu.Item position="left">
        <Icon name="grav" size="huge" className="navBarItem"/>
        </Menu.Item>
        <Menu.Menu position='right'> 
        <Menu.Item
        className="navBarItem"
        name='about'
        onClick={scrollToAboutSection}
        >
        About
        </Menu.Item>

        <Menu.Item
        className="navBarItem"
        name='resume'
        onClick={scrollToResumeSection}
        >
        Resume
        </Menu.Item>
     

        <Menu.Item
        className="navBarItem"
        name='projects'
        onClick={scrollToProjectSection}
        >
        Projects
        </Menu.Item>

        <Menu.Item
        className="navBarItem"
        name='contact'
        onClick={scrollToContactSection}
        >
        Contact
        </Menu.Item>
        </Menu.Menu>
    </Menu>
    </>

    {/* homepage content */}
        <SocialMedia />
        <Hero />

        {/* SECTION: ABOUT CONTENT */}
        <div ref={aboutSectionRef}>
            <About/>
        </div>
        {/* ENDSECTION */}

        <div ref={resumeSectionRef}>
            <Resume />
        </div>
        
        {/* SECTION: Projects */}
        <div ref={projectSectionRef}>
            <Projects/>
        </div>

        {/* ENDSECTION */}
        </>
    )
}

export default Home