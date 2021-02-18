import React, { useEffect, useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'


function Navbar () {
    const [activeItem, setActiveItem] = useState("home")

    const handleItemClick = (e, { name }) => setActiveItem( name )

    return(
        <>

    <Menu stackable secondary size="huge">
        <Menu.Item position="left">
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          
          name='features'
          active={activeItem === 'features'}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
         
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={handleItemClick}
        >
          Contact
        </Menu.Item>
    </Menu>




        </>
    )
}

export default Navbar