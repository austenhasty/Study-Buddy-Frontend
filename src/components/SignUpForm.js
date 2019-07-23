import React, {Component} from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'


export default class SignUpForm extends Component {



  render(){
    return (
      <Form className="signup">
        <h2>Ready? Create Your Account Below!</h2>
        <Form.Field>
          <label>First Name: </label>
          <input name="firstName" type="text" placeholder="First Name"/>
        </Form.Field>
        <Form.Field>
          <label>Last Name: </label>
          <input name="lastName" type="text" placeholder="Last Name"/>
        </Form.Field>
        <Form.Field>
          <label>Username: </label>
          <input name="username" type="text" placeholder="username"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input id="signup" name="password" type="password" placeholder="Password" />
        </Form.Field>

        <Button type='submit'>Create Account</Button>
        <Divider hidden />
      </Form>
    )
  }
}
