import React, {Component} from 'react'
import { Card, Button } from 'semantic-ui-react'


export default class BackCard extends Component {


  render() {
    return (
      <Card className="back" isFlipped={this.props.isFlipped}>

        <Card.Content>{this.props.defintion}</Card.Content>
        <Button onClick={this.props.handleClick}>Click Me for Answer</Button>
      </Card>
    )
  }
}
