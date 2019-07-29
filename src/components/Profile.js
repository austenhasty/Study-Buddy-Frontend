import React, { Component } from 'react'
import {Button, Header, Modal, Form, List, Card} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NotecardList from './NotecardList'


export default class Profile extends Component {
  constructor(){
    super()
    this.state = {
      myTopics: [],
      newTopic: null,
      editTopic: null
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

  handleEditTopic= event => {
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

  handleDelete = (id) => {
    const token = localStorage.getItem('jwt')
    fetch(`http://localhost:3000/api/v1/users_topics/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => res.json())
    .then(this.setState(prevState =>({
      myTopics: prevState.myTopics.filter(topic => topic.id !== id)
    })))
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
      body: JSON.stringify({name: this.state.editTopic})
    })
    .then(res => res.json())
    .then(res => this.saveTopic(res))
  }

  saveTopic= res => {
    let topicArr = this.state.myTopics.slice()
    let level = null

    for (let i=0; i < topicArr.length; i++) {
      if (topicArr[i].id === res.topic.id) {
        level = i
      }
      topicArr[level] = res.topic
      this.setState({
        myTopics: topicArr
      })
    }
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
            return <Card ><List.Item key={topic.id} className="topicList">
              <Link to="/notecards"><h2>{topic.name}</h2></Link>
              <Card.Content >
                <Button onClick={() => this.handleDelete(topic.id)}>Delete</Button>
                <Modal trigger={<Button>Edit Topic</Button>}>
                  <Modal.Header>Edit Your Topic:</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <Header>Edit Your Topic:</Header>
                      <Form>
                        <Form.Field>
                          <label>Topic Name:</label>
                          <input name="editTopic" type="text" placeholder={topic.name} onChange={this.handleEditTopic}/>
                        </Form.Field>
                        <input type="submit" className="large ui button" value="Change Topic"  onClick={() => this.handleEdit(topic.id)}/>
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Card.Content>
            </List.Item>
            </Card>
          })}
        </ul>
        {/* <Router>
          <Route path={"/notecards"} render={(props) => <NotecardList {...props} myTopics={this.state.myTopics}/>} />
        </Router> */}
      </div>
    )
  }
}
