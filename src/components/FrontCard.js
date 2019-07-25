import React, { Component } from 'react'
import {Card, Button} from 'semantic-ui-react'
// import ReactCardFlip from 'react-card-flip'

export default class FrontCard extends Component {

  handleClick = ev => {
    this.props.onClick(ev)
  }

  render(){

      return (
        <Card className="front" onClick={this.handleClick}>
          <Card.Content>{this.props.term}</Card.Content>
          <Button >Click Me for Answer</Button>
        </Card>
      )
  }
}
