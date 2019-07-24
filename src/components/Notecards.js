import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip'
import { Card } from 'semantic-ui-react'


export default class Notecard extends Component {

  constructor(){
    super()
    this.state= {
      myNotecards: []
      isFlipped: false
    }
  }

  handleClick = (ev) => {
   ev.preventDefault();
   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
 }

  componentDidMount() {
    fetch('http://localhost:3000/notecards')
    .then(res => res.json())
    .then(res => this.setState({
      myNotecards: res
    }, () => console.log(res)))
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}
