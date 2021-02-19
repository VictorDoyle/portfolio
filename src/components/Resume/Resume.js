import React, {useState} from 'react'
import { Menu, Header, Image, Tab, Container } from 'semantic-ui-react'
import './Resume.css'


function Resume () {

    const [activeItem, setActiveItem] = useState("home")
    const handleItemClick = (e, { name }) => setActiveItem( name )

    /* panel content */

    const panes = [
      { menuItem : {content: 'General Assembly'}, render: () => <Tab.Pane className="tabContent">
        
        <h2> Software Engineering Fellow </h2>
        <ul>
          <li>Three-month, Full-Time, remote software engineering immersive program working in Javascript, Python, HTML &amp; CSS. </li>
          <li>Learning and Building with a variety of different Languages and Frameworks such as JavaScript, TypeScript, Python, React and Prisma.</li>
          <li>Delivering quality code, building creative applications and websites as well as thoroughly debugging and testing applications for scalability.</li>
        </ul>
        
        </Tab.Pane> },


      { menuItem: 'Array Property Group', render: () => <Tab.Pane className="tabContent">
        
        <h2> Head of Search Engine Optimization </h2>
        <ul>
          <li> Built an efficient website from the ground up and coordinated with a team of Designers to implement a visually impressive product using technologies such as Wordpress, Javascript, Jquery &amp; CSS. </li>
          <li> Consistently delivered detailed briefings regarding Google Console, Adsense, Ahrefs and SERPs and built a network of contacts for backlink and guest posting.</li>
          <li> Thorough Search Engine Keyword Optimization with tools such as SEMRush, Ahrefs, Google Ads, Google Trends and an in-depth socioeconomic analysis of the NYC Real Estate Market.</li>
        </ul>
        
        </Tab.Pane> },


      { menuItem: 'E-Commerce', render: () => <Tab.Pane className="tabContent">
        
        <h2> Multiple Online Stores </h2>
        <ul>
          <li> Built multiple efficient websites with the Shopify Platform and customized themes with the Liquid language. Implemented multiple plugins that helped boost ROAS, Conversions and Overall User Interaction. </li>
          <li> Utilized the power of Color Theory and UX/UI Design to boost sales and promote products. Additionally utilized tools such as Adobe Photoshop, Logic Pro X and the Adobe Suite to handcraft advertisements. </li>
          <li> Built over a hundred Ad Campaigns on the Facebook Business Platform, using Technologies such as Google Trends and Instagram to correctly predict Product Consumption Patterns.</li>
        </ul>
        
        </Tab.Pane> },

      { menuItem: 'Innovative Designs', render: () => <Tab.Pane className="tabContent">
              
              <h2> Innovative Research &amp; Tech Products </h2>
        <ul>
          <li> Co-Founded and built an MVP Stage iOS Application to deliver to Investors in under 30 days. The application was a modern solution to the modern problem of dormant car use and how users could utilize their cars to make additional income all the while promoting a lesser carbon footprint.    </li>
          <li> Founded a Publishing House and Journal in London to promote innovative thought, research and to help promote individuals who may not have had the means to make their research known. Designed a full CRUD functionality website with a unique visual approach to Academic Journal submission.</li>
          <li> Built multiple websites with HTML, CSS, JQuery and React in order to bring a re-imagined approach to utilizing the power of Code to synthesize the power of Visuals, Music and Entertainment. </li>
        </ul>

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



