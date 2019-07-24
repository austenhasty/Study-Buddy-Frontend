import React, { Component } from 'react'
import {Card, Button} from 'semantic-ui-react'

export default class FrontCard extends Component {

  render(){

      return (
        <Card className="front" isFlipped={this.props.isFlipped}>
          <Card.Content>{this.props.term}</Card.Content>
          <Button onClick={this.props.handleClick}>Click Me for Answer</Button>
        </Card>
      )
  }
}
