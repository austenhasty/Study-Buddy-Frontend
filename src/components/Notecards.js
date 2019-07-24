import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip'
import { Button } from 'semantic-ui-react'
import FrontCard from './FrontCard'
import BackCard from './BackCard'


export default class Notecard extends Component {

  constructor(){
    super()
    this.state= {
      myNotecards: [],
      isFlipped: false
    }
  }

  handleClick = (ev) => {
   // ev.preventDefault();
   console.log('hello')
   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
 }

  // componentDidMount() {
  //   fetch('http://localhost:3000/notecards')
  //   .then(res => res.json())
  //   .then(res => this.setState({
  //     myNotecards: res
  //   }, () => console.log(res)))
  // }

  render(){
    return(
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" onClick={this.handleClick}>
        <FrontCard key="front" handleClick={this.handleClick}>

          <Button >Click to see the AnswerButton</Button>
        </FrontCard>

        <BackCard key="back">
          <Button onClick={this.handleClick}>Click to see the Term/Question</Button>
        </BackCard>
      </ReactCardFlip>
    )
  }
}
