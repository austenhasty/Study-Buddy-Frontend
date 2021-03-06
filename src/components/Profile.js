import React, { Component } from 'react'
import {Button, Header, Modal, Form, Card} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NotecardList from './NotecardList'
import EditTopicModal from './EditTopicModal'


export default class Profile extends Component {
  constructor(){
    super()
    this.state = {
      modalOpen: false,
      myTopics: [],
      newTopic: '',
      editTopic: ''
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
    .then(this.handleClose())
    // .catch(err=>console.log(err))
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
    .catch(err => console.log(err))
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

  render(){
    return (
      <div>
        <Modal closeIcon trigger={<Button onClick={this.handleOpen}>New Topic</Button>} open={this.state.modalOpen} onClose={this.handleClose} centered={false}>
          <Modal.Header>Create A New Topic</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <Header>Create a New Topic:</Header>
              <Form  onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Topic Name:</label>
                  <input name="newTopic" type="text" placeholder="topic name" value={this.state.newTopic} onChange={this.handleNewTopic}/>
                </Form.Field>
                <input  type="submit" className="ui approve button" value="Create Topic" />
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <ul>

          <Card.Group itemsPerRow={2}>
            {this.state.myTopics.map((topic) => {
              return <Card id="topics" key={topic.id}>
                <Card.Content>
                  <Link to={`topics/${topic.id}/notecards`}><h2>{topic.name}</h2></Link>
                </Card.Content>
                <Card.Content extra>
                  <Button onClick={() => this.handleDelete(topic.id)}>Delete</Button>
                  <EditTopicModal topicId={topic.id} handleEdit={this.handleEdit} name={topic.name} handleEditTopic={this.handleEditTopic} myTopics={this.state.mytopics} editTopic={this.state.editTopic} saveTopic={this.saveTopic} />
                </Card.Content>
              </Card>

            })}
          </Card.Group>
        </ul>

        <Router>
          <Route path={"/topics/:id/notecards"} render={(props) => <NotecardList  myTopics={this.state.myTopics} {...props}/>} />
        </Router>
      </div>
    )
  }
}
