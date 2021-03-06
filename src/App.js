import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import NotecardList from './components/NotecardList'

class App extends Component {
  constructor(){
    super()
    this.state= {
      user: null,
      loggedIn: false
    }
  }

  handleLogin = (user) => {
    this.setState({
      user: user,
      loggedIn: true
    })
  }

  logout = () => {
    this.clearToken()
    this.setState({
      user: null,
      loggedIn: false
    })
    window.location.replace('http://localhost:3001/')
  
  }

  clearToken(jwt) {
    localStorage.setItem('jwt', '')
  }

  render() {
    return (
    <div className="App">
      <Router>

        <NavBar handleLogout={this.logout}/>
        <Route path="/users/new" render={(props) => <SignUpForm {...props} />
        }
        />
        <Route exact path="/" render ={(props) => (<LoginForm {...props} user={this.state.user} loggedIN={this.state.loggedIn} handleLogin={this.handleLogin}/>
        )}
        />
        <Route path={"/profile"} render={(props) => <Profile {...props} /> }
        />
        <Route path={"/topics/:id/notecards"} render={(props) => <NotecardList {...props} />} />
      </Router>
    </div>
    );
  }
}

export default App;
