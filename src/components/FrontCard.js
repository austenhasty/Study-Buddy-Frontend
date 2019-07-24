import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'

export default class FrontCard extends Component {

  render(){
    return(
      <Card className="front" onClick={this.props.handleClick}>
        This is the front of the card
      </Card>
        )
  }
}
