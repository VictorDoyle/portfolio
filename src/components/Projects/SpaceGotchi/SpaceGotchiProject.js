import React from "react";
import { Image, Header, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../Projects.css";
/* img */
import spaceGotchiMainImg from "./spacegotchiHero.jpeg"
function SpaceGotchiProject() {
    return(
        <>
                    <h1 style={{color: "white"}}> SpaceGotchi</h1>
            <Grid>

            <Grid.Column floated='left' width={4}>
            <Header style={{color: "white"}} className="projectTechnologyHeader"> Technologies:</Header>
            <Icon name="js" color="yellow" size="big"/>
            <Icon name="html5" color="yellow" size="big"/>
            <Icon name="css3" color="yellow" size="big"/>
            <Icon name="universal access" color="yellow" size="big"/>
            
            </Grid.Column>
            <Grid.Column width={12}>
            <p> A website built with HTML,CSS,JS and Jquery to create a narrative backed with audio and visuals built with FX Queues. The website features user prompts and story telling aspects.
            </p>
            <Link to={"/spacegotchi"}>
            <p>
               <Icon name="long arrow alternate right" size="big"/> See This Project In Detail</p>
            </Link>
            </Grid.Column>
      
        </Grid>

        <Grid>

        <Grid.Column width={16}>
            <Image src={spaceGotchiMainImg} size="large" style={{borderRadius: "5%"}} centered/>
        </Grid.Column>


        </Grid>

        <br/>
       
        </>
    )
}

export default SpaceGotchiProject