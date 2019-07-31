import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip'
// import { Card } from 'semantic-ui-react'
import FrontCard from './FrontCard'
import BackCard from './BackCard'


export default class Notecard extends Component {

  constructor(){
    super()
    this.state= {
      isFlipped: false
    }
  }

  handleClick = (ev) => {
   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
 }

  render(){
    return(
<div>
  <ReactCardFlip isFlipped={this.state.isFlipped}  flipDirection="vertical">
    <FrontCard key="front" term={this.props.term} onClick={this.handleClick} >
    </FrontCard>

    <BackCard key="back" defintion={this.props.definition} onClick={this.handleClick} >
    </BackCard>
  </ReactCardFlip>
  </div>

    )
  }
}
