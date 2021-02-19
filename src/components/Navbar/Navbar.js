import React, { useEffect, useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

function Navbar () {
    const [activeItem, setActiveItem] = useState("home")

    const handleItemClick = (e, { name }) => setActiveItem( name )

    return(
        <>

    <Menu stackable secondary size="huge" className="navBar">

      <Link to={'/'}  className="navBarLink"> 
        <Menu.Item position="left">
          <Icon name="grav" size="huge" className="navBarItem"/>
        </Menu.Item>
        </Link>

        <Menu.Menu position='right'> 
        <Link to={'/about'}> 
        <Menu.Item
          className="navBarItem"
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>
        </Link>

        
        <Link to={'/resume'} > 
        <Menu.Item
          
          className="navBarItem"
          name='resume'
          active={activeItem === 'resume'}
          onClick={handleItemClick}
        >
          Resume
        </Menu.Item>
        </Link>



        <Link to={'/projects'} > 
        <Menu.Item
          className="navBarItem"
          name='projects'
          active={activeItem === 'projects'}
          onClick={handleItemClick}
        >
          Projects
        </Menu.Item>
        </Link>

        <Link to={'/contact'}> 
        <Menu.Item
          className="navBarItem"
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