import React, {Component} from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'


export default class SignUpForm extends Component {

  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    }, () => console.log(this.state)
  )}


  createUser = () => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {first_name: this.state.firstName, last_name: this.state.lastName, username: this.state.username, password: this.state.password}})
    }
    fetch('http://localhost:3000/api/v1/users', config)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      window.location.replace('http://localhost:3001/')
    })
  }


  backToLogin = () => {
    window.location.replace('http://localhost:3001/')
  }

  render(){
    return (
        <Form id="signup" onSubmit={this.createUser}>
          <h2>Ready? Create Your Account Below!</h2>
          <Form.Field onChange={this.handleChange}>
            <label>First Name: </label>
            <input name="firstName" type="text" placeholder="First Name" required/>
          </Form.Field>
          <Form.Field onChange={this.handleChange}>
            <label>Last Name: </label>
            <input name="lastName" type="text" placeholder="Last Name" required/>
          </Form.Field>
          <Form.Field onChange={this.handleChange}>
            <label>Username: </label>
            <input name="username" type="text" placeholder="username" required/>
          </Form.Field>
          <Form.Field onChange={this.handleChange}>
            <label>Password</label>
            <input id="signupSubmit" name="password" type="password" placeholder="Password" required/>
          </Form.Field>

          <Button type='submit'>Create New User</Button>
          <Divider hidden />
        </Form>
    )
  }
}
