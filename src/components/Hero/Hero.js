/* eslint-disable max-len */
import React from 'react'
import { Container, Header, Button, Icon, Label } from 'semantic-ui-react'
import './Hero.css'



const Hero = () => (
  <Container text className="heroSection">
    <Header className="heroText1"> Hey, my name is </Header>
    <Header className="heroText2"> Victor Doyle. </Header>
    <Header className="heroText3"> I Build Full Stack Applications. </Header>
    <p className="heroText1">
    I'm a software engineer based in New York City, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
    </p>
    <a href="mailto:victor-doyle@outlook.com">
    <Button color='blue'>
        Get In Touch  
    </Button>
    </a>
   
  </Container>
)

export default Hero