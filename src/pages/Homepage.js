/* components */
import React, { useEffect, useRef, useState } from 'react'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Hero from '../components/Hero/Hero'
import { Icon, Menu, Container, Header,   } from 'semantic-ui-react'
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/Projects'
/* styling */
import "../components/Navbar/Navbar.css"
import About from '../components/About/About'
import { useBaseTheme } from '../hooks'

function Home () {
    useBaseTheme();
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
        <div ref={contactSectionRef}>

        <Container text className="resumeSection" > 
        <Header > <h2 className="aboutHeader" id="section2Content" > Contact</h2><hr/></Header>
        <p>I'm seeking opportunities to work as a Software Engineer and build my experience further.</p>

        <p>I want to bring my high energy and passion of coding to the table as well as my diverse experience. </p>

        <p>I'm looking forward to solving more problems and finding innovative ways to build bigger and better applications.</p>

        <p> Below Is My Most Recent Resume And Some Contact Info:</p>

        <p>
        <a href="https://drive.google.com/file/d/1kWL_8F19Pd2bLhBnS8kPAW6CvEsXUrDO/view?usp=sharing" className="resumeLink" target="_blank"> My Resume (pdf)</a>
        </p>

        <p>
        <a href="https://www.linkedin.com/in/victor-doyle/" className="resumeLink" target="_blank"> My LinkedIn</a>
        </p>

        <p>
        <a href="mailto:victor-doyle@outlook.com" className="resumeLink" target="_blank"> Email Me</a>
        </p>
  
        </Container>

      
        </div>
        </>
    )
}

export default Home