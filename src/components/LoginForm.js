import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'


export default class LoginForm extends Component {


  render(){
    return (
      <div>
        <Form>
          <Form.Field>

            <label>Username: </label>
            <input name="username" type="text" placeholder="username" />
          </Form.Field>

          <Form.Field>

            <label>Password: </label>
            <input id="login" name="password" type="password" placeholder="password" />
          </Form.Field>
          <button class="ui button">Sign in</button>
        </Form>
      </div>

    )
  }
}
