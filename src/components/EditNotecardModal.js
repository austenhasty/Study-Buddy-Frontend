import React, { Component } from 'react'
import {Modal, Header, Button, Form} from 'semantic-ui-react'

export default class EditNotecardModal extends Component {
  
  constructor(){
    super()
    this.state= {
      modalOpen: false
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  handleEdit = (id) => {
    const token = localStorage.getItem('jwt')
    let config = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        notecard: {
          term: this.props.editTerm,
          definition: this.props.editDefinition
          }
      })
    }
    fetch(`http://localhost:3000/api/v1/notecards/${id}`, config)
    .then(res => res.json())
    .then(res => this.props.saveNotecard(res))
    .then(this.handleClose())
    .catch(err => console.log(err))
  }

  render() {
    return(
      <Modal closeIcon trigger={<Button onClick={this.handleOpen}>Edit Notecard</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
        <Modal.Header>Edit Notecard</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <Header>Edit your Notecard:</Header>
            <Form onSubmit={() => this.handleEdit(this.props.cardId)}>
              <Form.Field>
                <label>Term:</label>
                <input name="editTerm" type="text" placeholder={this.props.term} value={this.props.editTerm} onChange={this.props.handleEditNotecard}/>
              </Form.Field>
              <Form.Field>
                <label>Definition:</label>
                <input name="editDefinition" type="text" placeholder={this.props.definition} value={this.props.editDefinition} onChange={this.props.handleEditNotecard}/>
              </Form.Field>
              <input type="submit" className="large ui button" value="Change Notecard" />
            </Form>
     </Modal.Description>
   </Modal.Content>
 </Modal>
    )
  }
}
