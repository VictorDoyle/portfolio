import React from 'react'
import { List } from 'semantic-ui-react'

const SocialMedia = () => (
  <List>
    <List.Item>
    <a href="https://www.linkedin.com/in/victor-doyle/">
      <List.Icon name='linkedin' size="big"/>
        </a>
    </List.Item>
    <List.Item>
     <a href="mailto:victor-doyle@outlook.com">
      <List.Icon name='mail' size="big" />
        </a>
    </List.Item>

    <List.Item>
     <a href="https://github.com/VictorDoyle">
      <List.Icon name='github square' size="big"/>
        </a>
    </List.Item>

    <List.Item>
        <a href="https://codepen.io/victordoyle/">
      <List.Icon name='codepen' size="big"/>
        </a>
    </List.Item>
  </List>
)

export default SocialMedia