import React from "react";
import { Image, Header, Grid, Container, Menu,Divider } from 'semantic-ui-react'
import "./Projects.css";
/* projects import*/
import FlixAlwaysProject from "./FlixAlways/FlixAlwaysProject";
import CoeusProject from "./Coeus/CoeusProject";
import Space22Project from "./Space22/Space22Project";
import FreelanceProject from "./FreelanceWebsites/FreelanceProject";
import SpaceGotchiProject from "./SpaceGotchi/SpaceGotchiProject";
function Projects() {
    return(
        <>
    <Container text className="projectSection" > 
         <Header > <h2 className="aboutHeader" id="section2Content" > Projects</h2><hr/></Header>
         <p>Below are some of the latest projects I've made: </p>
         <br></br>

         {/* SECTION: Projects import */}

         <FlixAlwaysProject />
         <CoeusProject />
         <Space22Project />
         <FreelanceProject/>
         <SpaceGotchiProject />

         {/* ENDSECTION */}
     

    </Container>
        </>
    )
}

export default Projects