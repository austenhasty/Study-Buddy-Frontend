import React, {Component} from 'react'
import { Card, Button } from 'semantic-ui-react'



export default class BackCard extends Component {

  handleClick = ev => {
    this.props.onClick(ev)
  }

  render() {
    return (

        <Card id="back" >

          <Card.Content onClick={this.handleClick}>{this.props.defintion}</Card.Content>
          <Card.Content extra>
            <Button onClick={this.handleClick}>Back To The Front</Button>
          </Card.Content>
        </Card>
    )
  }
}
