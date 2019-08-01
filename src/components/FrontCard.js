import React, { Component } from 'react'
import {Card, Button} from 'semantic-ui-react'
import EditNotecardModal from './EditNotecardModal'


export default class FrontCard extends Component {

  handleClick = ev => {
    this.props.onClick(ev)
  }



  render(){

      return (
        <Card className="front">
          <Card.Content onClick={this.handleClick}>{this.props.term}</Card.Content>
          <Button onClick={() => this.props.handleDelete(this.props.cardId)}>Delete</Button> <EditNotecardModal cardId={this.props.cardId} editTerm={this.props.editTerm} editDefinition={this.props.editDefinition} handleEditNotecard={this.props.handleEditNotecard} saveNotecard={this.props.saveNotecard} term={this.props.term} definition={this.props.definition}  />
        </Card>
      )
  }
}
