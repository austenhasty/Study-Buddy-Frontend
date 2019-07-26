import React, { Component } from 'react'
import Notecard from './Notecard'
import { Card } from 'semantic-ui-react'


export default class NotecardList extends Component {

  constructor(){
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch(' http://localhost:3000/api/v1/notecards')
    .then(res => res.json())
    .then(res => this.setState({
      // myFronts: res.map(card => card.term),
      // myBacks: res.map(card => card.definition),
      cards: res
    }))
  }

  render(){
    return(
      // <React.Fragment>
      //
      // </React.Fragment>
      <React.Fragment>
        <Card.Group>
        {this.state.cards.map(card => {
          return <Notecard key={card.id} term={card.term} definition={card.definition}  />
        })}
      </Card.Group>
      </React.Fragment>
    )
  }
}
