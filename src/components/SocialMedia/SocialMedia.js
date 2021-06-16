import React from 'react'
import { List, Divider } from 'semantic-ui-react'
import './SocialMedia.css'



const SocialMedia = () => (
  <>
  {/* left sidebar social media icon list */}
  <List className="socialIconsContainer">
    <List.Item  className="socialMediaIcons">
    <a href="https://www.linkedin.com/in/victor-doyle/" target="_blank">
      <List.Icon name='linkedin' size="big"/>
        </a>
    </List.Item>
    <List.Item  className="socialMediaIcons">
     <a href="mailto:victor-doyle@outlook.com">
      <List.Icon name='mail' size="big" />
        </a>
    </List.Item>

    <List.Item className="socialMediaIcons">
     <a href="https://github.com/VictorDoyle" target="_blank">
      <List.Icon name='github square' size="big"/>
        </a>
    </List.Item>
    <div className="verticalLineLeft"></div>
  </List>

  {/* right side bar with email address */}

  <List className="socialEmailContainer">
    <List.Item  className="socialEmailText">
    <a href="https://www.linkedin.com/in/victor-doyle/">
      <p> victor-doyle@outlook.com </p>
        </a>
    </List.Item>
    <div className="verticalLineRight"></div>
  </List>
  </>
)

export default SocialMedia