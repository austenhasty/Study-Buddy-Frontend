import React, { Component } from 'react'
import {Card, Button} from 'semantic-ui-react'
import EditNotecardModal from './EditNotecardModal'


export default class FrontCard extends Component {

  handleClick = ev => {
    this.props.onClick(ev)
  }



  render(){

      return (
        <div>
          <Card id="front">
            <Card.Content onClick={this.handleClick}>{this.props.term}</Card.Content>
            <Card.Content extra>
              <Button onClick={() => this.props.handleDelete(this.props.cardId)}>Delete</Button> <EditNotecardModal cardId={this.props.cardId} editTerm={this.props.editTerm} editDefinition={this.props.editDefinition} handleEditNotecard={this.props.handleEditNotecard} saveNotecard={this.props.saveNotecard} term={this.props.term} definition={this.props.definition}  />
              </Card.Content>
              </Card>
            </div>
          )
        }
      }
