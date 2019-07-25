import React, { Component } from 'react'
import {Button, Header, Modal, Form, List} from 'semantic-ui-react'


export default class Profile extends Component {
  constructor(){
    super()
    this.state = {
      myTopics: [],
      newTopic: null
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt')
    fetch('http://localhost:3000/api/v1/topics', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        myTopics: res
      })
    })
  }

  handleNewTopic= event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit= (ev) => {
    ev.preventDefault()
    const token = localStorage.getItem('jwt')
    fetch('http://localhost:3000/api/v1/topics', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name: this.state.newTopic})
    })
    .then(res => res.json())
    .then(res => this.setState(prevState=> ({
      myTopics: [...prevState.myTopics, res.topic]
    })))
  }

  render(){
    return (
      <div>
        <Modal trigger={<Button>New Topic</Button>} centered={false}>
          <Modal.Header>Create A New Topic</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <Header>Create a New Topic:</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Topic Name:</label>
                  <input name="newTopic" type="text" placeholder="topic name" onChange={this.handleNewTopic}/>
                </Form.Field>
                <input type="submit" className="large ui button" value="Create Topic" />
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ul>
          {this.state.myTopics.map((topic) => {
            return <List.Item key={topic.id} className="topicList">{topic.name}</List.Item>
          })}
        </ul>
      </div>
    )
  }
}
