import React from "react";
import { Image, Header, Grid, Container, Icon,Divider } from 'semantic-ui-react';
/* app preview */
import movieCard from "./movie6.jpg";
import flixAlwaysHome from "./flixalways-moviedetail.jpg"
import { Link } from 'react-router-dom'
function FlixAlwaysProject() {
    return(
        <>
        <h1 style={{color: "white"}}> FlixAlways</h1>
            <Grid>

            <Grid.Column floated='left' width={4}>
            <Header style={{color: "white"}}> Technologies:</Header>
            <Icon name="react" color="yellow" size="big"/>
            <Icon name="js" color="yellow" size="big"/>
            <Icon name="html5" color="yellow" size="big"/>
            <Icon name="css3" color="yellow" size="big"/>
            <Icon name="node" color="yellow" size="big"/>
            </Grid.Column>
            <Grid.Column width={12}>
            <p> The aim of FlixAlways is to provide Users with better movie recommendations based on filtered lists. FlixAlways is a Full Stack Application built with a React.Js frontend and a Node.Js backend, with the addition of Bootstrap and Css for Styling, Framer Motion for Animations, GraphQL, PostgreSQL, Prisma ORM for Data relations and Database.</p>
            <Link to={"/flixalways"}>
            <p>
               <Icon name="long arrow alternate right" size="big"/>See This Project In Detail</p>
            </Link>
            </Grid.Column>
      
        </Grid>

        <Grid>

        <Grid.Column width={16}>
            <Image src={flixAlwaysHome} size="large" style={{borderRadius: "5%"}} centered/>
        </Grid.Column>


        </Grid>
        <br/>
        <hr/>

        </>
    )
}

export default FlixAlwaysProject