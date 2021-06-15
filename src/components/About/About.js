import React from "react";
import { Icon, Header, Grid, Container, Menu,Divider } from 'semantic-ui-react'

import './About.css'
function About() {
    return(
        <>
        <Container text className="resumeSection" > 
<Header > <h2 className="aboutHeader" id="section2Content" > About Me</h2><hr/></Header>
<p>Hello! I'm Victor, a software engineer based in New York City, NY.</p>

<p>I enjoy creating applications and websites and love to implement my personal approach to design, innovation and creativity. My goal is to always push the boundaries beyond their capabilities and to create the future. In terms of Software Engineering, Scalability, Performance and Design are of the utmost importance to me. </p>

<p> I have a vast background in Innovation and building Projects from the ground-up. Shortly after graduating from General Assembly's Software Engineering Immersive, I began building a variety of websites ranging from Art &amp; Design Websites to Innovative Social Media Applications.</p>

<p>Here are a few technologies I've been working with recently:</p>

    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <div className="techUsedOne"> 
        <Icon name="react " color="yellow" size="big"/>   React &amp; JavaScript
        <br/>
        <br/>
        <Icon name="html5" color="yellow" size="big"/>   HTML &amp; CSS
        <br/>
        <br/>
        <Icon name="python " color="yellow" size="big"/>   Python
        <br/>
        <br/>
        <Icon name="object group " color="yellow" size="big"/>   Adobe/UX/UI
        <br/>
        <br/>
    </div>
      </Grid.Column>
      <Grid.Column>
      <div className="techUsedTwo"> 
        <Icon name="node js  " color="yellow" size="big"/>   Node.js
        <br/>
        <br/>
        <Icon name="diamond " color="yellow" size="big"/>   Django
        <br/>
        <br/>
        <Icon name="database" color="yellow" size="big"/>   PSQL &amp; Prisma 
        <br/>
        <br/>
        <Icon name="apple " color="yellow" size="big"/>   Swift
        <br/>
        <br/>
    </div>
      </Grid.Column>
    </Grid>

  


</Container>

        </>
    )
}

export default About