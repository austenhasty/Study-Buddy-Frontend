import React, {Component} from 'react'
import { Card, Button } from 'semantic-ui-react'
// import ReactCardFlip from 'react-card-flip'


export default class BackCard extends Component {

  handleClick = ev => {
    this.props.onClick(ev)
  }

  render() {
    return (
      <Card className="back" onClick={this.handleClick}>

        <Card.Content>{this.props.defintion}</Card.Content>
        <Button >Back To The Front</Button>
      </Card>
    )
  }
}
