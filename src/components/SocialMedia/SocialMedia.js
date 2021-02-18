import React from 'react'
import { List, Divider } from 'semantic-ui-react'
import './SocialMedia.css'



const SocialMedia = () => (
  
  <List className="socialIconsContainer">
    <List.Item  className="socialMediaIcons">
    <a href="https://www.linkedin.com/in/victor-doyle/">
      <List.Icon name='linkedin' size="big"/>
        </a>
    </List.Item>
    <List.Item  className="socialMediaIcons">
     <a href="mailto:victor-doyle@outlook.com">
      <List.Icon name='mail' size="big" />
        </a>
    </List.Item>

    <List.Item className="socialMediaIcons">
     <a href="https://github.com/VictorDoyle">
      <List.Icon name='github square' size="big"/>
        </a>
    </List.Item>
    <List.Item className="socialMediaIcons">
        <a href="https://codepen.io/victordoyle/">
      <List.Icon name='codepen' size="big"/>
        </a>
    </List.Item>
    <div className="verticalLine"></div>
  </List>
)

export default SocialMedia