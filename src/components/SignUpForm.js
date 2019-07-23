import React, {Component} from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'


export default class SignUpForm extends Component {



  render(){
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field label='First name' control='input' placeholder='First name' />
          <Form.Field label='Last name' control='input' placeholder='Last name' />
          <Form.Field label='Username' control='input' placeholder='Username' />
          <Form.Field>
            <label>Password</label>
            <input id="signup" name="password" type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input id="confirm" name="password" type="password" placeholder="Password" />
          </Form.Field>
        </Form.Group>
        <Button type='submit'>Create Account</Button>
        <Divider hidden />
      </Form>
    )
  }
}
