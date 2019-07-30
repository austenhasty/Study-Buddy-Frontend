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
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    fetch('http://localhost:3000/api/v1/show_by_topic/' + id)
    .then(res => res.json())
    .then(res=> {
      console.log(res)
      return res
    })
    .then(res => this.setState({
      cards: res
    }))
  }

  render(){
    return(
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
