import React, { Component } from 'react'
import {Modal, Form, Header, Button} from 'semantic-ui-react'


export default class EditTopicModal extends Component {
  constructor(){
    super()
    this.state = {
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

  handleEdit= (id) => {
    const token = localStorage.getItem('jwt')
    fetch(`http://localhost:3000/api/v1/topics/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name: this.props.editTopic})
    })
    .then(res => res.json())
    .then(res => this.props.saveTopic(res))
    .then(this.handleClose())
  }
  //
  // saveTopic= res => {
  //   let topicArr = this.props.myTopics.slice()
  //   let level = null
  //
  //   for (let i=0; i < topicArr.length; i++) {
  //     if (topicArr[i].id === res.topic.id) {
  //       level = i
  //     }
  //     topicArr[level] = res.topic
  //     this.setState({
  //       myTopics: topicArr
  //     })
  //   }
  // }

  render() {
    return (
      <Modal closeIcon trigger={<Button onClick={this.handleOpen}>Edit Topic</Button>}  open={this.state.modalOpen} onClose={this.handleClose}>
        <Modal.Header>Edit Your Topic:</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Edit Your Topic:</Header>
            <Form onSubmit={() => this.handleEdit(this.props.topicId)}>
              <Form.Field>
                <label>Topic Name:</label>
                <input name="editTopic" type="text" placeholder={this.props.name} onChange={this.props.handleEditTopic}/>
              </Form.Field>
              <input type="submit" className="large ui button" value="Change Topic"  />
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
