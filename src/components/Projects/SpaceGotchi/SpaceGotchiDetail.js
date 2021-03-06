import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SpaceGotchiDetail.css'
import { Container, Header, Image, Progress, Icon } from 'semantic-ui-react'
/* hero one  */
import spaceGotchiHero from './spacegotchiHero.jpeg'
import spaceAstros from './spacegotchiAstros.jpg'
import { useLightBody } from '../../../hooks';



function SpaceGotchi () {
    useLightBody();
    
    return (
        <> 
         <Link to={'/'}>
         <h4 className="menuHeaderDark"> 
         <Icon name="home" size="small"/>
         Home
         </h4> 
        </Link>
        
     
        <div className="worksContent">
       

        <div className="worksTitle">
        <h1 className="projectTitle">SpaceGotchi</h1>
        <p className="projectDescription"> A Reimagined Approach to Tamagotchi</p>
        </div>

        <Image className="spacegotchiHero" src={spaceGotchiHero}/>
        </div>

        {/* text content */}
    <Container text>
    <Header className="contentTitle" as='h2'>SpaceGotchi</Header>
        
        <p className="contentDescription"> 
        While attending a full time remote Software Engineering Immersive at General Assembly, I was tasked in coding an application that mimicked the functionality of a Tamagotchi.   
        
        </p>

        <p className="contentMiniDescription"> 
        
        The basic functionality required for this project was the following: The user must have a displayed character that has Hunger, Sleep and Boredom levels. Each of these levels can be decremented by user interaction. If these levels go beyond 10, the character dies of boredom, lack of sleep or hunger.
        I approached this project with the mindset that I wanted to break the boundaries of what one could describe a "Tamagotchi" as. I believe that the concept of Tamagotchi's could technically be implemented in an innovative and creative setting, in this case, an Astronaut stranded on another planet (all the while remaining faithful to the requirements and delivering the project in an appropriate form).
        </p>

            
            <Progress progress='percent' value={43.5} total={100} color='red' active >
            <Icon name="css3" /> CSS3
            </Progress>
            <Progress progress='percent' value={35.7} total={100} color='red' active >
            <Icon name="js"/> Javascript
            </Progress>
            <Progress progress='percent' value={20.8}  total={100} color='red' active >
            <Icon name="html5"/> HTML 5
            </Progress>



            <Header className="contentTitle secondaryContent" as='h2'>The Premise</Header>
        
        <p className="contentMiniDescription"> 
        The premise of the SpaceGotchi is to present a time based browser experience where an astronaut seeking interplanetary travel has found complications after having crashed on an unknown planet, in an unrecognizable planetary system. Accompanied by a mischievous and questionable AI, HAL42, the Astronaut will have to eat, sleep and find productivity on this newly discovered environment, or risk dying a lonesome death.

        </p>
        <Header className="contentTitle secondaryContent" as='h2'>Finding Creative Adaptation</Header>
        
        <p className="contentMiniDescription"> 
        Recreating a Tamagotchi could vary in its scale of creativity. I decided to approach this remake with a Spacial Theme and as such, I needed Spacial visuals or graphics to use and set the setting right. I utilized several open domain images released by NASA themselves and since they were copyright free, I decided to edit them with Adobe Photoshop in order to create a sequencial character narrative. 
        Below are the astronaut characters edited and designed with Adobe Photoshop. The characters show the progression from a simple basic Astronaut (far right), onto an Astronaut sight-seeing (far left). Editing the astronauts with a visible red hue was done to add to the narrative that the Astronaut has been on this planet for too long and has been exposed to radiation. If the user plays long enough, they will reach the Death Screen and be presented with the red Skeleton Astronaut.
        </p>

  </Container>
        <Image className="heroImage2" src={spaceAstros}/>
      
        <Container text>
    <Header className="linkEndTitle" as='h2' >View This Project</Header>
        <div className="blockLink">
        <a href="https://victordoyle.github.io/SpaceGame" target="_blank" rel="noreferrer">
        <Icon name="external alternate" size="big" className="contentLinks"/>
        </a>

       
        <a href="https://github.com/VictorDoyle/SpaceGame" target="_blank" rel="noreferrer">
        <Icon name="github" size="big" className="contentLinks"/>
        </a>
        
        
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
       


        </Container>

       
      
       

       
        </>
    )
}

export default SpaceGotchi