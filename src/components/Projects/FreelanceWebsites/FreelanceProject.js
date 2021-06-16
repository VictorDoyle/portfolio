import React from "react";
import { Image, Header, Grid, Icon, Menu,Divider } from 'semantic-ui-react'
import freelanceWebImg1 from "./luxuryNYCRealEstateWorkMain.jpg"
import { Link } from 'react-router-dom'
function FreelanceProject() {
    return(
        <>
           <h1 style={{color: "white"}}> Freelance Websites</h1>
            <Grid>

            <Grid.Column floated='left' width={4}>
            <Header style={{color: "white"}} className="projectTechnologyHeader"> Technologies:</Header>
            <Icon name="react" color="yellow" size="big"/>
            <Icon name="database" color="yellow" size="big"/>
            <Icon name="js" color="yellow" size="big"/>
            <Icon name="html5" color="yellow" size="big"/>
            <Icon name="css3" color="yellow" size="big"/>
            <Icon name="universal access" color="yellow" size="big"/>
            
            </Grid.Column>
            <Grid.Column width={12}>
            <p> Built over a dozen personalized themes for Shopify Stores in the Liquid Template Language, Real Estate Websites in HTML,CSS,JS,Jquery and Custom Websites in React.Js. 
            </p>
            <Link to={"/freelance-work"}>
            <p>
               <Icon name="long arrow alternate right" size="big"/> See Examples of Freelance Work</p>
            </Link>
            </Grid.Column>
      
        </Grid>

        <Grid>

        <Grid.Column width={16}>
            <Image src={freelanceWebImg1} size="large" style={{borderRadius: "5%"}} centered/>
        </Grid.Column>


        </Grid>
        <br/>
        <hr/>
  
        </>
    )
}

export default FreelanceProject