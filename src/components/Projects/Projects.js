import React, {useState} from 'react'
import { Grid, Header, Progress, Rail, Image,Container, Icon } from 'semantic-ui-react'
import './Projects.css'
import '../../images/portfolioItem1.png'

function Projects () {
    
  
    return(
        <>
      
<Container text className="projectSection"> 
 <Header className="projectsHeader" as="h1">Some Of The Work I've Done<hr/> </Header>

 {/* project one  */}
    <Grid className="projectShow">
        <Grid.Column width={4}>
            <h3 className="projectsHeader"> Space-22 Audio Narrative Website </h3>
        <p> An Interactive Website made to heighten the overall experience of listening to Space-22's Albums. Utilizing Jquery and JavaScript animations, visuals were queued to each specific musical composition. </p>
        </Grid.Column>
        <Grid.Column width={6}>
        <Image rounded src='https://github.com/VictorDoyle/portfolio/blob/master/src/images/portfolioItem1.png?raw=true' />
        </Grid.Column>
        <Grid.Column width={6}>
            <p> Tech Stack:</p>
            <Progress progress='percent' value={41.7}  total={100} inverted color='blue' active >
            <Icon name="html5"/> HTML 5
            </Progress>
            <Progress progress='percent' value={37.5} total={100} inverted color='blue' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={20.8} total={100}    inverted color='blue' active >
            <Icon name="js"/> Javascript
            </Progress>
       
       
        
        <br/>
        <br/>
        <p> View This Project:</p>
        <a href="https://github.com/VictorDoyle/NarrativePage1" target="_blank"> 
        <Icon name="github" size="big"/>
        </a>


        <a href="https://victordoyle.github.io/NarrativePage1/" target="_blank">
        <Icon name="external alternate" size="big" />
        </a>
        </Grid.Column>
    </Grid>
 {/* project two  */}
 <Grid className="projectShow">
        <Grid.Column width={4}>
            <p> Tech Stack:</p>
            <Progress progress='percent' value={2.1}  total={100} inverted color='blue' active >
            <Icon name="html5"/> HTML 5
            </Progress>
            <Progress progress='percent' value={6.4} total={100} inverted color='blue' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={91.5} total={100}    inverted color='blue' active >
            <Icon name="js"/> Javascript
            </Progress>
       
       
        
        <br/>
        <br/>
        <p> View This Project:</p>
        <a href="https://github.com/VictorDoyle/Coeus-App" target="_blank"> 
        <Icon name="github" size="big"/>
        </a>


        <a href="https://the-coeus-app.herokuapp.com/" target="_blank">
        <Icon name="external alternate" size="big" />
        </a>
        </Grid.Column>
        <Grid.Column width={6}>
        <Image rounded src='https://m.media-amazon.com/images/I/91a-zJPR6UL._SS500_.jpg' />
        </Grid.Column>
        

        <Grid.Column width={6}>
            <h3 className="projectsHeader"> Coeus Social Media Platform </h3>
        <p>  Coeus is an interactive social media platform that allows a user to post photos, write text posts and interact with other users that they follow, all within a single page React web application. Each user's feed is populated with news articles, randomized knowledge and facts as well as mental health advice and recommendations. </p>
        </Grid.Column>
    </Grid>
 

{/* project three  */}


</Container>
        </>
    )
}

export default Projects


   

