import React, {useState} from 'react'
import { Grid, Header, Segment, Rail, Image,Container, Icon } from 'semantic-ui-react'
import './Projects.css'

function Projects () {
    
  
    return(
        <>
      
<Container text className="projectSection"> 
 <Header as='h2'>Some Of The Work I've Done<hr/> </Header>

 {/* project one  */}
    <Grid className="projectShow">
        <Grid.Column width={4}>
            <h3> Space-22 Audio Narrative Website </h3>
        <p> An interactive website made with</p>
        </Grid.Column>
        <Grid.Column width={9}>
        <Image src='https://m.media-amazon.com/images/I/91a-zJPR6UL._SS500_.jpg' />
        </Grid.Column>
        <Grid.Column width={3}>
            <p> Tech Stack:</p>
        <Icon name="html5"/>
        <Icon name="css3" />
        <Icon name="js"/>
        <br/>
        <br/>
        <p> View This Project:</p>
        <Icon name="github"/>
        <Icon name="external alternate" />
        </Grid.Column>
    </Grid>
 {/* project two  */}
 <Grid className="projectShow"> 
        <Grid.Column width={4}>
            <h3> Space-22 Audio Narrative Website </h3>
        <p> An interactive website made with</p>
        </Grid.Column>
        <Grid.Column width={9}>
        <Image src='https://m.media-amazon.com/images/I/91a-zJPR6UL._SS500_.jpg' />
        </Grid.Column>
        <Grid.Column width={3}>
            <p> Tech Stack:</p>
        <Icon name="html5"/>
        <Icon name="css3" />
        <Icon name="js"/>
        <br/>
        <br/>
        <p> View This Project:</p>
        <Icon name="github"/>
        <Icon name="external alternate" />
        </Grid.Column>
    </Grid>

{/* project three  */}
<Grid className="projectShow">
        <Grid.Column width={4}>
            <h3> Space-22 Audio Narrative Website </h3>
        <p> An interactive website made with</p>
        </Grid.Column>
        <Grid.Column width={9}>
        <Image src='https://m.media-amazon.com/images/I/91a-zJPR6UL._SS500_.jpg' />
        </Grid.Column>
        <Grid.Column width={3}>
            <p> Tech Stack:</p>
        <Icon name="html5"/>
        <Icon name="css3" />
        <Icon name="js"/>
        <br/>
        <br/>
        <p> View This Project:</p>
        <Icon name="github"/>
        <Icon name="external alternate" />
        </Grid.Column>
    </Grid>
    

</Container>
        </>
    )
}

export default Projects


   

