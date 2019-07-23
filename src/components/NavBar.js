import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'


export default class NavBar extends Component {

  render(){
    return(
      <Menu>
        <Menu.Item>
          <Button>Home</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Topics</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Notecards</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Log Out</Button>
        </Menu.Item>
      </Menu>
    )
  }
}
