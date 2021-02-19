import React, {useState} from 'react'
import { Menu, Header, Image, Tab, Container } from 'semantic-ui-react'
import './Resume.css'


function Resume () {

    const [activeItem, setActiveItem] = useState("home")
    const handleItemClick = (e, { name }) => setActiveItem( name )

    /* panel content */

    const panes = [
      { menuItem : 'General Assembly', render: () => <Tab.Pane className="tabContent">
        
        Tab 1 Content
        
        </Tab.Pane> },


      { menuItem: 'Array Property Group', render: () => <Tab.Pane className="tabContent">
        
        Tab 2 Content
        
        </Tab.Pane> },


      { menuItem: 'E-Commerce', render: () => <Tab.Pane className="tabContent">
        
        Tab 3 Content
        
        </Tab.Pane> },

      { menuItem: 'Innovative Designs', render: () => <Tab.Pane className="tabContent">
              
      Tab 3 Content

      </Tab.Pane> },


    ]

    return(
        <>
  <Container text className="aboutSection" id="about"> 
    <Header> <h2 className="aboutHeader"> Technological Experience </h2> <hr/></Header>
      <Tab className="menuItemPanel" menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

 
    </Container>
        </>
    )
}

export default Resume



