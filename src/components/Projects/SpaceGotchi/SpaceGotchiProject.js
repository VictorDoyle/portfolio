import React from "react";
import { Image, Header, Grid, Container, Menu,Divider } from 'semantic-ui-react'

function SpaceGotchiProject() {
    return(
        <>
            <Grid>
            <Grid.Column floated='left' width={5}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
        </Grid>
        </>
    )
}

export default SpaceGotchiProject