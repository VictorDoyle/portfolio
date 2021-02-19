import React, {useState} from 'react'
import { Icon, Header, Grid, Container } from 'semantic-ui-react'
import './About.css'


function About () {
    
  
    return(
        <>
      
<Container text className="resumeSection"> 
<Header as='h2'>About Me <hr/></Header>
<p>Hello! I'm Victor, a software engineer based in New York City, NY.</p>

<p>I enjoy creating applications and websites and love to implement my personal approach to design, innovation and creativity. My goal is to always push the boundaries beyond their capabilities and to create the future. In terms of Software Engineering, Scalability, Performance and Design are of the utmost importance to me. </p>

<p> I have a vast background in Innovation and building Projects from the ground-up. Shortly after graduating from General Assembly's Software Engineering Immersive, I began building a variety of websites ranging from Art &amp; Design Websites to Innovative Social Media Applications.</p>

<p>Here are a few technologies I've been working with recently:</p>
{/* FIXME: fix styling */}
    <div className="techUsedOne"> 
        <Icon name="">   React &amp; JavaScript </Icon>
        <Icon name="">   HTML &amp; CSS</Icon>
        <Icon name="">   Python</Icon>
    </div>

    <div className="techUsedTwo"> 
        <Icon name="">   Node.js</Icon>
        <Icon name="">   Django</Icon>
        <Icon name="">   MongoDB &amp; Prisma </Icon>
    </div>


   


</Container>
        </>
    )
}

export default About


   
