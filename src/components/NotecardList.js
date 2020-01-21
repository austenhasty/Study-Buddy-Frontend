import React, { Component } from 'react'
import Notecard from './Notecard'
import { Card, Button, Modal, Header, Form } from 'semantic-ui-react'


export default class NotecardList extends Component {

  constructor(){
    super()
    this.state = {
      cards: [],
      newTerm: '',
      newDefinition: '',
      editTerm: '',
      editDefinition: '',
      modalOpen: false
    }
  }

  handleOpen= () => {
    console.log('FIRED')
    this.setState({
      modalOpen: true
    })
  }

  handleClose= () => {
    console.log('CLOSED')
    this.setState({
      modalOpen: false
    })
  }

  handleEditNotecard= event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleNewNotecard = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  handleSubmit= (ev) => {
    ev.preventDefault()
    // const id = this.props.match.params.id
    const token = localStorage.getItem('jwt')
    let config = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        notecard: {
          term: this.state.newTerm,
          definition: this.state.newDefinition,
        },
          topic_id: this.props.match.params.id
      })
    }

    fetch('http://localhost:3000/api/v1/notecards', config)
    .then(res => res.json())
    .then(res => this.setState(prevState => ({
      cards: [...prevState.cards, res.notecard]
    })))
    .then(this.handleClose())
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

  handleDelete = (id) => {
    const token = localStorage.getItem('jwt')
    let config = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    }
    fetch(`http://localhost:3000/api/v1/topics_notecards/${id}`, config)

    .then(res => res.json())
    .then(this.setState(prevState => ({
      cards: prevState.cards.filter(card => card.id !== id)
    })))
    .catch(err => console.log(err))
  }

  saveNotecard= res => {
    let noteArray = this.state.cards.slice()
    let level = null

    for (let i=0; i < noteArray.length; i++) {
      if (noteArray[i].id === res.notecard.id) {
        level = i
      }
      noteArray[level] = res.notecard
      this.setState({
        cards: noteArray
      })
    }
  }

  render(){
    return(
      <React.Fragment>
        <Modal closeIcon trigger={<Button onClick={this.handleOpen}>Add Notecard</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Add Another Notecard</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <Header>Create A New Notecard</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Term: </label>
                  <input name="newTerm" type="text" placeholder="term" value={this.state.newTerm} onChange={this.handleNewNotecard}/>
                </Form.Field>
                <Form.Field>
                  <label>Definition: </label>
                  <input name="newDefinition" type="text" placeholder="definition" value={this.state.newDefinition} onChange={this.handleNewNotecard} />
                </Form.Field>
                <input  type="submit" className="ui approve button" value="Create Notecard" />
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ul>
          <Card.Group itemsPerRow={2}>
            {this.state.cards.map(card => {
              return <Notecard key={card.id} term={card.term} definition={card.definition}  handleDelete={this.handleDelete} cardId={card.id} editTerm={this.state.editTerm} editDefinition={this.state.editDefinition} handleEditNotecard={this.handleEditNotecard} saveNotecard={this.saveNotecard}/>
            })}
          </Card.Group>
            </ul>
      </React.Fragment>
    )
  }
}
