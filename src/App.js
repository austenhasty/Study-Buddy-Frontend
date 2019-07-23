import React, { Component } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

class App extends Component {
  constructor(){
    super()
    this.state= {
      user: null
    }
  }

  updateUser = (user) => {
    this.setState({user: user})
  }

  render() {
    return (
    <div className="App">
      {/* <NavBar />
      <LoginForm user={this.state.user} updateUser={this.updateUser}/> */}
      {/* <SignUpForm /> */}
      <Profile />
    </div>
    );
  }
}

export default App;
