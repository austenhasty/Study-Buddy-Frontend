import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Notecards from './components/Notecards'

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
      <Router>

        <NavBar />
        <Route path="/users/new" render={(props) => <SignUpForm {...props} onCreateUser={this.updateUser}/>
        }
        />
        <Route exact path="/" render ={(props) => (<LoginForm {...props} user={this.state.user} onLogin={this.updateUser}/>
        )}
        />
        <Route path={"/profile"} render={(props) => <Profile {...props} /> }
        />
        <Route path={"/notecards"} render={(props) => <Notecards {...props} />} />
          </Router>
    </div>
    );
  }
}

export default App;
