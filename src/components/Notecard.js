import React, {Component} from 'react'
import ReactCardFlip from 'react-card-flip'
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
  <ReactCardFlip isFlipped={this.state.isFlipped}  flipDirection="vertical">

    <FrontCard handleDelete={this.props.handleDelete} cardId={this.props.cardId} key="front" term={this.props.term} onClick={this.handleClick} editTerm={this.props.editTerm} editDefinition={this.props.editDefinition} handleEditNotecard={this.props.handleEditNotecard} saveNotecard={this.props.saveNotecard} definition={this.props.definition}>
    </FrontCard>

    <BackCard key="back" defintion={this.props.definition} onClick={this.handleClick} >
    </BackCard>
  </ReactCardFlip>
    )
  }
}
