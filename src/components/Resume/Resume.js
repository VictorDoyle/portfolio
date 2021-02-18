import React, {useState} from 'react'
import { Menu, Header, Image, Segment, Container } from 'semantic-ui-react'
import './Resume.css'


function Resume () {

    const [activeItem, setActiveItem] = useState("home")
    const handleItemClick = (e, { name }) => setActiveItem( name )

    return(
        <>
  <Container text className="aboutSection" id="about"> 
    <Header as='h2'>Where I've Worked <hr/></Header>
  
    <Menu pointing secondary vertical>
        <Menu.Item
          name='Array Property Group'
          active={activeItem === 'Array Property Group'}
          onClick={handleItemClick}
        />


        <Menu.Item
          name='Freelance'
          active={activeItem === 'Freelance'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='aqua fashion store'
          active={activeItem === 'aqua fashion store'}
          onClick={handleItemClick}
        />
      </Menu>

 
    </Container>
        </>
    )
}

export default Resume


