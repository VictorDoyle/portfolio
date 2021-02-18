import React, { useEffect, useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


function Navbar () {
    const [activeItem, setActiveItem] = useState("home")

    const handleItemClick = (e, { name }) => setActiveItem( name )

    return(
        <>

    <Menu stackable secondary size="huge">

      <Link to={'/'}> 
        <Menu.Item position="left">
          <Icon name="grav" size="huge"/>
        </Menu.Item>
        </Link>

        <Menu.Menu position='right'> 
        <Link to={'/about'}> 
        <Menu.Item
        
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>
        </Link>

        
        <Link to={'/resume'}> 
        <Menu.Item
        
          name='resume'
          active={activeItem === 'resume'}
          onClick={handleItemClick}
        >
          Resume
        </Menu.Item>
        </Link>



        <Link to={'/projects'}> 
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={handleItemClick}
        >
          Projects
        </Menu.Item>
        </Link>

        <Link to={'/contact'}> 
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={handleItemClick}
        >
          Contact
        </Menu.Item>
        </Link>
        </Menu.Menu>

    </Menu>




        </>
    )
}

export default Navbar