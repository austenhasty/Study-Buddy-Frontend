import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {



  render(){
    return(
      <Menu>
        <Menu.Item>
          <Link to="/profile">
            <Button>Home</Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">
            <Button>Topics</Button>
          </Link>
        </Menu.Item>

        <Menu.Item>

          <Button onClick={this.props.handleLogout}>Log Out</Button>

        </Menu.Item>
      </Menu>
    )
  }
}
