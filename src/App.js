import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import UserPage from './components/UserPage'


class App extends Component {
  constructor(){
    super()
    this.state ={
      isHomePage: true,
      isUserPage: false
    }
    this.handleHomePage = this.handleHomePage.bind(this)
    this.handleUserPage = this.handleUserPage.bind(this)
  }

  handleHomePage(){
    this.setState({isHomePage: true, isUserPage: false})
  }

  handleUserPage(){
    this.setState({isHomePage: false, isUserPage: true})
  }
  render() {
    return (
      <div className="App">
        <div className="top-left">
          <span onClick={()=>this.handleHomePage()}>Reactor</span>
        </div>
        <div className="top-right">
          <span onClick={()=>this.handleUserPage()}>Log In</span>
        </div>
        {this.state.isHomePage ? <LandingPage /> : <UserPage handleHomePage={this.handleHomePage.bind(this)}/>}
      </div>
    );
  }
}

export default App;
