import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
/* components */
import Navbar from '../components/Navbar/Navbar'
import SocialMedia from '../components/SocialMedia/SocialMedia'

import About from '../components/About/About'

function AboutPage () {
    return(
        <>
        <Navbar/>
        <SocialMedia />
        <About />
    
        </>
    )
}

export default AboutPage