import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'


export default class Profile extends Component {
  constructor(){
    super()
    this.state = {
      myTopics: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/topics')
    .then(res => res.json())
    .then(res => this.setState({
      myTopics: res
    }))
  }


  render(){
    return (
      <div>
        <Card>
          <h3>
            Welcome {this.props.username}
          </h3>
        </Card>

      </div>
    )
  }
}
