import React from "react";
import { Image, Header, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
/* img */
import coeusHome from "./coeushome.jpg"
function CoeusProject() {
    return(
        <>
            <h1 style={{color: "white"}}> Coeus Social Media</h1>
            <Grid>

            <Grid.Column floated='left' width={4}>
            <Header style={{color: "white"}} className="projectTechnologyHeader"> Technologies:</Header>
            <Icon name="react" color="yellow" size="big"/>
            <Icon name="js" color="yellow" size="big"/>
            <Icon name="html5" color="yellow" size="big"/>
            <Icon name="css3" color="yellow" size="big"/>
            <Icon name="node" color="yellow" size="big"/>
            </Grid.Column>
            <Grid.Column width={12}>
            <p> Coeus is an interactive social media platform that allows a user to post photos, comment, follow and like other users' posts. </p>
            <Link to={"/coeus"}>
            <p>
               <Icon name="long arrow alternate right" size="big"/> See This Project In Detail</p>
            </Link>
            </Grid.Column>
      
        </Grid>

        <Grid>

        <Grid.Column width={16}>
            <Image src={coeusHome} size="large" style={{borderRadius: "5%"}} centered/>
        </Grid.Column>


        </Grid>
        <br/>
        <hr/>

        </>
    )
}

export default CoeusProject