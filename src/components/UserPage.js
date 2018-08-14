import React, { Component } from 'react';
import onboarding from '../assets/onboarding-bg.png';
import Login from '../components/Login';
import SignUp from './SignUp';

class UserPage extends Component {
  constructor(){
    super()
    this.state ={
      isLogin: false,
      isSignUp: true
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleLogin(){
    this.setState({isLogin: true, isSignUp: false})
  }

  handleSignUp(){
    this.setState({isLogin: false, isSignUp: true})
  }

  render() {
    return (
      <div>
        <img src={onboarding} className="background" alt="onboarding background"/>
        <div className="top-left">
          <span onClick={()=>this.props.handleHomePage()}>Reactor</span>
        </div>
        <div className="centered">
          <div className="loginSignUp">
            <h1 style={{float:"left"}}onClick={() => this.handleLogin()}>Login</h1>
            <h1 style={{float:"right"}}onClick={() => this.handleSignUp()}>Sign Up</h1>
          </div>
          {this.state.isLogin ? <Login /> : <SignUp />}
        </div>
      </div>
    );
  }
}

export default UserPage;