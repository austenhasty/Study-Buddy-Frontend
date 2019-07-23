import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class LoginForm extends Component {

state ={
  username: ''
}

constructor() {
  super()
  this.username = React.createRef()
  this.password = React.createRef()

  if (this.getToken()) {
    this.getProfile()
  }
}

login = (ev) => {
  ev.preventDefault()

  let username = this.username.current.value
  let password = this.password.current.value

  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user:{username, password} })
  })
  .then(res => res.json())
  .then(json => {
    console.log('login:', json)
    if (json && json.jwt) {
      this.saveToken(json.jwt)
      this.getProfile()
    }
  })
}

logout = () => {
  this.clearToken()
  this.setState({username: ''})
  return false
}

getProfile = () => {
  let token = this.getToken()
  fetch('http://localhost:3000/api/v1/profile', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
    })
  .then (res => res.json())
  .then(json => {
    console.log('profile:', json)
    this.setState({user: json.user})
    })
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  clearToken(jwt) {
    localStorage.setItem('jwt', '')
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }


  render(){
    return (
      <div>
        <Form className="login" onSubmit={this.login}>
          <h2>Welcome To Study Buddy! Please Sign In</h2>
          <div>
            <Form.Field>
              <label>Username: </label>
              <input name="username" type="text" placeholder="username" ref={this.username}/>
            </Form.Field>

            <Form.Field>
              <label>Password: </label>
              <input id="login" name="password" type="password" placeholder="password" ref={this.password}/>
            </Form.Field>
            <input type="submit" className="large ui button" value="Sign In" />
            <div>Don't have an account?</div>
            <Link to="/users/new">Create Account</Link>
          </div>
        </Form>
      </div>

            )
  }
}
