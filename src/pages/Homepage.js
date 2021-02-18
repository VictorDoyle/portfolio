import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
/* components */
import Navbar from '../components/Navbar/Navbar'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/Projects'

function Home () {
    return(
        <>
        <Navbar/>
        <SocialMedia />
        <Hero />
        <About />
        <Resume />
        
        <Projects />
        </>
    )
}

export default Home