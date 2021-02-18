import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
/* components */
import Navbar from '../components/Navbar/Navbar'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'


function Home () {
    return(
        <>
        <Navbar/>
        <Hero />
        <About />
        <SocialMedia />
        </>
    )
}

export default Home