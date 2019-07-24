import React, { Component } from 'react'
import {Button, Header, Modal, Form, List} from 'semantic-ui-react'


export default class Profile extends Component {
  constructor(){
    super()
    this.state = {
      myTopics: []
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

  handleClick= () => {

  }

  render(){
    return (
      <div>
        <Modal trigger={<Button>New Topic</Button>} centered={false}>
          <Modal.Header>Create A New Topic</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <Header>Create a New Topic:</Header>
              <Form>
                <Form.Field>
                  <label>Topic Name:</label>
                  <input name="newtopic" type="text" placeholder="topic name" />
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
