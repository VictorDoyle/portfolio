/* eslint-disable max-len */
import React from 'react'
import { Container, Header, Button, Icon, Label } from 'semantic-ui-react'

const Hero = () => (
  <Container text>
    <Header as='h3'> Hey, my name is </Header>
    <Header as='h1'> Victor Doyle. </Header>
    <Header as='h1'> I Build Full Stack Applications. </Header>
    <p>
    I'm a software engineer based in New York City, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
    </p>
    <a href="mailto:victor-doyle@outlook.com">
    <Button as='div' labelPosition='right'>
      <Button color='blue'>
        <Icon name='mail' />
        Email
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        Get In Touch
      </Label>
    </Button>
    </a>
   
  </Container>
)

export default Hero