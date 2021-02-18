import React from 'react'
import { Divider, Grid, Image, Segment, Container } from 'semantic-ui-react'



function About () {
    return(
        <>
        <Container text> 
        <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
            {/* headshot photo here */}
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        
      </Grid.Column>
      <Grid.Column>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
  </Container>
        </>
    )
}

export default About


