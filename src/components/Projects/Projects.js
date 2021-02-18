import React, {useState} from 'react'
import { Grid, Header, Segment, Divider, Container } from 'semantic-ui-react'
import './Projects.css'


function Projects () {
    
  
    return(
        <>
      
    <Container text className="projectSection"> 
    <Header as='h3'>Some Of The Work I've Done</Header>
    
    
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <p>
          hello
        </p>
        <p>
          hello
        </p>
        <p>
          hello
        </p>
        <p>
          hello
        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
          hello
        </p>
        <p>
          hello
        </p>
        <p>
          hello
        </p>
        <p>
          hello
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>



    </Container>
        </>
    )
}

export default Projects


   
