import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip'
import { Card } from 'semantic-ui-react'
import FrontCard from './FrontCard'
import BackCard from './BackCard'


export default class Notecard extends Component {

  constructor(){
    super()
    this.state= {
      // myFronts: [],
      // myBacks: [],
      isFlipped: false,
      cards: []
    }
  }

  handleClick = (ev) => {
   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
 }

  componentDidMount() {
    fetch(' http://localhost:3000/api/v1/notecards')
    .then(res => res.json())
    .then(res => this.setState({
      // myFronts: res.map(card => card.term),
      // myBacks: res.map(card => card.definition),
      cards: res
    }, () => console.log("this.staet=", this.state)))
  }

  render(){
    return(
<div>
  <Card.Group>
    {this.state.cards.map(card => {
      return <ReactCardFlip isFlipped={this.state.isFlipped}  flipDirection="horizontal">

        <FrontCard key="front" term={card.term} onClick={this.handleClick} >
        </FrontCard>



        <BackCard key="back" defintion={card.definition} onClick={this.handleClick} >
        </BackCard>
      </ReactCardFlip>


    })}
  </Card.Group>
  </div>

    )
  }
}
