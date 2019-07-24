import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'


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
        {/* <Card>
          <h3>
            Welcome {this.props.username}
          </h3>
        </Card> */}
        <h2>My Topics</h2>
        <Button>Create New Topic</Button>
        <ul>
          {this.state.myTopics.map((topic, id) => {
            return <li id="topicId" className="topicList">{topic.name}</li>
          })}
        </ul>
      </div>
    )
  }
}
